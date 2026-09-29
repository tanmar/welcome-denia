export type Lang = "es" | "en" | "de";
export const LANGS: Lang[] = ["es", "en", "de"];

export type Dict = (typeof dictionaries)["es"];

export const dictionaries = {
  es: {
    htmlLang: "es",
    meta: {
      title: "WelcomeDenia — Cuidado de propiedades en Dénia y la Marina Alta",
      description:
        "Cuidado de casas y asistencia local en Dénia, Marina Alta, Calpe, Altea y Benidorm. Revisiones, llaves, mantenimiento y ayuda práctica, con comunicación clara en español, inglés y alemán.",
    },
    nav: {
      services: "Servicios",
      about: "Sobre nosotros",
      how: "Cómo funciona",
      area: "Zona de servicio",
      contact: "Contacto",
      cta: "Contactar",
      menu: "Abrir menú",
      close: "Cerrar menú",
      language: "Idioma",
      languageLabel: "Seleccionar idioma",
    },
    hero: {
      eyebrow: "Dénia · Marina Alta",
      title: "Su casa en Dénia, cuidada mientras usted no está.",
      lead: "Desde revisiones periódicas y llegadas de huéspedes hasta pequeñas reparaciones y gestiones del día a día: nos ocupamos de los detalles y le informamos con claridad en su idioma.",
      primary: "Contactar",
      secondary: "Ver servicios",
      trust: [
        "10 años de experiencia",
        "Español, inglés y alemán a nivel nativo",
        "Atención personal",
        "Actualizaciones con fotos y vídeo",
      ],
      portraitPlaceholder: "Su equipo local en Dénia",
      imageAlt: "Terraza de una casa mediterránea con vistas al mar en Dénia",
    },
    services: {
      eyebrow: "Servicios",
      title: "Lo que hacemos por usted",
      lead: "El cuidado de la propiedad es el eje principal. La asistencia local complementa ese trabajo cuando hace falta.",
      groups: [
        {
          tag: "Principal",
          title: "Cuidado del hogar y de la vivienda vacacional",
          items: [
            "Revisiones periódicas de la vivienda",
            "Custodia de llaves",
            "Limpieza",
            "Pequeñas reparaciones y mantenimiento",
            "Cuidado de piscina y jardín",
            "Preparar la casa antes de su llegada",
            "Entradas y salidas de huéspedes y ayuda práctica durante su estancia",
          ],
        },
        {
          tag: "Supervisión",
          title: "Supervisión de reformas",
          items: [
            "Seguimiento en obra",
            "Control del avance de los trabajos",
            "Actualizaciones con fotos y vídeo",
            "Análisis de costes y explicaciones claras",
          ],
          note: "Supervisamos y documentamos la obra. No ejecutamos trabajos especializados ni actuamos como electricista, arquitecto o abogado.",
        },
        {
          tag: "Complementario",
          title: "Asistencia local y cotidiana",
          items: [
            "Apoyo práctico con trámites administrativos, incluidas citas y papeles relacionados con el NIE",
            "Ayuda en la comunicación con suministradores como Iberdrola",
            "Apoyo con gestiones locales y barreras de idioma",
            "Cuidado de mascotas, con el alcance acordado individualmente",
          ],
          note: "Se trata de ayuda práctica y de acompañamiento. No incluye representación oficial ni garantía de resoluciones o aprobaciones.",
        },
      ],
      personal:
        "Realizamos directamente los servicios de cuidado de la propiedad y la supervisión de reformas.",
    },
    about: {
      eyebrow: "Sobre nosotros",
      title: "Un contacto de confianza, no un número de expediente",
      paragraphs: [
        "«Llevamos diez años trabajando en el mantenimiento de viviendas en Dénia. Conocemos las casas de aquí: el salitre, las persianas, las piscinas en invierno y lo que se estropea cuando nadie mira.»",
        "«También acompañamos a residentes internacionales en la Marina Alta: orientación práctica, trámites y comunicación entre culturas. Hablamos español, inglés y alemán a nivel nativo, así que hablamos de su casa sin intermediarios.»",
        "«Trabajamos de forma ordenada y respondemos personalmente. Usted tiene un único interlocutor que entiende tanto la vivienda como lo que usted necesita.»",
      ],
      facts: [
        "10 años de experiencia",
        "Conocimiento local de Dénia",
        "Trabajo fiable y organizado",
        "Experiencia con residentes internacionales",
        "ES · EN · DE a nivel nativo",
      ],
      portraitNote: "WelcomeDenia · Dénia",
    },
    transparency: {
      eyebrow: "Transparencia",
      title: "Sepa qué ocurre, esté donde esté",
      lead: "Usted decide el nivel de detalle. Documentamos lo que hacemos y lo explicamos sin tecnicismos.",
      bullets: [
        "Informes claros",
        "Fotos y vídeos cortos",
        "Actualización del avance",
        "Análisis de costes",
      ],
      sampleLabel: "Ejemplo ilustrativo — no es un informe real de un cliente",
      sample: {
        title: "Informe de visita",
        date: "Fecha de visita",
        dateValue: "12 de marzo",
        checked: "Zonas revisadas",
        checkedValue: "Exterior, terraza, piscina, cocina, baños, cuadro eléctrico",
        media: "Material",
        mediaValue: "8 fotos · 1 vídeo corto de la piscina",
        observations: "Observaciones",
        observationsValue:
          "Todo correcto en el interior. Junta de una persiana de la terraza desgastada y filtro de piscina con suciedad acumulada.",
        next: "Próximos pasos propuestos",
        nextValue: "Cambiar la junta y limpiar el filtro en la próxima visita.",
        cost: "Coste estimado",
        costValue: "Presupuesto enviado antes de ejecutar cualquier trabajo",
      },
      imageAlt: "Piscina y jardín mediterráneo junto a una vivienda",
    },
    how: {
      eyebrow: "Cómo funciona",
      title: "Empezar es sencillo",
      steps: [
        {
          title: "Cuéntenos lo que necesita",
          text: "Su vivienda, su situación o la gestión concreta con la que necesita ayuda.",
        },
        {
          title: "Acordamos alcance, calendario y costes",
          text: "Hablamos de qué se hace, cada cuánto y qué coste tiene antes de empezar.",
        },
        {
          title: "Recibe atención personal y actualizaciones claras",
          text: "Nos ocupamos y le mantenemos informado en su idioma.",
        },
      ],
    },
    area: {
      eyebrow: "Zona de servicio",
      title: "Con base en Dénia, cerca de su casa",
      lead: "Trabajamos en Dénia y la Marina Alta, además de localidades costeras cercanas. Si su vivienda está cerca de esta zona, pregúntenos directamente.",
      places: ["Dénia", "Marina Alta", "Calpe", "Altea", "Benidorm"],
      ask: "¿Su localidad no aparece? Pregunte y le diremos con sinceridad si podemos atenderle.",
      imageAlt: "Costa de la Marina Alta con el Montgó al fondo",
    },
    testimonials: {
      eyebrow: "Opiniones",
      title: "Opiniones de clientes",
      note: "Sección preparada para publicar opiniones verificadas cuando estén disponibles.",
      placeholders: [
        "[Opinión verificada sobre cuidado de propiedades pendiente de añadir]",
        "[Opinión verificada sobre supervisión de reformas pendiente de añadir]",
        "[Opinión verificada sobre asistencia local pendiente de añadir]",
      ],
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Dudas habituales",
      items: [
        {
          q: "¿Puede cuidar mi casa mientras estoy en el extranjero?",
          a: "Sí. Realizamos revisiones periódicas, custodia de llaves, limpieza, pequeñas reparaciones y cuidado de piscina y jardín, con la frecuencia que acordemos.",
        },
        {
          q: "¿Puede preparar la vivienda para huéspedes de vacaciones?",
          a: "Sí. Incluye preparar la casa antes de la llegada, recibir y despedir a los huéspedes y ayudarles con cuestiones prácticas durante su estancia.",
        },
        {
          q: "¿Qué idiomas habla?",
          a: "Español, inglés y alemán a nivel nativo.",
        },
        {
          q: "¿Cómo recibiré las actualizaciones?",
          a: "Con informes claros, fotos y vídeos cortos, y explicaciones de los costes cuando corresponda. Acordamos juntos la frecuencia y el canal.",
        },
        {
          q: "¿Puede supervisar una reforma?",
          a: "Puede hacer seguimiento en obra, controlar el avance, enviar fotos y vídeo y analizar los costes. La ejecución especializada corre a cargo de los profesionales correspondientes.",
        },
        {
          q: "¿Ayuda con trámites y suministros?",
          a: "Ofrece apoyo práctico con trámites, incluidas citas y documentación relacionadas con el NIE, y con la comunicación con suministradores como Iberdrola. Es acompañamiento práctico, sin representación oficial ni garantía de resultados.",
        },
        {
          q: "¿Ofrece cuidado de mascotas?",
          a: "Sí, con el alcance acordado individualmente en cada caso.",
        },
        {
          q: "¿Qué zonas cubre?",
          a: "Dénia y la Marina Alta, además de localidades cercanas como Calpe, Altea y Benidorm. Pregunte por su localidad concreta.",
        },
        {
          q: "¿Cómo puedo hablar de precios?",
          a: "El alcance y el precio se acuerdan de forma individual según su vivienda y lo que necesite. Escríbanos y lo comentamos sin compromiso.",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Hablemos de su casa y de lo que necesita.",
      lead: "Cuéntenos su situación. Le responderemos personalmente en español, inglés o alemán.",
      whatsapp: "WhatsApp",
      phone: "Teléfono",
      email: "Correo electrónico",
      placeholderValue: "Pendiente de añadir",
      form: {
        title: "Formulario breve",
        name: "Nombre",
        contact: "Correo electrónico o teléfono",
        location: "Ubicación de la propiedad",
        help: "Tipo de ayuda",
        helpOptions: [
          "Cuidado de la vivienda",
          "Vivienda vacacional y huéspedes",
          "Supervisión de reformas",
          "Asistencia local y trámites",
          "Otro",
        ],
        language: "Idioma preferido",
        languageOptions: ["Español", "English", "Deutsch"],
        message: "Mensaje",
        optional: "opcional",
        submit: "Enviar consulta",
        required: "Este campo es obligatorio",
        invalidContact: "Indique un correo electrónico o un teléfono válidos",
        notConfigured:
          "El envío del formulario aún no está configurado. Por ahora, escríbanos por WhatsApp o correo electrónico.",
      },
    },
    footer: {
      tagline:
        "Cuidado de propiedades y asistencia local en Dénia y la Marina Alta.",
      rights: "Todos los derechos reservados.",
      disclaimer:
        "Los servicios se acuerdan individualmente. Esta web no ofrece asesoramiento jurídico, técnico ni fiscal.",
      nav: "Navegación del pie de página",
    },
    mobileBar: { call: "Llamar", write: "WhatsApp" },
  },

  en: {
    htmlLang: "en",
    meta: {
      title: "WelcomeDenia — Property care in Dénia and the Marina Alta",
      description:
        "Property care and local assistance in Dénia, Marina Alta, Calpe, Altea and Benidorm. Checks, keyholding, maintenance and practical help, with clear updates in Spanish, English or German.",
    },
    nav: {
      services: "Services",
      about: "About us",
      how: "How it works",
      area: "Service area",
      contact: "Contact",
      cta: "Get in touch",
      menu: "Open menu",
      close: "Close menu",
      language: "Language",
      languageLabel: "Select language",
    },
    hero: {
      eyebrow: "Dénia · Marina Alta",
      title: "Your home in Dénia, cared for while you're away.",
      lead: "From regular property checks and guest arrivals to repairs and everyday local matters, we take care of the details—with clear updates in your language.",
      primary: "Get in touch",
      secondary: "Explore services",
      trust: [
        "10 years of experience",
        "Native-level Spanish, English and German",
        "Personal attention",
        "Photo and video updates",
      ],
      portraitPlaceholder: "Your local team in Dénia",
      imageAlt: "Terrace of a Mediterranean home overlooking the sea in Dénia",
    },
    services: {
      eyebrow: "Services",
      title: "What we do for you",
      lead: "Property care is the core of the work. Local assistance complements it when you need it.",
      groups: [
        {
          tag: "Core",
          title: "Home and holiday property care",
          items: [
            "Regular property inspections",
            "Keyholding",
            "Cleaning",
            "Minor repairs and maintenance",
            "Pool and garden care",
            "Preparing the home before you arrive",
            "Guest arrivals, departures and practical guest assistance",
          ],
        },
        {
          tag: "Oversight",
          title: "Renovation supervision",
          items: [
            "On-site oversight",
            "Progress checks",
            "Photo and video updates",
            "Cost analysis and clear explanations",
          ],
          note: "We supervise and document the work. We do not carry out specialist renovation trades and are not electricians, architect or lawyer.",
        },
        {
          tag: "Complementary",
          title: "Local and everyday assistance",
          items: [
            "Practical support with administrative procedures, including NIE-related appointments and paperwork",
            "Help communicating with utility providers such as Iberdrola",
            "Support with local arrangements and language barriers",
            "Pet care, with the scope agreed individually",
          ],
          note: "This is practical help and accompaniment. It does not include official representation or any promise of approvals or outcomes.",
        },
      ],
      personal:
        "We directly carry out the property care services and the renovation supervision.",
    },
    about: {
      eyebrow: "About us",
      title: "A contact you can trust, not a case number",
      paragraphs: [
        "\"We've spent ten years maintaining homes in Dénia. We know the houses in this area: the salt air, the shutters, the pools in winter, and what quietly goes wrong when nobody is looking.\"",
        "\"We also help international residents in the Marina Alta with practical guidance, paperwork and communication between cultures. We speak Spanish, English and German at native level, so we can talk about your home directly.\"",
        "\"We work in an organised way and answer personally. You have one point of contact who understands both the property and what you need.\"",
      ],
      facts: [
        "10 years of experience",
        "Deep local knowledge of Dénia",
        "Reliable, organised work",
        "Experience supporting international residents",
        "Native-level ES · EN · DE",
      ],
      portraitNote: "WelcomeDenia · Dénia",
    },
    transparency: {
      eyebrow: "Transparency",
      title: "Know what's happening, wherever you are.",
      lead: "You decide how much detail you want. We document the work and explains it in plain language.",
      bullets: ["Clear reports", "Photos and short videos", "Progress updates", "Cost analysis"],
      sampleLabel: "Illustrative example — not a real client report",
      sample: {
        title: "Property update",
        date: "Visit date",
        dateValue: "12 March",
        checked: "Areas checked",
        checkedValue: "Exterior, terrace, pool, kitchen, bathrooms, fuse box",
        media: "Media",
        mediaValue: "8 photos · 1 short pool video",
        observations: "Observations",
        observationsValue:
          "Interior all in order. One terrace shutter seal is worn and the pool filter has a build-up of debris.",
        next: "Recommended next steps",
        nextValue: "Replace the seal and clean the filter on the next visit.",
        cost: "Cost information",
        costValue: "A quote is sent before any work is carried out",
      },
      imageAlt: "Pool and Mediterranean garden beside a villa",
    },
    how: {
      eyebrow: "How it works",
      title: "Getting started is simple",
      steps: [
        {
          title: "Tell us about your property or the help you need",
          text: "Your home, your situation, or the specific task you'd like handled.",
        },
        {
          title: "Discuss scope, timing and expected costs",
          text: "You agree what gets done, how often, and what it costs before anything starts.",
        },
        {
          title: "Receive personal support and clear updates",
          text: "We take care of it and keep you informed in your language.",
        },
      ],
    },
    area: {
      eyebrow: "Service area",
      title: "Based in Dénia, close to your home",
      lead: "We work in Dénia and the Marina Alta, plus nearby coastal locations. If your property is close to this area, just ask.",
      places: ["Dénia", "Marina Alta", "Calpe", "Altea", "Benidorm"],
      ask: "Not on the list? Ask, and we'll tell you honestly whether we can help.",
      imageAlt: "Marina Alta coastline with the Montgó in the distance",
    },
    testimonials: {
      eyebrow: "Reviews",
      title: "What clients say",
      note: "Section prepared for verified reviews once they are available.",
      placeholders: [
        "[Verified property care testimonial to be added]",
        "[Verified renovation supervision testimonial to be added]",
        "[Verified local assistance testimonial to be added]",
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common questions",
      items: [
        {
          q: "Can you look after my home while I am abroad?",
          a: "Yes. We handle regular inspections, keyholding, cleaning, minor repairs and pool and garden care, at whatever frequency you agree.",
        },
        {
          q: "Can you prepare my property for holiday guests?",
          a: "Yes. That includes preparing the home before arrival, welcoming and checking out guests, and helping them with practical matters during their stay.",
        },
        { q: "Which languages do you speak?", a: "Spanish, English and German at native level." },
        {
          q: "How will I receive updates?",
          a: "Through clear reports, photos and short videos, plus cost explanations where relevant. You agree the frequency and channel together.",
        },
        {
          q: "Can you supervise renovation work?",
          a: "He can provide on-site oversight, progress checks, photo and video updates and cost analysis. Specialist trades are carried out by the relevant professionals.",
        },
        {
          q: "Can you help with local paperwork and utilities?",
          a: "He offers practical support with procedures, including NIE-related appointments and paperwork, and with communicating with providers such as Iberdrola. This is practical assistance, without official representation or guaranteed outcomes.",
        },
        { q: "Do you offer pet care?", a: "Yes, with the scope agreed individually in each case." },
        {
          q: "Which areas do you cover?",
          a: "Dénia and the Marina Alta, plus nearby locations such as Calpe, Altea and Benidorm. Ask about your specific location.",
        },
        {
          q: "How can I discuss pricing?",
          a: "Scope and pricing are agreed individually, based on your property and what you need. Message us and we can talk it through with no obligation.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk about your home—and what you need.",
      lead: "Tell us about your situation. We reply personally in Spanish, English or German.",
      whatsapp: "WhatsApp",
      phone: "Telephone",
      email: "Email",
      placeholderValue: "To be added",
      form: {
        title: "Short contact form",
        name: "Name",
        contact: "Email or telephone",
        location: "Property location",
        help: "Type of help needed",
        helpOptions: [
          "Home care",
          "Holiday property and guests",
          "Renovation supervision",
          "Local assistance and paperwork",
          "Other",
        ],
        language: "Preferred language",
        languageOptions: ["Español", "English", "Deutsch"],
        message: "Message",
        optional: "optional",
        submit: "Send enquiry",
        required: "This field is required",
        invalidContact: "Please enter a valid email address or phone number",
        notConfigured:
          "Form delivery is not configured yet. For now, please reach us by WhatsApp or email.",
      },
    },
    footer: {
      tagline: "Property care and local assistance in Dénia and the Marina Alta.",
      rights: "All rights reserved.",
      disclaimer:
        "Services are agreed individually. This website does not provide legal, technical or tax advice.",
      nav: "Footer navigation",
    },
    mobileBar: { call: "Call", write: "WhatsApp" },
  },

  de: {
    htmlLang: "de",
    meta: {
      title: "WelcomeDenia — Immobilienbetreuung in Dénia und der Marina Alta",
      description:
        "Hausbetreuung und Alltagshilfe in Dénia, Marina Alta, Calpe, Altea und Benidorm. Kontrollen, Schlüsselservice, Instandhaltung und praktische Unterstützung – mit klarer Kommunikation auf Spanisch, Englisch und Deutsch.",
    },
    nav: {
      services: "Leistungen",
      about: "Über uns",
      how: "Ablauf",
      area: "Einsatzgebiet",
      contact: "Kontakt",
      cta: "Kontakt aufnehmen",
      menu: "Menü öffnen",
      close: "Menü schließen",
      language: "Sprache",
      languageLabel: "Sprache wählen",
    },
    hero: {
      eyebrow: "Dénia · Marina Alta",
      title: "Ihr Haus in Dénia – betreut, während Sie weg sind.",
      lead: "Von regelmäßigen Kontrollen und Gästeankünften bis zu Reparaturen und alltäglichen Angelegenheiten vor Ort: wir kümmern uns um die Details – mit klaren Rückmeldungen in Ihrer Sprache.",
      primary: "Kontakt aufnehmen",
      secondary: "Leistungen ansehen",
      trust: [
        "10 Jahre Erfahrung",
        "Spanisch, Englisch und Deutsch auf Muttersprachniveau",
        "Persönliche Betreuung",
        "Updates mit Fotos und Video",
      ],
      portraitPlaceholder: "Ihr lokales Team in Dénia",
      imageAlt: "Terrasse eines mediterranen Hauses mit Meerblick in Dénia",
    },
    services: {
      eyebrow: "Leistungen",
      title: "Was wir für Sie übernehmen",
      lead: "Die Hausbetreuung steht im Mittelpunkt. Die Alltagshilfe ergänzt sie dort, wo Sie sie brauchen.",
      groups: [
        {
          tag: "Kern",
          title: "Haus- und Ferienimmobilienbetreuung",
          items: [
            "Regelmäßige Hauskontrollen",
            "Schlüsselverwahrung",
            "Reinigung",
            "Kleine Reparaturen und Instandhaltung",
            "Pool- und Gartenpflege",
            "Vorbereitung des Hauses vor Ihrer Ankunft",
            "Gästeankunft, Abreise und praktische Unterstützung der Gäste",
          ],
        },
        {
          tag: "Begleitung",
          title: "Renovierungsbegleitung",
          items: [
            "Kontrolle vor Ort",
            "Prüfung des Baufortschritts",
            "Updates mit Fotos und Video",
            "Kostenanalyse und verständliche Erklärungen",
          ],
          note: "Wir begleiten und dokumentieren die Arbeiten. Wir führen keine Fachgewerke aus und sind weder Elektriker noch Architekt oder Anwalt.",
        },
        {
          tag: "Ergänzend",
          title: "Hilfe im Alltag vor Ort",
          items: [
            "Praktische Unterstützung bei Behördengängen, einschließlich Terminen und Unterlagen rund um die NIE",
            "Hilfe bei der Kommunikation mit Versorgern wie Iberdrola",
            "Unterstützung bei Anliegen vor Ort und bei Sprachbarrieren",
            "Tierbetreuung, Umfang individuell abgesprochen",
          ],
          note: "Es handelt sich um praktische Begleitung. Eine offizielle Vertretung oder Zusicherung von Genehmigungen und Ergebnissen ist damit nicht verbunden.",
        },
      ],
      personal:
        "Wir führen die Betreuungsleistungen und die Renovierungsbegleitung selbst aus.",
    },
    about: {
      eyebrow: "Über uns",
      title: "Ein Ansprechpartner, dem Sie vertrauen können – keine Aktennummer",
      paragraphs: [
        "„Seit zehn Jahren kümmern wir uns um die Instandhaltung von Häusern in Dénia. Wir kennen die Häuser dieser Region: die salzige Luft, die Fensterläden, die Pools im Winter – und das, was still kaputtgeht, wenn niemand hinsieht.“",
        "„Außerdem begleiten wir internationale Residenten in der Marina Alta praktisch: Orientierung, Formalitäten und Verständigung zwischen den Kulturen. Wir sprechen Spanisch, Englisch und Deutsch auf Muttersprachniveau – wir sprechen also direkt über Ihr Haus.“",
        "„Wir arbeiten strukturiert und antworten persönlich. Sie haben einen Ansprechpartner, der sowohl die Immobilie als auch Ihre Anliegen versteht.“",
      ],
      facts: [
        "10 Jahre Erfahrung",
        "Fundierte Ortskenntnis in Dénia",
        "Zuverlässige, organisierte Arbeit",
        "Erfahrung mit internationalen Residenten",
        "ES · EN · DE auf Muttersprachniveau",
      ],
      portraitNote: "WelcomeDenia · Dénia",
    },
    transparency: {
      eyebrow: "Transparenz",
      title: "Wissen, was passiert – wo immer Sie sind.",
      lead: "Sie bestimmen, wie ausführlich es sein soll. Wir dokumentieren unsere Arbeit und erklärt sie verständlich.",
      bullets: ["Klare Berichte", "Fotos und kurze Videos", "Fortschrittsupdates", "Kostenanalyse"],
      sampleLabel: "Beispielhafte Darstellung – kein echter Kundenbericht",
      sample: {
        title: "Besuchsbericht",
        date: "Besuchsdatum",
        dateValue: "12. März",
        checked: "Geprüfte Bereiche",
        checkedValue: "Außenbereich, Terrasse, Pool, Küche, Bäder, Sicherungskasten",
        media: "Material",
        mediaValue: "8 Fotos · 1 kurzes Video vom Pool",
        observations: "Beobachtungen",
        observationsValue:
          "Innen alles in Ordnung. Eine Dichtung am Terrassenfensterladen ist verschlissen, der Poolfilter ist stark verschmutzt.",
        next: "Empfohlene nächste Schritte",
        nextValue: "Dichtung ersetzen und Filter beim nächsten Besuch reinigen.",
        cost: "Kosteninformation",
        costValue: "Vor jeder Ausführung erhalten Sie einen Kostenvoranschlag",
      },
      imageAlt: "Pool und mediterraner Garten neben einem Haus",
    },
    how: {
      eyebrow: "Ablauf",
      title: "Der Einstieg ist unkompliziert",
      steps: [
        {
          title: "Erzählen Sie uns von Ihrem Haus oder Ihrem Anliegen",
          text: "Ihre Immobilie, Ihre Situation oder die konkrete Aufgabe, bei der Sie Unterstützung brauchen.",
        },
        {
          title: "Umfang, Zeitplan und Kosten besprechen",
          text: "Vor dem Start klären Sie gemeinsam, was gemacht wird, wie oft und zu welchen Kosten.",
        },
        {
          title: "Persönliche Betreuung und klare Updates erhalten",
          text: "Wir kümmern uns und halten Sie in Ihrer Sprache auf dem Laufenden.",
        },
      ],
    },
    area: {
      eyebrow: "Einsatzgebiet",
      title: "Basis in Dénia, nah an Ihrem Haus",
      lead: "Wir arbeiten in Dénia und der Marina Alta sowie in nahegelegenen Küstenorten. Liegt Ihr Haus in der Nähe, fragen Sie einfach nach.",
      places: ["Dénia", "Marina Alta", "Calpe", "Altea", "Benidorm"],
      ask: "Ihr Ort ist nicht dabei? Fragen Sie nach – wir sagen Ihnen ehrlich, ob wir helfen können.",
      imageAlt: "Küste der Marina Alta mit dem Montgó im Hintergrund",
    },
    testimonials: {
      eyebrow: "Bewertungen",
      title: "Was Kunden sagen",
      note: "Bereich für verifizierte Bewertungen, sobald diese vorliegen.",
      placeholders: [
        "[Verifizierte Bewertung zur Hausbetreuung wird ergänzt]",
        "[Verifizierte Bewertung zur Renovierungsbegleitung wird ergänzt]",
        "[Verifizierte Bewertung zur Alltagshilfe wird ergänzt]",
      ],
    },
    faq: {
      eyebrow: "Häufige Fragen",
      title: "Häufig gestellte Fragen",
      items: [
        {
          q: "Können Sie mein Haus betreuen, während ich im Ausland bin?",
          a: "Ja. Wir übernehmen regelmäßige Kontrollen, Schlüsselverwahrung, Reinigung, kleine Reparaturen sowie Pool- und Gartenpflege – in der vereinbarten Häufigkeit.",
        },
        {
          q: "Können Sie mein Haus für Feriengäste vorbereiten?",
          a: "Ja. Dazu gehören die Vorbereitung vor der Ankunft, Empfang und Verabschiedung der Gäste sowie praktische Hilfe während des Aufenthalts.",
        },
        {
          q: "Welche Sprachen sprechen Sie?",
          a: "Spanisch, Englisch und Deutsch auf Muttersprachniveau.",
        },
        {
          q: "Wie erhalte ich Updates?",
          a: "Über klare Berichte, Fotos und kurze Videos sowie Kostenerläuterungen, wo es relevant ist. Häufigkeit und Kanal legen Sie gemeinsam fest.",
        },
        {
          q: "Können Sie Renovierungsarbeiten begleiten?",
          a: "Er kann vor Ort kontrollieren, den Fortschritt prüfen, Fotos und Videos senden und Kosten analysieren. Fachgewerke werden von den jeweiligen Fachbetrieben ausgeführt.",
        },
        {
          q: "Helfen Sie bei Behördengängen und Versorgern?",
          a: "Er bietet praktische Unterstützung bei Formalitäten, einschließlich Terminen und Unterlagen rund um die NIE, sowie bei der Kommunikation mit Anbietern wie Iberdrola. Das ist praktische Hilfe – ohne offizielle Vertretung oder Ergebnisgarantie.",
        },
        {
          q: "Bieten Sie Tierbetreuung an?",
          a: "Ja, im individuell abgesprochenen Umfang.",
        },
        {
          q: "Welche Gebiete decken Sie ab?",
          a: "Dénia und die Marina Alta sowie nahegelegene Orte wie Calpe, Altea und Benidorm. Fragen Sie gern nach Ihrem Ort.",
        },
        {
          q: "Wie kann ich über Preise sprechen?",
          a: "Umfang und Preis werden individuell vereinbart – je nach Haus und Bedarf. Schreiben Sie uns, dann besprechen wir es unverbindlich.",
        },
      ],
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Sprechen wir über Ihr Haus – und darüber, was Sie brauchen.",
      lead: "Erzählen Sie uns von Ihrer Situation. Wir antworten persönlich auf Spanisch, Englisch oder Deutsch.",
      whatsapp: "WhatsApp",
      phone: "Telefon",
      email: "E-Mail",
      placeholderValue: "Wird noch ergänzt",
      form: {
        title: "Kurzes Kontaktformular",
        name: "Name",
        contact: "E-Mail oder Telefon",
        location: "Lage der Immobilie",
        help: "Art der Unterstützung",
        helpOptions: [
          "Hausbetreuung",
          "Ferienimmobilie und Gäste",
          "Renovierungsbegleitung",
          "Alltagshilfe und Formalitäten",
          "Sonstiges",
        ],
        language: "Bevorzugte Sprache",
        languageOptions: ["Español", "English", "Deutsch"],
        message: "Nachricht",
        optional: "optional",
        submit: "Anfrage senden",
        required: "Dieses Feld ist erforderlich",
        invalidContact: "Bitte geben Sie eine gültige E-Mail-Adresse oder Telefonnummer an",
        notConfigured:
          "Der Formularversand ist noch nicht eingerichtet. Bitte erreichen Sie uns vorerst per WhatsApp oder E-Mail.",
      },
    },
    footer: {
      tagline: "Immobilienbetreuung und Alltagshilfe in Dénia und der Marina Alta.",
      rights: "Alle Rechte vorbehalten.",
      disclaimer:
        "Leistungen werden individuell vereinbart. Diese Website bietet keine Rechts-, Fach- oder Steuerberatung.",
      nav: "Fußzeilen-Navigation",
    },
    mobileBar: { call: "Anrufen", write: "WhatsApp" },
  },
} as const;
