import PageShell from '../components/PageShell'
import StudiesSection from '../sections/StudiesSection'

function StudiesPage() {
  // Training content follows the same page-shell pattern as services so the
  // navigation flow stays consistent across the informational routes.
  return (
    <PageShell>
      <StudiesSection />
    </PageShell>
  )
}

export default StudiesPage
