<script setup>
defineProps({
  stat: Object,
})
</script>

<template>
  <div
    class="bg-slate-900 rounded-xl p-8 text-center border border-slate-800 hover:border-emerald-500 transition"
  >
    <h3 class="text-5xl font-bold text-emerald-400">{{ stat.number }}+</h3>

    <p class="mt-4 text-slate-300">
      {{ stat.label }}
    </p>
  </div>
</template>
