<script setup>
import { skills, skillsSection } from '@/data/skills'
import { Icon } from '@iconify/vue'

const getLevelClass = (level) => {
  switch (level) {
    case 'Avanzado':
      return 'bg-green-500/20 text-green-300'
    case 'Intermedio':
      return 'bg-blue-500/20 text-blue-300'
    case 'Básico':
      return 'bg-yellow-500/20 text-yellow-300'
    case 'En aprendizaje':
      return 'bg-purple-500/20 text-purple-300'
    default:
      return 'bg-slate-700 text-slate-300'
  }
}
</script>

<template>
  <section id="skills" class="py-24 bg-slate-900 text-white">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl font-bold text-emerald-400">
          {{ skillsSection.title }}
        </h2>

        <p class="text-slate-400 mt-4 max-w-2xl mx-auto">
          {{ skillsSection.subtitle }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="(category, index) in skills"
          :key="category.title"
          :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
          class="bg-slate-950 border border-slate-800 rounded-2xl p-8 transition-all duration-300 hover:border-emerald-500 hover:-translate-y-2 hover:shadow-2xl"
        >
          <h3 class="text-2xl font-bold text-emerald-300 mb-6">
            {{ category.title }}
          </h3>

          <div class="space-y-3">
            <div
              v-for="tech in category.technologies"
              :key="tech.name"
              class="flex items-center justify-between bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 transition-all duration-300 hover:border-emerald-500 hover:bg-slate-700"
            >
              <!-- Icono + Nombre -->
              <div class="flex items-center gap-3">
                <Icon :icon="tech.icon" class="text-2xl" />

                <span class="font-medium">
                  {{ tech.name }}
                </span>
              </div>

              <!-- Nivel -->
              <span :class="['text-xs px-3 py-1 rounded-full', getLevelClass(tech.level)]">
                {{ tech.level }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
