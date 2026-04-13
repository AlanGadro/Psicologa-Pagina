import SectionHeading from '../components/SectionHeading'
import useSiteCopy from '../hooks/useSiteCopy'
import profilePicture from '../img/profile-picture.jpg'

function AboutSection() {
  const copy = useSiteCopy()

  return (
    // Portrait plus short bio keeps the about page human without turning it into
    // a long-form profile that would bury the key trust signals.
    <section className="section" id="about">
      <div className="container about">
        <div className="about__media">
          <img src={profilePicture} alt={copy.about.imageAlt} />
        </div>

        <div className="about__content">
          <SectionHeading
            eyebrow={copy.about.eyebrow}
            title={copy.about.title}
            description={copy.about.description}
          />

          <div className="about__text">
            {copy.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="about__summary">
              {copy.about.highlights.map((highlight) => (
                <span key={highlight}>{highlight}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
