import { NavLink } from 'react-router-dom'
import whatsappIcon from './icons/whatsapp-svgrepo-com.svg'
import useSiteCopy from '../hooks/useSiteCopy'
import { getContactEmail, getWhatsAppUrl } from '../lib/contact'
import { primaryNavigation } from '../lib/routes'

function Footer() {
  const copy = useSiteCopy()
  // These contact targets live in one place so the footer and contact page
  // cannot drift if the WhatsApp number or email changes.
  const whatsappUrl = getWhatsAppUrl(copy.footer.whatsappCta)
  const contactEmail = getContactEmail()

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <span className="site-footer__eyebrow">{copy.brand.eyebrow}</span>
            <strong>{copy.brand.name}</strong>
            <p>{copy.footer.tagline}</p>
            <p className="site-footer__mode">{copy.footer.mode}</p>
          </div>

          <nav className="site-footer__nav" aria-label={copy.footer.navigationLabel}>
            <span className="site-footer__label">{copy.footer.navigationTitle}</span>
            {primaryNavigation.map((link) => (
              <NavLink key={link.to} to={link.to}>
                {copy.navigation.links[link.key]}
              </NavLink>
            ))}
          </nav>

          <div className="site-footer__contact-card">
            <span className="site-footer__label">{copy.footer.contactTitle}</span>
            <a
              className="site-footer__whatsapp"
              href={whatsappUrl}
              rel="noreferrer"
              target="_blank"
            >
              <img alt="" src={whatsappIcon} />
              <span>{copy.footer.whatsappCta}</span>
            </a>
            <a className="site-footer__email" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>{copy.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
