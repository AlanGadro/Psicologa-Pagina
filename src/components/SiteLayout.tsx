import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { getPageTitle } from '../lib/pageMeta'
import Footer from './Footer'
import Header from './Header'

function SiteLayout() {
  const location = useLocation()
  const language = useLanguage()

  useEffect(() => {
    // Route changes should always reopen the page at the top; this mirrors
    // a full-page navigation and avoids landing mid-scroll on the next view.
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  useEffect(() => {
    // Titles are derived from route + locale so shared layout chrome can stay
    // generic while each page still feels locally branded.
    document.title = getPageTitle(location.pathname, language)
  }, [language, location.pathname])

  return (
    <div className="site-shell">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default SiteLayout
