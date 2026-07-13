<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '@/composables/useTheme'
import { Sun, Moon } from 'lucide-vue-next'
import { Menu, X } from 'lucide-vue-next'

const { isDark, toggleTheme } = useTheme()

const menuOpen = ref(false)
const isScrolled = ref(false)
const activeSection = ref('home')

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const observeSections = () => {
  const sections = document.querySelectorAll('section')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    { threshold: 0.3 },
  )
  sections.forEach((section) => {
    observer.observe(section)
  })
}

const links = [
  { name: 'Inicio', href: '#home' },
  { name: 'Sobre mí', href: '#about' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Academico', href: '#academic-projects' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Contacto', href: '#contact' },
]

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  observeSections()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 w-full text-white z-50 transition-all duration-300',
      isScrolled ? 'bg-slate-950/90 backdrop-blur-md shadow-xl' : 'bg-transparent',
    ]"
  >
    <div class="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
      <a
        href="#home"
        class="text-xl font-bold text-emerald-400 tracking-wide hover:scale-105 transition-transform"
      >
        Luis Gustavo Ortiz
      </a>

      <ul class="hidden md:flex gap-8">
        <li v-for="link in links" :key="link.name">
          <a
            :href="link.href"
            class="relative py-2 transition-colors duration-300"
            :class="
              activeSection === link.href.substring(1)
                ? 'text-emerald-400'
                : 'hover:text-emerald-400'
            "
          >
            {{ link.name }}

            <span
              v-if="activeSection === link.href.substring(1)"
              class="absolute left-0 bottom-0 h-0.5 w-full bg-emerald-400 rounded-full"
            />
          </a>
        </li>
      </ul>
      <button
        @click="toggleTheme"
        aria-label="Cambiar tema"
        class="p-2 rounded-full border border-slate-700 hover:border-emerald-500 hover:bg-slate-800 transition"
      >
        <Moon v-if="isDark" :size="20" />

        <Sun v-else :size="20" />
      </button>

      <button @click="toggleMenu" aria-label="Abrir menú" class="md:hidden p-2">
        <Menu v-if="!menuOpen" :size="28" />

        <X v-else :size="28" />
      </button>
    </div>

    <div
      v-if="menuOpen"
      class="md:hidden bg-slate-900/95 backdrop-blur-md px-6 py-6 border-t border-slate-800"
    >
      <a
        v-for="link in links"
        :key="link.name"
        :href="link.href"
        class="block py-3 text-lg hover:text-emerald-400 transition"
        @click="menuOpen = false"
      >
        {{ link.name }}
      </a>
    </div>
  </nav>
  <Transition name="fade">
    <button
      v-if="isScrolled"
      class="fixed bottom-8 right-8 bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-full shadow-xl transition z-50"
      @click="scrollToTop"
    >
      ↑
    </button>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
