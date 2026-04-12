import PageShell from '../components/PageShell'
import HeroSection from '../sections/HeroSection'
import ProcessSection from '../sections/ProcessSection'
import TestimonialsSection from '../sections/TestimonialsSection'

function HomePage() {
  return (
    <PageShell>
      <HeroSection />
      <ProcessSection />
      <TestimonialsSection />
    </PageShell>
  )
}

export default HomePage
