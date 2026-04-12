import LabeledItemGrid from '../components/LabeledItemGrid'
import SectionShell from '../components/SectionShell'
import useSiteCopy from '../hooks/useSiteCopy'

function ServicesSection() {
  const copy = useSiteCopy()

  return (
    <SectionShell
      id="services"
      sectionClassName="section section--soft"
      eyebrow={copy.services.eyebrow}
      title={copy.services.title}
      description={copy.services.description}
    >
      <LabeledItemGrid items={copy.services.items} />
    </SectionShell>
  )
}

export default ServicesSection
