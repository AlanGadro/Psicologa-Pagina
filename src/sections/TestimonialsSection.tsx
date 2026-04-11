import SectionHeading from '../components/SectionHeading'

const testimonials = [
  {
    quote:
      'Me sentí escuchada desde el inicio. El proceso me ayudó a ordenar lo que estaba viviendo con más calma y claridad.',
    author: 'Paciente',
  },
  {
    quote:
      'Encontré un espacio profesional y humano. Pude trabajar mi ansiedad sin sentirme juzgado.',
    author: 'Paciente',
  },
]

function TestimonialsSection() {
  return (
    <section className="section section--soft" id="testimonials">
      <div className="container">
        <SectionHeading
          eyebrow="Testimonios"
          title="Experiencias que transmiten confianza"
          description="En la página de inicio, los testimonios funcionan como un refuerzo breve de confianza sin recargar el recorrido del usuario."
        />

        <div className="card-grid card-grid--two-columns">
          {testimonials.map((testimonial, index) => (
            <blockquote className="quote-card" key={`${testimonial.author}-${index}`}>
              <p>“{testimonial.quote}”</p>
              <cite>{testimonial.author}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
