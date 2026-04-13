import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './sass/main.scss'

// StrictMode stays at the root so development checks cover the full app shell
// while the shared stylesheet is loaded exactly once before rendering begins.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
