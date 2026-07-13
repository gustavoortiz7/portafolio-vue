<script setup>
import { Github, ExternalLink } from 'lucide-vue-next'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const getStatusClass = (status) => {
  switch (status) {
    case 'En Producción':
      return 'bg-green-500/20 text-green-300'

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
    class="group bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 transition-all duration-300 hover:border-emerald-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20"
  >
    <!-- Imagen -->

    <div class="relative overflow-hidden">
      <img
        :src="project.image"
        :alt="project.title"
        class="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div
        class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"
      ></div>
    </div>

    <div class="p-6">
      <!-- Badges -->

      <div class="flex flex-wrap gap-2 mb-4">
        <span
          :class="['px-3 py-1 rounded-full text-xs font-medium', getStatusClass(project.status)]"
        >
          {{ project.status }}
        </span>

        <span class="bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-xs">
          {{ project.type }}
        </span>
      </div>

      <!-- Título -->

      <h3 class="text-2xl font-bold text-white">
        {{ project.title }}
      </h3>

      <!-- Año -->

      <p class="text-sm text-slate-500 mt-1">
        {{ project.date }}
      </p>

      <!-- Descripción -->

      <p class="text-slate-400 mt-5 leading-7">
        {{ project.description }}
      </p>

      <!-- Tecnologías -->

      <div class="flex flex-wrap gap-2 mt-6">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full text-sm transition-all duration-300 hover:bg-emerald-500 hover:text-white"
        >
          {{ tech }}
        </span>
      </div>

      <!-- Botones -->

      <div class="flex gap-4 mt-8">
        <a
          v-if="project.github && project.github !== '#'"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 transition px-5 py-3 rounded-lg font-medium"
        >
          <Github :size="18" />

          GitHub
        </a>

        <a
          v-if="project.demo && project.demo !== '#'"
          :href="project.demo"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 transition px-5 py-3 rounded-lg font-medium"
        >
          <ExternalLink :size="18" />

          Demo
        </a>
      </div>
    </div>
  </article>
</template>
