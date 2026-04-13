import PageShell from '../components/PageShell'
import HeroSection from '../sections/HeroSection'
import ProcessSection from '../sections/ProcessSection'
import TestimonialsSection from '../sections/TestimonialsSection'

function HomePage() {
  // The homepage stays as a thin composition layer so the section modules own
  // their own content, layout, and reuse without extra page-specific glue.
  return (
    <PageShell>
      <HeroSection />
      <ProcessSection />
      <TestimonialsSection />
    </PageShell>
  )
}

export default HomePage
