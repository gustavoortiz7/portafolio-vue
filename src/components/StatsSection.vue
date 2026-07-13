<script setup>
import { stats } from '../data/stats'
import StatCard from './StatCard.vue'
</script>

<template>
  <section class="py-24 bg-slate-950" data-aos="zoom-in">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-4xl font-bold text-center text-emerald-400 mb-16">Mi crecimiento</h2>

      <div class="grid md:grid-cols-4 gap-8">
        <StatCard v-for="stat in stats" :key="stat.id" :stat="stat" />
      </div>
    </div>
  </section>
</template>
