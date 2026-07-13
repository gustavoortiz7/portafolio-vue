<script setup>
import { profile, contactItems } from '@/data/profile'

import { Mail, Phone, Github, Linkedin, Download } from 'lucide-vue-next'

const getIcon = (type) => {
  switch (type) {
    case 'email':
      return Mail

    case 'whatsapp':
      return Phone

    case 'linkedin':
      return Linkedin

    case 'github':
      return Github

    default:
      return Mail
  }
}
</script>

<template>
  <section id="contact" class="py-24 bg-slate-950 text-white">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Encabezado -->
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl font-bold text-emerald-400">Contacto</h2>

        <p class="text-slate-400 mt-4 max-w-2xl mx-auto">
          ¿Tienes una oportunidad laboral, una propuesta de colaboración o deseas conversar sobre un
          proyecto? Estaré encantado de hablar contigo.
        </p>
      </div>

      <!-- Tarjetas -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-5">
        <a
          v-for="item in contactItems"
          :key="item.id"
          :href="item.href"
          target="_blank"
          rel="noopener noreferrer"
          class="group bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center transition-all duration-300 hover:border-emerald-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/20"
        >
          <component
            :is="getIcon(item.type)"
            :size="34"
            class="mx-auto text-emerald-400 transition-transform duration-300 group-hover:scale-110"
          />

          <h3 class="mt-4 font-semibold text-lg">
            {{ item.title }}
          </h3>

          <p class="mt-2 text-sm text-slate-400 break-all">
            {{ item.value }}
          </p>
        </a>
      </div>

      <!-- Botón CV -->
      <div class="flex justify-center mt-14" data-aos="fade-up">
        <a
          :href="profile.resume"
          download
          class="flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-emerald-500/40"
        >
          <Download :size="20" />

          Descargar CV
        </a>
      </div>
    </div>
  </section>
</template>
