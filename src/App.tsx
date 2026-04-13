import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import { LanguageProvider } from './context/LanguageContext'
import useBrowserLanguage from './hooks/useBrowserLanguage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import StudiesPage from './pages/StudiesPage'

function App() {
  const language = useBrowserLanguage()

  useEffect(() => {
    // Keep the document language in sync so browser features and assistive tech
    // read the active locale correctly after the client bootstraps.
    document.documentElement.lang = language
    document.documentElement.dataset.language = language
  }, [language])

  // Locale is resolved before routing so every page, shared layout, and copy
  // lookup reads from the same language value on the first client render.
  return (
    <LanguageProvider language={language}>
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path="sobre-mi" element={<AboutPage />} />
            <Route path="servicios" element={<ServicesPage />} />
            <Route path="formacion" element={<StudiesPage />} />
            <Route path="contacto" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
