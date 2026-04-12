import { useLanguage } from '../context/LanguageContext'
import { siteCopy } from '../lib/siteCopy'

function useSiteCopy() {
  const language = useLanguage()

  return siteCopy[language]
}

export default useSiteCopy
