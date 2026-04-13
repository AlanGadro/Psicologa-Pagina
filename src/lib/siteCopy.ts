import type { SupportedLanguage } from './language'

// All public-facing copy is centralized here so the UI can switch languages
// without scattering translated strings across components.
//
// The structure is intentionally repetitive across locales: each language must
// expose the same keys so components can stay dumb and only select by language.
// When adding a new section, update both locales together and keep the shape in
// sync rather than introducing language-specific branches in the UI.
export type LabeledItem = {
  title: string
  description: string
}

// Small repeated content blocks used by timeline-style and quote-style UI.
// Keeping them local to this file avoids exporting one-off types all over the app.
type StepItem = {
  number: string
  title: string
  description: string
}

type QuoteItem = {
  quote: string
  author: string
}

// This is the canonical content contract for the site. It mirrors the page
// structure and gives every consumer a single source of truth for copy shape.
//
// Keep the hierarchy stable: brand/navigation/footer are shared chrome, while
// the page sections underneath match the actual routes rendered by the app.
type SiteCopy = {
  // Shared identity and navigation labels used in the header/footer chrome.
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
  // Footer content intentionally reuses some navigation and contact strings so
  // the same wording appears consistently across the layout.
  footer: {
    navigationTitle: string
    navigationLabel: string
    tagline: string
    mode: string
    contactTitle: string
    whatsappCta: string
    copyright: string
  }
  // Homepage copy is split into small content blocks so the landing page can be
  // assembled from simple presentational components without hard-coded text.
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
  // About/service/studies/contact pages each have their own content bundle so
  // route components can stay focused on layout rather than text ownership.
  about: {
    eyebrow: string
    title: string
    description: string
    paragraphs: string[]
    highlights: string[]
    imageAlt: string
  }
  // Services and studies use the same item shape on purpose: a title plus a
  // short description is enough for the card grid layout on both pages.
  services: {
    eyebrow: string
    title: string
    description: string
    items: LabeledItem[]
  }
  // Studies mirrors services so both pages can use the same rendering logic.
  studies: {
    eyebrow: string
    title: string
    description: string
    items: LabeledItem[]
  }
  // Contact strings are grouped here because the footer and dedicated contact
  // page both depend on them, and they must stay consistent.
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

// The Spanish and English entries must remain structurally identical. When a
// key changes in one locale, it should change in the other unless there is a
// deliberate content gap that components can safely ignore.
export const siteCopy: Record<SupportedLanguage, SiteCopy> = {
  // Spanish is the primary editorial source; English mirrors it closely so the
  // site reads like a true translation instead of a partial second draft.
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
      // Home content favors reassurance and orientation: the hero explains the
      // offer, the process reduces uncertainty, and testimonials add trust.
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
        // The step sequence is linear because the UI presents it as a simple
        // first-contact-to-follow-up journey.
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
        // Testimonials are intentionally short and neutral so they support the
        // professional tone instead of reading like marketing copy.
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
      // The about page repeats the same professional framing in both locales so
      // the user's trust-building journey stays consistent regardless of language.
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
      // Service cards use the same short format in both languages to keep the
      // grid balanced and make it easy to add or reorder offerings later.
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
      // This section is intentionally more formal than the services copy; it is
      // meant to reinforce credibility without sounding inflated.
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
      // Contact copy is written to feel calm and practical: it should invite
      // action without sounding pushy or overly sales-oriented.
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
  // English is a parallel content set, not a free-form rewrite; the same page
  // blocks exist so components can switch locales without special cases.
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
      // These sections map 1:1 with the Spanish content to preserve the same
      // page rhythm and component composition in both languages.
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
        // The sequence and wording stay aligned with Spanish so the timeline UI
        // does not need locale-specific logic.
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
        // The testimonials mirror the Spanish set in intent even though the
        // wording is adapted naturally for English readers.
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
      // The about page keeps the same informational scope across locales so the
      // clinician profile feels equally complete in either language.
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
      // Service labels stay short to preserve card balance and prevent the grid
      // from becoming visually uneven in translated content.
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
      // Keeping this page structurally parallel to services makes the shared
      // card component reusable for future content updates.
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
      // The contact page must remain easy to skim because it is the main action
      // endpoint for the site, regardless of language.
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
