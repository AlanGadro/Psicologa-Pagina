type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  centered?: boolean
}

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
