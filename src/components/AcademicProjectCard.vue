<script setup>
import { Github, ExternalLink, GraduationCap, Calendar, Building2 } from 'lucide-vue-next'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const getStatusClass = (status) => {
  switch (status) {
    case 'Finalizado':
      return 'bg-blue-500/20 text-blue-300'

    case 'En Desarrollo':
      return 'bg-yellow-500/20 text-yellow-300'

    default:
      return 'bg-slate-700 text-slate-300'
  }
}
</script>

<template>
  <article
    class="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-emerald-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
  >
    <!-- Imagen -->

    <div class="overflow-hidden">
      <img
        :src="project.image"
        :alt="project.title"
        class="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    <!-- Contenido -->

    <div class="p-6">
      <!-- Badge -->

      <div class="flex items-center justify-between mb-4">
        <span
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-emerald-500/20 text-emerald-300"
        >
          <GraduationCap :size="16" />

          Académico
        </span>

        <span
          :class="['px-3 py-1 rounded-full text-xs font-semibold', getStatusClass(project.status)]"
        >
          {{ project.status }}
        </span>
      </div>

      <!-- Título -->

      <h3 class="text-2xl font-bold text-white">
        {{ project.title }}
      </h3>

      <!-- Tipo -->

      <p class="text-emerald-400 mt-2">
        {{ project.type }}
      </p>

      <!-- Descripción -->

      <p class="text-slate-400 leading-7 mt-4">
        {{ project.description }}
      </p>

      <!-- Institución -->

      <div class="flex items-center gap-2 mt-6 text-slate-400">
        <Building2 :size="18" />

        {{ project.institution }}
      </div>

      <!-- Fecha -->

      <div class="flex items-center gap-2 mt-2 text-slate-400">
        <Calendar :size="18" />

        {{ project.period }}
      </div>

      <!-- Tecnologías -->

      <div class="flex flex-wrap gap-2 mt-6">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="px-3 py-1 rounded-full text-sm bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 transition hover:bg-emerald-500 hover:text-white"
        >
          {{ tech }}
        </span>
      </div>

      <!-- Botones -->

      <div class="flex gap-3 mt-8">
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 transition px-5 py-2 rounded-lg font-medium"
        >
          <Github :size="18" />

          GitHub
        </a>

        <a
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 flex items-center justify-center gap-2 border border-emerald-500 hover:bg-emerald-500 transition px-5 py-2 rounded-lg font-medium"
        >
          <ExternalLink :size="18" />

          Demo
        </a>
      </div>
    </div>
  </article>
</template>
