export const profile = {
  // Información personal
  name: 'Luis Gustavo Ortiz',

  carrera: 'Ing. en Ciencias de la Computación',

  role: 'Desarrollador de Software Full Stack',

  location: 'Santa Cruz, Bolivia',

  // Contacto
  whatsapp: '+591 75457480',

  whatsappLink: 'https://wa.me/59175457480',

  email: 'gustavoortiz.dev@gmail.com',

  github: 'https://github.com/gustavoortiz7',

  linkedin: 'https://www.linkedin.com/in/luis-gustavo-ortiz-5604b437b',

  resume: '/CV_LuisGustavoOrtiz.pdf',

  // Hero
  description:
    'Desarrollador Full Stack apasionado por crear aplicaciones web modernas y proyectos de Iteligencia Artificial utilizando React, Node.js, Laravel, MySQL y Vision por Computadora.',

  // About
  aboutTitle: 'Sobre mí',

  aboutDescription: `Soy Ingeniero y Licenciado en Ciencias de la Computación con experiencia en el desarrollo de aplicaciones web Full Stack.
    Durante mi formación académica y experiencia profesional participé en el desarrollo de sistemas administrativos,
    APIs REST y proyectos de Inteligencia Artificial aplicada al análisis deportivo.
    Disfruto aprender nuevas tecnologías y desarrollar soluciones que aporten valor a organizaciones y usuarios. Para mejorar mis habilidades y construir proyectos que resuelvan problemas reales.`,

  // Tecnologías destacadas
  technologies: ['React', 'Node.js', 'Laravel', 'MySQL', 'HTML'],

  // Fortalezas
  strengths: [
    'Desarrollo de aplicaciones web completas',
    'Diseño de APIs REST',
    'Resolución de problemas mediante Software',
    'Aprendizaje continuo y adaptación a nuevas tecnologías',
  ],
  footer: {
    message:
      'Gracias por visitar mi portafolio. Estoy abierto a nuevas oportunidades, colaborar y participar en nuevos proyectos de desarrollo de software.',
  },
}

// Tarjetas de contacto
export const contactItems = [
  {
    id: 1,
    type: 'email',
    title: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },

  {
    id: 2,
    type: 'whatsapp',
    title: 'WhatsApp',
    value: profile.whatsapp,
    href: profile.whatsappLink,
  },

  {
    id: 3,
    type: 'linkedin',
    title: 'LinkedIn',
    value: 'Ver perfil',
    href: profile.linkedin,
  },

  {
    id: 4,
    type: 'github',
    title: 'GitHub',
    value: 'Ver repositorios',
    href: profile.github,
  },
]
