export const academicProjectsSection = {
  title: 'Proyectos Académicos',
  subtitle:
    'Durante mi formación universitaria y diplomados desarrollé proyectos que fortalecieron mis habilidades en desarrollo web, inteligencia artificial y desarrollo de videojuegos.',
}

export const academicProjects = [
  {
    id: 1,

    title: 'Sistema de Gestión de Papeletas de Salida',

    type: 'Sistema Web',

    institution: 'DTIC - USFX',

    period: 'Feb. 2025 - Ago. 2025',

    status: 'Finalizado',

    description:
      'Desarrollo Full Stack de un módulo web para automatizar la gestión de papeletas de salida del personal administrativo, implementando lógica de negocio, seguridad y optimización de consultas.',

    technologies: ['Yii2', 'PHP', 'SQL Server', 'Bootstrap'],

    github: 'AQUI_TU_GITHUB',

    demo: '',

    image: '/images/papeletas.png',
  },

  {
    id: 2,

    title: 'Sistema de Corrección Deportiva con IA',

    type: 'Inteligencia Artificial',

    institution: 'USFX',

    period: 'Feb. 2024 - Jun. 2024',

    status: 'Finalizado',

    description:
      'Aplicación basada en Inteligencia Artificial para analizar biomecánicamente remates de voleibol mediante visión por computadora y generar sugerencias automáticas de corrección.',

    technologies: ['Python', 'OpenCV', 'TensorFlow', 'Computer Vision', 'Flutter', 'FastAPI'],

    github: 'AQUI_TU_GITHUB',

    demo: '',

    image: '/images/ia-voleibol.png',
  },

  {
    id: 3,

    title: 'Prototipo de Videojuego 2D',

    type: 'Videojuego',

    institution: 'Diplomado USFX',

    period: '2025 - 2026',

    status: 'Finalizado',

    description:
      'Prototipo desarrollado durante el Diplomado en Desarrollo de Videojuegos 2D aplicando mecánicas de juego, diseño de niveles y programación.',

    technologies: ['Unity', 'C#', '2D Game'],

    github: '',

    demo: '',

    image: '/images/videojuego.png',
  },
]
