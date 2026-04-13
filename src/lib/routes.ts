// Route paths are centralized so navigation, titles, and link matching all use
// the same canonical URLs instead of duplicating string literals.
export const routes = {
  home: '/',
  about: '/sobre-mi',
  services: '/servicios',
  studies: '/formacion',
  contact: '/contacto',
} as const

// The navigation order is part of the site's information architecture. Keep it
// aligned with the header/footer and use the `key` values to look up localized
// labels from `siteCopy`.
export const primaryNavigation = [
  { to: routes.home, key: 'home', end: true },
  { to: routes.about, key: 'about' },
  { to: routes.services, key: 'services' },
  { to: routes.studies, key: 'studies' },
  { to: routes.contact, key: 'contact' },
] as const
