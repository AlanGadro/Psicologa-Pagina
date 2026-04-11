import SectionHeading from '../components/SectionHeading'

const services = [
  {
    title: 'Ansiedad y manejo emocional',
    description:
      'Acompañamiento para comprender síntomas, bajar el nivel de saturación y desarrollar recursos prácticos para la vida cotidiana.',
  },
  {
    title: 'Autoestima y relaciones',
    description:
      'Trabajo terapéutico orientado a fortalecer tu vínculo contigo mismo y mejorar la forma en que te relacionas con los demás.',
  },
  {
    title: 'Duelo y procesos de cambio',
    description:
      'Apoyo profesional para atravesar separaciones, pérdidas, decisiones importantes y otras transiciones personales o laborales.',
  },
]

function ServicesSection() {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="Servicios"
          title="Áreas de acompañamiento"
          description="Una página específica de servicios permite explicar mejor en qué situaciones puede ser útil comenzar un proceso terapéutico."
        />

        <div className="card-grid">
          {services.map((service) => (
            <article className="info-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
