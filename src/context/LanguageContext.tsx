import { createContext, useContext, type ReactNode } from 'react'
import type { SupportedLanguage } from '../lib/language'

const LanguageContext = createContext<SupportedLanguage>('es')
// Defaulting to Spanish keeps the app usable even if a consumer renders a
// localized component outside the provider during development.

type LanguageProviderProps = {
  language: SupportedLanguage
  children: ReactNode
}

// The provider only carries the selected locale; all actual content stays in
// the centralized copy tables so components remain presentation-only.
export function LanguageProvider({ language, children }: LanguageProviderProps) {
  return <LanguageContext.Provider value={language}>{children}</LanguageContext.Provider>
}

// Consumers should treat this as the single source of truth for the active
// locale rather than passing language props through the tree.
export function useLanguage() {
  return useContext(LanguageContext)
}
