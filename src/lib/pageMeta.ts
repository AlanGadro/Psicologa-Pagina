import { routes } from './routes'
import type { SupportedLanguage } from './language'

const pageTitles: Record<SupportedLanguage, Record<string, string>> = {
  es: {
    [routes.home]: 'Inicio | Dra. Valeria Morales',
    [routes.about]: 'Sobre mí | Dra. Valeria Morales',
    [routes.services]: 'Servicios | Dra. Valeria Morales',
    [routes.studies]: 'Formación | Dra. Valeria Morales',
    [routes.contact]: 'Contacto | Dra. Valeria Morales',
  },
  en: {
    [routes.home]: 'Home | Dr. Valeria Morales',
    [routes.about]: 'About | Dr. Valeria Morales',
    [routes.services]: 'Services | Dr. Valeria Morales',
    [routes.studies]: 'Training | Dr. Valeria Morales',
    [routes.contact]: 'Contact | Dr. Valeria Morales',
  },
}

export function getPageTitle(pathname: string, language: SupportedLanguage) {
  return pageTitles[language][pathname] ?? pageTitles[language][routes.home]
}
