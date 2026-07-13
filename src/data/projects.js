export const projectsSection = {
  title: 'Mis Proyectos',
  subtitle:
    'Algunos de los proyectos que he desarrollado aplicando buenas prácticas, arquitecturas modernas y tecnologías actuales.',
}

export const projects = [
  {
    id: 1,
    title: 'Sistema de Inventario Web',
    description: 'Sistema web para administrar productos, movimientos de inventario y usuarios.',
    image: '/images/inventario.png',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT'],
    type: 'Aplicación Web',
    status: 'En Producción',
    date: '2026',
    github: 'https://github.com/gustavoortiz7/Sistema-Inventario',
    demo: 'https://sistema-inventario-frontend-black.vercel.app/',
  },

  {
    id: 2,
    title: 'Task Manager API',
    description:
      'API REST desarrollada con Laravel que implementa autenticación JWT, CRUD completo y conexión con MySQL.',
    image: '/images/laravel.png',
    technologies: ['Laravel', 'PHP', 'Sanctum', 'MySQL'],
    type: 'API REST',
    status: 'Finalizado',
    date: '2026',
    github: 'https://github.com/gustavoortiz7/laravel-task-manager-api',
    demo: 'https://laravel-task-manager-api.onrender.com/',
  },

  {
    id: 3,
    title: 'Portafolio Profesional',
    description:
      'Portafolio desarrollado con Vue 3, Vite y Tailwind CSS con diseño moderno, modo oscuro y responsive.',
    image: '/images/portfolio.png',
    technologies: ['Vue', 'Vite', 'Tailwind CSS'],
    type: 'Portafolio',
    status: 'En Desarrollo',
    date: '2026',
    github: '#',
    demo: '#',
  },
]
