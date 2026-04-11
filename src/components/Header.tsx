import { NavLink } from 'react-router-dom'

const navigationLinks = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/sobre-mi', label: 'Sobre mí' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/formacion', label: 'Formación' },
  { to: '/contacto', label: 'Contacto' },
]

function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <NavLink className="site-brand" to="/">
          <span className="site-brand__eyebrow">Psicología clínica</span>
          <strong>Dra. Valeria Morales</strong>
        </NavLink>

        <nav aria-label="Principal">
          <ul className="site-nav">
            {navigationLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'site-nav__link site-nav__link--active' : 'site-nav__link'
                  }
                  end={link.end}
                  to={link.to}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
