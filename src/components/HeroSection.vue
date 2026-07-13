<script setup>
import { profile } from '../data/profile'
import profileImage from '@/assets/images/profile.jpg'

import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section
    id="home"
    data-aos="fade-up"
    class="relative min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden"
  >
    <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-6 py-24">
      <!--Columna izquierda-->
      <div data-aos="fade-up" data-aos-duration="1000">
        <p class="text-emerald-400 text-xl mb-3">👋 Hola, soy</p>
        <h1 class="text-4xl md:text-5xl font-bold leading-tight">{{ profile.name }}</h1>

        <h2 class="text-2xl md:text-4xl text-slate-300 mt-5">
          {{ profile.carrera }}
        </h2>

        <p class="text-slate-400 max-w-xl mt-8 text-lg leading-8">
          {{ profile.description }}
        </p>

        <!--Disponible-->
        <div
          class="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mt-8"
        >
          🟢 Disponible para trabajar
        </div>

        <!--Botones-->
        <div class="flex flex-wrap gap-4 mt-10">
          <a
            href="#projects"
            class="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-lg font-semibold transition"
          >
            <ArrowRight :size="18" />

            Ver proyectos
          </a>

          <a
            :href="profile.resume"
            download
            class="flex items-center gap-2 border border-emerald-500 hover:bg-emerald-500 transition px-6 py-3 rounded-lg"
          >
            <Download :size="18" />

            Descargar CV
          </a>
          <a
            :href="profile.github"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 border border-slate-700 hover:border-emerald-500 transition px-6 py-3 rounded-lg"
          >
            <Github :size="18" />

            GitHub
          </a>
        </div>
        <!-- Redes -->
        <div class="flex gap-6 mt-10">
          <a
            :href="profile.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-emerald-400 transition duration-300"
          >
            <Linkedin :size="28" />
          </a>

          <a
            :href="profile.email"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-emerald-400 transition duration-300"
          >
            <Mail :size="28" />
          </a>
        </div>
        <!-- Tecnologías -->

        <div class="flex flex-wrap gap-3 mt-12">
          <span
            v-for="tech in profile.technologies"
            :key="tech"
            class="bg-slate-800 border border-slate-700 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition px-4 py-2 rounded-full text-sm"
          >
            {{ tech }}
          </span>
        </div>
      </div>
      <!-- Columna derecha -->
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="200"
        class="relative flex justify-center"
      >
        <div class="absolute w-96 h-96 rounded-full bg-emerald-500/20 blur-3xl"></div>

        <img
          :src="profileImage"
          alt="Luis Gustavo Ortiz"
          class="relative w-70 h-70 lg:w-86 lg:h-86 object-cover rounded-full border-4 border-emerald-500 shadow-2xl"
        />
      </div>
    </div>
  </section>
</template>
