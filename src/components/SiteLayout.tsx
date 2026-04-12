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
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  useEffect(() => {
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
