import { useLanguage } from '../context/LanguageContext'
import { siteCopy } from '../lib/siteCopy.ts'

// This hook keeps copy selection in one place so components only care about the
// current language and never reach into the copy table directly.
function useSiteCopy() {
  const language = useLanguage()

  return siteCopy[language]
}

export default useSiteCopy
