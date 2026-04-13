export type SupportedLanguage = 'es' | 'en'

export function detectBrowserLanguage(): SupportedLanguage {
  if (typeof navigator === 'undefined') {
    // Server-side or test environments fall back to Spanish so the first
    // render always has a stable default language.
    return 'es'
  }

  const languages = navigator.languages?.length ? navigator.languages : [navigator.language]

  for (const language of languages) {
    const normalized = language.toLowerCase()

    if (normalized.startsWith('es')) {
      return 'es'
    }

    if (normalized.startsWith('en')) {
      return 'en'
    }
  }

  return 'es'
}
