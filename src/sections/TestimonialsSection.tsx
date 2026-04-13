import SectionShell from '../components/SectionShell'
import useSiteCopy from '../hooks/useSiteCopy'

function TestimonialsSection() {
  const copy = useSiteCopy()

  // Short quotes work best here: they add trust without sounding promotional
  // or competing with the main service and contact calls to action.
  return (
    <SectionShell
      id="testimonials"
      sectionClassName="section section--soft"
      eyebrow={copy.home.testimonials.eyebrow}
      title={copy.home.testimonials.title}
      description={copy.home.testimonials.description}
    >
      <div className="card-grid card-grid--two-columns">
        {copy.home.testimonials.items.map((testimonial, index) => (
          <blockquote className="quote-card" key={`${testimonial.author}-${index}`}>
            <p>“{testimonial.quote}”</p>
            <cite>{testimonial.author}</cite>
          </blockquote>
        ))}
      </div>
    </SectionShell>
  )
}

export default TestimonialsSection
