import whatsappIcon from '../components/icons/whatsapp-svgrepo-com.svg'
import PageShell from '../components/PageShell'
import SectionShell from '../components/SectionShell'
import useSiteCopy from '../hooks/useSiteCopy'
import { getContactEmail, getWhatsAppDisplayNumber, getWhatsAppUrl } from '../lib/contact'

function ContactPage() {
  const copy = useSiteCopy()
  const whatsappUrl = getWhatsAppUrl(copy.contact.whatsappButton)
  const contactEmail = getContactEmail()

  return (
    <PageShell>
      <SectionShell
        sectionClassName="section"
        containerClassName="container contact-page"
        eyebrow={copy.contact.eyebrow}
        title={copy.contact.title}
        description={copy.contact.description}
      >
          <div className="contact-card">
            <p>{copy.contact.intro}</p>

            <div className="contact-card__details">
              <p>
                <strong>{copy.contact.emailLabel}:</strong> {contactEmail}
              </p>
              <p>
                <strong>{copy.contact.whatsappLabel}:</strong> {getWhatsAppDisplayNumber()}
              </p>
              <p>
                <strong>{copy.contact.modalityLabel}:</strong> {copy.contact.modalityValue}
              </p>
            </div>

            <a className="contact-card__whatsapp" href={whatsappUrl} rel="noreferrer" target="_blank">
              <img alt="" src={whatsappIcon} />
              <span>{copy.contact.whatsappButton}</span>
            </a>
          </div>
      </SectionShell>
    </PageShell>
  )
}

export default ContactPage
