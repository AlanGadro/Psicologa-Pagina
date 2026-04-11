import { Link } from 'react-router-dom'
import heroImage from '../img/hero.jpg'

function HeroSection() {
  return (
    <section className="hero section section--hero" id="home">
      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="hero__eyebrow">Psicología clínica</span>
          <h1>Un espacio profesional y humano para cuidar tu bienestar emocional</h1>
          <p className="hero__lead">
            La Dra. Valeria Morales ofrece atención psicológica con un enfoque
            cercano, claro y respetuoso, para acompañarte en momentos de ansiedad,
            cambios personales, vínculos y bienestar emocional.
          </p>

          <div className="hero__actions">
            <Link className="button-link button-link--primary" to="/servicios">
              Conocer servicios
            </Link>
            <Link className="button-link button-link--secondary" to="/sobre-mi">
              Sobre la profesional
            </Link>
          </div>

          <ul className="hero__highlights" aria-label="Aspectos destacados del acompañamiento">
            <li>Atención cercana y profesional</li>
            <li>Un espacio seguro para hablar con calma</li>
            <li>Proceso adaptado a tu momento personal</li>
          </ul>
        </div>

        <div className="hero__media">
          <img
            src={heroImage}
            alt="Espacio cálido y sereno para acompañamiento psicológico"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
