import SectionHeading from '../components/SectionHeading'

const studies = [
  {
    title: 'Licenciatura en Psicología',
    description: 'Formación universitaria de base orientada al trabajo clínico y al acompañamiento en salud mental.',
  },
  {
    title: 'Especialización en psicoterapia',
    description: 'Capacitación complementaria en herramientas clínicas y enfoques terapéuticos aplicados a la práctica profesional.',
  },
  {
    title: 'Actualización permanente',
    description: 'Participación en formación continua vinculada a ansiedad, vínculos, regulación emocional y procesos de cambio.',
  },
]

function StudiesSection() {
  return (
    <section className="section section--accent" id="studies">
      <div className="container">
        <SectionHeading
          eyebrow="Formación"
          title="Estudios y preparación profesional"
          description="Esta página ayuda a reforzar la confianza mostrando formación, trayectoria y actualización profesional de manera clara y sobria."
        />

        <div className="study-list">
          {studies.map((study) => (
            <article className="study-item" key={study.title}>
              <strong>{study.title}</strong>
              <p>{study.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StudiesSection
