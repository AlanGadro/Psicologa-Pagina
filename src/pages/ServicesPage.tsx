import PageShell from '../components/PageShell'
import ServicesSection from '../sections/ServicesSection'

function ServicesPage() {
  // Services is a dedicated route, but the actual card content stays in the
  // section module so it can be reused without duplicating structure here.
  return (
    <PageShell>
      <ServicesSection />
    </PageShell>
  )
}

export default ServicesPage
