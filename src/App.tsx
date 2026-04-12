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
    document.documentElement.lang = language
    document.documentElement.dataset.language = language
  }, [language])

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
