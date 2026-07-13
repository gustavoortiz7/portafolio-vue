<script setup>
import { profile } from '@/data/profile'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-slate-950 border-t border-slate-800">
    <div class="max-w-6xl mx-auto px-6 py-12 text-center">
      <p class="text-emerald-400 mt-2">
        {{ profile.role }}
      </p>

      <p class="text-slate-400 mt-6 max-w-xl mx-auto leading-8">
        {{ profile.footer.message }}
      </p>

      <div class="w-24 h-px bg-slate-700 mx-auto my-8"></div>

      <p class="text-slate-500 text-sm">
        © {{ year }} {{ profile.name }}. Todos los derechos reservados.
      </p>
    </div>
  </footer>
</template>
