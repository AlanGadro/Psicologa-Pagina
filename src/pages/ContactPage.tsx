import SectionHeading from '../components/SectionHeading'

function ContactPage() {
  return (
    <main className="app-shell">
      <section className="section">
        <div className="container contact-page">
          <SectionHeading
            eyebrow="Contacto"
            title="Da el primer paso con tranquilidad"
            description="Esta página puede concentrar el canal principal de contacto, horario de atención y una invitación clara pero respetuosa a agendar una primera conversación."
          />

          <div className="contact-card">
            <p>
              Si estás buscando un espacio profesional para comenzar tu proceso,
              puedes escribir para recibir información sobre modalidad, horarios y
              disponibilidad.
            </p>

            <div className="contact-card__details">
              <p>
                <strong>Email:</strong> contacto@valeriamorales.com
              </p>
              <p>
                <strong>WhatsApp:</strong> +54 9 11 0000 0000
              </p>
              <p>
                <strong>Modalidad:</strong> presencial y online
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
