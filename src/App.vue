<script setup>
import HeroSection from './components/HeroSection.vue'
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsApp from './components/ProjectsApp.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactApp from './components/ContactApp.vue'
import AcademicProjects from './components/AcademicProjects.vue'
</script>

<template>
  <AppNavbar />

  <main>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <AcademicProjects />
    <ProjectsApp />
    <ContactApp />
  </main>
  <AppFooter />
</template>

<style scoped></style>
