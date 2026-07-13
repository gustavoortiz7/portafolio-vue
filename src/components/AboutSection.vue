<script setup>
import { profile } from '@/data/profile'
import { MapPin, Briefcase, Mail, CheckCircle2 } from 'lucide-vue-next'
</script>

<template>
  <section id="about" class="py-24 bg-slate-950 text-white">
    <div class="max-w-5xl mx-auto px-6" data-aos="fade-up" data-aos-duration="1000">
      <!-- Título -->

      <h2 class="text-4xl font-bold text-center text-emerald-400 mb-12">
        {{ profile.aboutTitle }}
      </h2>

      <!-- Descripción -->

      <p class="text-lg text-slate-300 leading-8 text-center max-w-4xl mx-auto whitespace-pre-line">
        {{ profile.aboutDescription }}
      </p>

      <!-- Fortalezas -->

      <div class="mt-12 grid md:grid-cols-2 gap-6">
        <div v-for="strength in profile.strengths" :key="strength" class="flex items-center gap-3">
          <CheckCircle2 class="text-emerald-400" :size="22" />
          <span>{{ strength }}</span>
        </div>
      </div>

      <!-- Información -->

      <div class="grid md:grid-cols-3 gap-6 mt-16">
        <div class="flex items-center gap-4 p-5 rounded-xl bg-slate-900 border border-slate-800">
          <MapPin class="text-emerald-400" :size="24" />

          <div>
            <p class="text-sm text-slate-400">Ubicación</p>

            <p class="font-semibold">
              {{ profile.location }}
            </p>
          </div>
        </div>

        <div class="flex items-center gap-4 p-5 rounded-xl bg-slate-900 border border-slate-800">
          <Briefcase class="text-emerald-400" :size="24" />

          <div>
            <p class="text-sm text-slate-400">Rol</p>

            <p class="font-semibold">
              {{ profile.role }}
            </p>
          </div>
        </div>

        <div class="flex items-center gap-4 p-5 rounded-xl bg-slate-900 border border-slate-800">
          <Mail class="text-emerald-400" :size="24" />

          <div>
            <p class="text-sm text-slate-400">Email</p>

            <p class="font-semibold break-all">
              {{ profile.email }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
