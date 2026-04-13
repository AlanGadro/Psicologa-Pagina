type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  centered?: boolean
}

// A small heading primitive keeps section chrome consistent while still letting
// the caller decide whether the heading should be centered or left-aligned.
function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  const className = centered
    ? 'section-heading section-heading--center'
    : 'section-heading'

  return (
    <div className={className}>
      <span className="section-heading__eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default SectionHeading
