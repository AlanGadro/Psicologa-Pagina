export const routes = {
  home: '/',
  about: '/sobre-mi',
  services: '/servicios',
  studies: '/formacion',
  contact: '/contacto',
} as const

export const primaryNavigation = [
  { to: routes.home, key: 'home', end: true },
  { to: routes.about, key: 'about' },
  { to: routes.services, key: 'services' },
  { to: routes.studies, key: 'studies' },
  { to: routes.contact, key: 'contact' },
] as const
