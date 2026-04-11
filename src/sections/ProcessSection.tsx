import SectionHeading from '../components/SectionHeading'

const steps = [
  {
    number: '01',
    title: 'Primer contacto',
    description:
      'Una primera conversación para conocer tu motivo de consulta y responder dudas sobre el proceso.',
  },
  {
    number: '02',
    title: 'Evaluación y objetivos',
    description:
      'Se construyen objetivos terapéuticos realistas, respetando tu momento y el ritmo que necesites.',
  },
  {
    number: '03',
    title: 'Proceso de acompañamiento',
    description:
      'Un trabajo sostenido, profesional y humano para abordar con mayor claridad lo que hoy te preocupa.',
  },
]

function ProcessSection() {
  return (
    <section className="section" id="process">
      <div className="container">
        <SectionHeading
          eyebrow="Proceso"
          title="Cómo es el acompañamiento"
          description="Mostrar el proceso desde la home ayuda a bajar la incertidumbre y a que pedir ayuda se sienta más claro y accesible."
        />

        <div className="steps-grid">
          {steps.map((step) => (
            <article className="step-card" key={step.number}>
              <span className="step-card__number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
