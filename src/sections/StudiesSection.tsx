import LabeledItemGrid from '../components/LabeledItemGrid'
import SectionShell from '../components/SectionShell'
import useSiteCopy from '../hooks/useSiteCopy'

function StudiesSection() {
  const copy = useSiteCopy()

  return (
    <SectionShell
      id="studies"
      sectionClassName="section section--accent"
      eyebrow={copy.studies.eyebrow}
      title={copy.studies.title}
      description={copy.studies.description}
    >
      <LabeledItemGrid
        items={copy.studies.items}
        listClassName="study-list"
        itemClassName="study-item"
        headingTag="strong"
      />
    </SectionShell>
  )
}

export default StudiesSection
