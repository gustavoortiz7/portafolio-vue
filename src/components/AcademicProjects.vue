<script setup>
import { academicProjects, academicProjectsSection } from '@/data/academicProjects'

import AcademicProjectCard from './AcademicProjectCard.vue'
</script>

<template>
  <section id="academic-projects" class="py-24 bg-slate-950 text-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl font-bold text-emerald-400">
          {{ academicProjectsSection.title }}
        </h2>

        <p class="text-slate-400 mt-4 max-w-3xl mx-auto">
          {{ academicProjectsSection.subtitle }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
        <AcademicProjectCard
          v-for="project in academicProjects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>
