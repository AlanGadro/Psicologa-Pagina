import { useMemo } from 'react'
import { detectBrowserLanguage, type SupportedLanguage } from '../lib/language'

function useBrowserLanguage(): SupportedLanguage {
  return useMemo(() => detectBrowserLanguage(), [])
}

export default useBrowserLanguage
