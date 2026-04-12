import SectionShell from '../components/SectionShell'
import useSiteCopy from '../hooks/useSiteCopy'

function ProcessSection() {
  const copy = useSiteCopy()

  return (
    <SectionShell
      id="process"
      eyebrow={copy.home.process.eyebrow}
      title={copy.home.process.title}
      description={copy.home.process.description}
    >
      <div className="steps-grid">
        {copy.home.process.steps.map((step) => (
          <article className="step-card" key={step.number}>
            <span className="step-card__number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}

export default ProcessSection
