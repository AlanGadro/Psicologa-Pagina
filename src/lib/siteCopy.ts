import type { SupportedLanguage } from './language'

export type LabeledItem = {
  title: string
  description: string
}

type StepItem = {
  number: string
  title: string
  description: string
}

type QuoteItem = {
  quote: string
  author: string
}

type SiteCopy = {
  brand: {
    eyebrow: string
    name: string
  }
  navigation: {
    ariaLabel: string
    menuLabel: string
    menuOpenLabel: string
    menuCloseLabel: string
    links: Record<'home' | 'about' | 'services' | 'studies' | 'contact', string>
  }
  footer: {
    navigationTitle: string
    navigationLabel: string
    tagline: string
    mode: string
    contactTitle: string
    whatsappCta: string
    copyright: string
  }
  home: {
    hero: {
      eyebrow: string
      title: string
      lead: string
      primaryCta: string
      secondaryCta: string
      highlightsLabel: string
      highlights: string[]
    }
    process: {
      eyebrow: string
      title: string
      description: string
      steps: StepItem[]
    }
    testimonials: {
      eyebrow: string
      title: string
      description: string
      items: QuoteItem[]
    }
  }
  about: {
    eyebrow: string
    title: string
    description: string
    paragraphs: string[]
    highlights: string[]
    imageAlt: string
  }
  services: {
    eyebrow: string
    title: string
    description: string
    items: LabeledItem[]
  }
  studies: {
    eyebrow: string
    title: string
    description: string
    items: LabeledItem[]
  }
  contact: {
    eyebrow: string
    title: string
    description: string
    intro: string
    emailLabel: string
    whatsappLabel: string
    modalityLabel: string
    modalityValue: string
    whatsappButton: string
  }
}

