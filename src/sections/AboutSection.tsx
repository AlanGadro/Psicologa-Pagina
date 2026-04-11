import SectionHeading from '../components/SectionHeading'
import profilePicture from '../img/profile-picture.jpg'

function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container about">
        <div className="about__media">
          <img src={profilePicture} alt="Retrato profesional de la Dra. Valeria Morales" />
        </div>

        <div className="about__content">
          <SectionHeading
            eyebrow="Sobre mí"
            title="Dra. Valeria Morales"
            description="Psicóloga clínica orientada a ofrecer un espacio de escucha atenta, acompañamiento respetuoso y herramientas útiles para transitar procesos personales con mayor claridad."
          />

          <div className="about__text">
            <p>
              El objetivo de cada encuentro es que puedas sentirte escuchado con
              seriedad, calidez y sin juicios, en un proceso adaptado a tu momento
              y a tus necesidades.
            </p>
            <p>
              El acompañamiento terapéutico se construye desde una mirada ética,
              humana y profesional, cuidando tus tiempos y promoviendo cambios
              sostenibles en tu bienestar emocional.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
