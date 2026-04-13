import { useMemo } from 'react'
import { detectBrowserLanguage, type SupportedLanguage } from '../lib/language'

function useBrowserLanguage(): SupportedLanguage {
  // Language detection is pure, so memoizing once avoids re-running it on each
  // render without changing the result.
  return useMemo(() => detectBrowserLanguage(), [])
}

export default useBrowserLanguage
