import { createContext, useContext, type ReactNode } from 'react'
import type { SupportedLanguage } from '../lib/language'

const LanguageContext = createContext<SupportedLanguage>('es')

type LanguageProviderProps = {
  language: SupportedLanguage
  children: ReactNode
}

export function LanguageProvider({ language, children }: LanguageProviderProps) {
  return <LanguageContext.Provider value={language}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
