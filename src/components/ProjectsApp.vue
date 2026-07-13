<script setup>
import { projects, projectsSection } from '@/data/projects'
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <section id="projects" class="py-24 bg-slate-900 text-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl font-bold text-emerald-400">
          {{ projectsSection.title }}
        </h2>

        <p class="text-slate-400 mt-4 max-w-2xl mx-auto">
          {{ projectsSection.subtitle }}
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-10">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.id"
          :project="project"
          :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
        />
      </div>
    </div>
  </section>
</template>
