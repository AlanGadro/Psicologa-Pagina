import LabeledItemGrid from '../components/LabeledItemGrid'
import SectionShell from '../components/SectionShell'
import useSiteCopy from '../hooks/useSiteCopy'

function ServicesSection() {
  const copy = useSiteCopy()

  // Services reuses the generic item grid so the page can stay focused on the
  // clinical offering rather than introducing one-off card markup.
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
