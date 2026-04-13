import PageShell from '../components/PageShell'
import AboutSection from '../sections/AboutSection'

function AboutPage() {
  // This route intentionally delegates almost everything to the section so the
  // page keeps a single responsibility: choosing the right full-width block.
  return (
    <PageShell>
      <AboutSection />
    </PageShell>
  )
}

export default AboutPage
