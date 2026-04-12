import { Link } from 'react-router-dom'
import useSiteCopy from '../hooks/useSiteCopy'
import { routes } from '../lib/routes'

function HeroSection() {
  const copy = useSiteCopy()

  return (
    <section className="hero section section--hero" id="home">
      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="hero__eyebrow">{copy.home.hero.eyebrow}</span>
          <h1>{copy.home.hero.title}</h1>
          <p className="hero__lead">{copy.home.hero.lead}</p>

          <ul className="hero__highlights" aria-label={copy.home.hero.highlightsLabel}>
            {copy.home.hero.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          <div className="hero__actions">
            <Link className="button-link button-link--primary" to={routes.services}>
              {copy.home.hero.primaryCta}
            </Link>
            <Link className="button-link button-link--secondary" to={routes.about}>
              {copy.home.hero.secondaryCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
