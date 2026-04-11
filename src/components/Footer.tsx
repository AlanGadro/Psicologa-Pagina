import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <span className="site-footer__eyebrow">Psicología clínica</span>
          <strong>Dra. Valeria Morales</strong>
          <p>
            Un espacio profesional y humano para acompañarte con claridad,
            respeto y cercanía.
          </p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/sobre-mi">Sobre mí</NavLink>
          <NavLink to="/servicios">Servicios</NavLink>
          <NavLink to="/formacion">Formación</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
        </nav>

        <div className="site-footer__info">
          <p>Atención presencial y online</p>
          <p>contacto@valeriamorales.com</p>
          <p>© 2026 Dra. Valeria Morales</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
