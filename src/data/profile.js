export const profile = {
  // Información personal
  name: 'Luis Gustavo Ortiz',

  carrera: 'Ing. en Ciencias de la Computación',

  role: 'Desarrollador Junior Full Stack',

  location: 'Santa Cruz, Bolivia',

  // Contacto
  whatsapp: '+591 75457480',

  whatsappLink: 'https://wa.me/59175457480',

  email: 'gustavoortiz.dev@gmail.com',

  github: 'https://github.com/gustavoortiz7',

  linkedin: 'https://linkedin.com/in/tu-perfil',

  resume: '/Luis-Gustavo-Ortiz-CV.pdf',

  // Hero
  description:
    'Desarrollador Junior Full Stack apasionado por crear aplicaciones web modernas utilizando React, Vue, Node.js, Laravel y MongoDB.',

  // About
  aboutTitle: 'Sobre mí',

  aboutDescription:
    'Desarrollador Junior Full Stack apasionado por crear aplicaciones web modernas utilizando tecnologías como React, Vue, Node.js, Express, Laravel y MongoDB. Me gusta aprender nuevas herramientas, mejorar mis habilidades y construir proyectos que resuelvan problemas reales.',

  // Tecnologías destacadas
  technologies: ['React', 'Vue', 'Node.js', 'Laravel', 'MongoDB', 'Tailwind CSS'],

  // Fortalezas
  strengths: [
    'Desarrollo de aplicaciones web completas',
    'Diseño de APIs REST',
    'Resolución de problemas',
    'Aprendizaje continuo',
  ],
  footer: {
    message:
      'Gracias por visitar mi portafolio. Estoy siempre dispuesto a aprender, colaborar y participar en nuevos proyectos de desarrollo web.',
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
