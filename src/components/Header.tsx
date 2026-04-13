import type { CSSProperties } from 'react'
import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import brainIcon from './icons/BrainIcon.svg'
import useSiteCopy from '../hooks/useSiteCopy'
import { primaryNavigation } from '../lib/routes'

function isExactLink(
  link: (typeof primaryNavigation)[number],
): link is Extract<(typeof primaryNavigation)[number], { end: true }> {
  // Only the home route needs exact matching; nested pages should not keep the
  // root link active just because their pathname starts with '/'.
  return 'end' in link && link.end === true
}

function Header() {
  const copy = useSiteCopy()
  const location = useLocation()
  const [isVisible, setIsVisible] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const lastScrollY = useRef(0)
  const brainIconStyle = {
    WebkitMaskImage: `url(${brainIcon})`,
    maskImage: `url(${brainIcon})`,
  } as CSSProperties

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    // Reset the header state when navigating between pages so the menu and
    // scroll-aware visibility logic do not leak from the previous route.
    lastScrollY.current = window.scrollY
    setIsVisible(true)
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }

    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const getThreshold = () => {
      // The homepage header stays visible through the hero; other pages use a
      // shorter threshold because they do not need the same introductory room.
      if (location.pathname !== '/') {
        return 140
      }

      const hero = document.getElementById('home')

      if (!hero) {
        return 280
      }

      return Math.max(hero.offsetHeight - 112, 180)
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const threshold = getThreshold()

      // When the mobile menu is open, the header must remain visible even if
      // the scroll position would normally hide it.
      if (isMenuOpen) {
        setIsVisible(true)
        lastScrollY.current = currentScrollY
        return
      }

      if (currentScrollY <= threshold) {
        setIsVisible(true)
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      lastScrollY.current = currentScrollY
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [isMenuOpen, location.pathname])

  const headerClass = [
    'site-header',
    isVisible ? '' : 'site-header--hidden',
    isMenuOpen ? 'site-header--menu-open' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header className={headerClass}>
      <div className="container site-header__inner">
        <NavLink className="site-brand" to="/">
          <div className="site-brand__text">
            <span className="site-brand__eyebrow">{copy.brand.eyebrow}</span>
            <strong>{copy.brand.name}</strong>
          </div>
          <span className="site-brand__icon" aria-hidden="true">
            <span className="site-brand__icon-mark" style={brainIconStyle} />
          </span>
        </NavLink>

        <button
          aria-controls="site-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? copy.navigation.menuCloseLabel : copy.navigation.menuOpenLabel}
          className="site-header__menu-button"
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          <span className="site-header__menu-label">{copy.navigation.menuLabel}</span>
          <span className="site-header__menu-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav
          aria-label={copy.navigation.ariaLabel}
          className={isMenuOpen ? 'site-header__nav site-header__nav--open' : 'site-header__nav'}
          id="site-navigation"
        >
          <ul className="site-nav">
            {primaryNavigation.map((link) => (
              <li key={link.to}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'site-nav__link site-nav__link--active' : 'site-nav__link'
                  }
                  end={isExactLink(link)}
                  onClick={() => setIsMenuOpen(false)}
                  to={link.to}
                >
                  {copy.navigation.links[link.key]}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