export const siteCopy: Record<SupportedLanguage, SiteCopy> = {
  es: {
    brand: {
      eyebrow: 'Psicología clínica',
      name: 'Dra. Valeria Morales',
    },
    navigation: {
      ariaLabel: 'Principal',
      menuLabel: 'Menú',
      menuOpenLabel: 'Abrir navegación',
      menuCloseLabel: 'Cerrar navegación',
      links: {
        home: 'Inicio',
        about: 'Sobre mí',
        services: 'Servicios',
        studies: 'Formación',
        contact: 'Contacto',
      },
    },
    footer: {
      navigationTitle: 'Navegación',
      navigationLabel: 'Navegación del pie de página',
      tagline:
        'Un espacio profesional y humano para acompañarte con claridad, respeto y cercanía.',
      mode: 'Atención presencial y online',
      contactTitle: 'Hablemos por WhatsApp',
      whatsappCta: 'Escribir por WhatsApp',
      copyright: '© 2026 Dra. Valeria Morales',
    },
    home: {
      hero: {
        eyebrow: 'Psicología clínica',
        title: 'Un espacio profesional para tu bienestar emocional',
        lead:
          'La Dra. Valeria Morales ofrece atención psicológica cercana, clara y respetuosa para acompañarte en momentos de ansiedad, cambios personales y vínculos.',
        primaryCta: 'Conocer servicios',
        secondaryCta: 'Sobre la profesional',
        highlightsLabel: 'Aspectos destacados del acompañamiento',
        highlights: [
          'Atención cercana y profesional',
          'Un espacio seguro para hablar con calma',
          'Proceso adaptado a tu momento personal',
        ],
      },
      process: {
        eyebrow: 'Proceso',
        title: 'Cómo es el acompañamiento',
        description:
          'Mostrar el proceso desde la home ayuda a bajar la incertidumbre y a que pedir ayuda se sienta más claro y accesible.',
        steps: [
          {
            number: '01',
            title: 'Primer contacto',
            description:
              'Una primera conversación para conocer tu motivo de consulta y responder dudas sobre el proceso.',
          },
          {
            number: '02',
            title: 'Evaluación y objetivos',
            description:
              'Se construyen objetivos terapéuticos realistas, respetando tu momento y el ritmo que necesites.',
          },
          {
            number: '03',
            title: 'Proceso de acompañamiento',
            description:
              'Un trabajo sostenido, profesional y humano para abordar con mayor claridad lo que hoy te preocupa.',
          },
        ],
      },
      testimonials: {
        eyebrow: 'Testimonios',
        title: 'Experiencias que transmiten confianza',
        description:
          'En la página de inicio, los testimonios funcionan como un refuerzo breve de confianza sin recargar el recorrido del usuario.',
        items: [
          {
            quote:
              'Me sentí escuchada desde el inicio. El proceso me ayudó a ordenar lo que estaba viviendo con más calma y claridad.',
            author: 'Gabriela, paciente',
          },
          {
            quote:
              'Encontré un espacio profesional y humano. Pude trabajar mi ansiedad sin sentirme juzgado.',
            author: 'Carlos, paciente',
          },
        ],
      },
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'Dra. Valeria Morales',
      description:
        'Psicóloga clínica orientada a ofrecer un espacio de escucha atenta, acompañamiento respetuoso y herramientas útiles para transitar procesos personales con mayor claridad.',
      paragraphs: [
        'El objetivo de cada encuentro es que puedas sentirte escuchado con seriedad, calidez y sin juicios, en un proceso adaptado a tu momento y a tus necesidades.',
        'El acompañamiento terapéutico se construye desde una mirada ética, humana y profesional, cuidando tus tiempos y promoviendo cambios sostenibles en tu bienestar emocional.',
      ],
      highlights: ['Escucha profesional', 'Trabajo respetuoso', 'Modalidad flexible'],
      imageAlt: 'Retrato profesional de la Dra. Valeria Morales',
    },
    services: {
      eyebrow: 'Servicios',
      title: 'Áreas de acompañamiento',
      description:
        'Una página específica de servicios permite explicar mejor en qué situaciones puede ser útil comenzar un proceso terapéutico.',
      items: [
        {
          title: 'Ansiedad y manejo emocional',
          description:
            'Acompañamiento para comprender síntomas, bajar el nivel de saturación y desarrollar recursos prácticos para la vida cotidiana.',
        },
        {
          title: 'Autoestima y relaciones',
          description:
            'Trabajo terapéutico orientado a fortalecer tu vínculo contigo mismo y mejorar la forma en que te relacionas con los demás.',
        },
        {
          title: 'Duelo y procesos de cambio',
          description:
            'Apoyo profesional para atravesar separaciones, pérdidas, decisiones importantes y otras transiciones personales o laborales.',
        },
      ],
    },
    studies: {
      eyebrow: 'Formación',
      title: 'Estudios y preparación profesional',
      description:
        'Esta página ayuda a reforzar la confianza mostrando formación, trayectoria y actualización profesional de manera clara y sobria.',
      items: [
        {
          title: 'Licenciatura en Psicología',
          description:
            'Formación universitaria de base orientada al trabajo clínico y al acompañamiento en salud mental.',
        },
        {
          title: 'Especialización en psicoterapia',
          description:
            'Capacitación complementaria en herramientas clínicas y enfoques terapéuticos aplicados a la práctica profesional.',
        },
        {
          title: 'Actualización permanente',
          description:
            'Participación en formación continua vinculada a ansiedad, vínculos, regulación emocional y procesos de cambio.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Da el primer paso con tranquilidad',
      description:
        'Esta página puede concentrar el canal principal de contacto, horario de atención y una invitación clara pero respetuosa a agendar una primera conversación.',
      intro:
        'Si estás buscando un espacio profesional para comenzar tu proceso, puedes escribir para recibir información sobre modalidad, horarios y disponibilidad.',
      emailLabel: 'Email',
      whatsappLabel: 'WhatsApp',
      modalityLabel: 'Modalidad',
      modalityValue: 'presencial y online',
      whatsappButton: 'Iniciar conversación por WhatsApp',
    },
  },
  en: {
    brand: {
      eyebrow: 'Clinical psychology',
      name: 'Dr. Valeria Morales',
    },
    navigation: {
      ariaLabel: 'Primary',
      menuLabel: 'Menu',
      menuOpenLabel: 'Open navigation',
      menuCloseLabel: 'Close navigation',
      links: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        studies: 'Training',
        contact: 'Contact',
      },
    },
    footer: {
      navigationTitle: 'Navigation',
      navigationLabel: 'Footer navigation',
      tagline:
        'A professional and human space to support you with clarity, respect, and warmth.',
      mode: 'In-person and online sessions',
      contactTitle: 'Let’s talk on WhatsApp',
      whatsappCta: 'Message on WhatsApp',
      copyright: '© 2026 Dr. Valeria Morales',
    },
    home: {
      hero: {
        eyebrow: 'Clinical psychology',
        title: 'Professional care for your emotional well-being',
        lead:
          'Dr. Valeria Morales offers warm, clear, and respectful psychological support for anxiety, personal changes, and relationship difficulties.',
        primaryCta: 'Explore services',
        secondaryCta: 'About Dr. Morales',
        highlightsLabel: 'Highlights of the support process',
        highlights: [
          'Warm, professional care',
          'A safe space to speak calmly',
          'Support adapted to your current situation',
        ],
      },
      process: {
        eyebrow: 'Process',
        title: 'What support looks like',
        description:
          'Showing the process on the home page helps reduce uncertainty and makes reaching out feel clearer and more approachable.',
        steps: [
          {
            number: '01',
            title: 'First contact',
            description:
              'An initial conversation to understand your reason for seeking support and answer questions about the process.',
          },
          {
            number: '02',
            title: 'Assessment and goals',
            description:
              'Realistic therapeutic goals are defined while respecting your current moment and the pace you need.',
          },
          {
            number: '03',
            title: 'Ongoing support process',
            description:
              'Steady, professional, and human support to help you approach what is affecting you with greater clarity.',
          }
        ],
      },
      testimonials: {
        eyebrow: 'Testimonials',
        title: 'Experiences that inspire trust',
        description:
          'On the homepage, testimonials work best as a short and honest trust signal without overloading the user journey.',
        items: [
          {
            quote:
              'I felt truly heard from the beginning. The process helped me organize what I was going through with more calm and clarity.',
            author: 'Gabriela, client',
          },
          {
            quote:
              'I found a professional and human space. I was able to work through my anxiety without feeling judged.',
            author: 'Carlos, client',
          },
        ],
      },
    },
    about: {
      eyebrow: 'About',
      title: 'Dr. Valeria Morales',
      description:
        'A clinical psychologist focused on offering attentive listening, respectful support, and practical tools to move through personal processes with greater clarity.',
      paragraphs: [
        'The goal of each meeting is to help you feel heard with seriousness, warmth, and without judgment, in a process adapted to your present moment and your needs.',
        'Therapeutic support is built from an ethical, human, and professional perspective, respecting your pace and encouraging sustainable changes in your emotional wellbeing.',
      ],
      highlights: ['Professional listening', 'Respectful support', 'Flexible format'],
      imageAlt: 'Professional portrait of Dr. Valeria Morales',
    },
    services: {
      eyebrow: 'Services',
      title: 'Areas of support',
      description:
        'A dedicated services page makes it easier to explain in which situations starting therapy may be helpful.',
      items: [
        {
          title: 'Anxiety and emotional regulation',
          description:
            'Support to understand symptoms, lower overwhelm, and develop practical resources for everyday life.',
        },
        {
          title: 'Self-esteem and relationships',
          description:
            'Therapeutic work focused on strengthening your relationship with yourself and improving the way you relate to others.',
        },
        {
          title: 'Grief and life transitions',
          description:
            'Professional support through separations, losses, important decisions, and other personal or work transitions.',
        },
      ],
    },
    studies: {
      eyebrow: 'Training',
      title: 'Education and professional preparation',
      description:
        'This page reinforces trust by presenting education, professional background, and ongoing training in a clear and grounded way.',
      items: [
        {
          title: 'Degree in Psychology',
          description:
            'University-based foundational training focused on clinical work and mental health support.',
        },
        {
          title: 'Specialization in psychotherapy',
          description:
            'Additional training in clinical tools and therapeutic approaches applied to professional practice.',
        },
        {
          title: 'Ongoing professional development',
          description:
            'Continued education related to anxiety, relationships, emotional regulation, and life transitions.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Take the first step with calm',
      description:
        'This page can hold the main contact channel, availability details, and a clear but respectful invitation to schedule an initial conversation.',
      intro:
        'If you are looking for a professional space to begin your process, you can write to receive information about format, schedule, and availability.',
      emailLabel: 'Email',
      whatsappLabel: 'WhatsApp',
      modalityLabel: 'Format',
      modalityValue: 'in-person and online',
      whatsappButton: 'Start a WhatsApp conversation',
    },
  },
}
