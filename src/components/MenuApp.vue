<script setup>
const emit = defineEmits(['cambiar'])
</script>
<template>
  <div>
    <button @click="emit('cambiar', 'Inicio')">Inicio</button>
    <button @click="emit('cambiar', 'Proyectos')">Proyectos</button>
    <button @click="emit('cambiar', 'Contacto')">Contacto</button>
  </div>
</template>
