import { ref, onMounted } from 'vue'

const isDark = ref(true)

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  onMounted(() => {
    document.documentElement.classList.toggle('dark', isDark.value)
  })

  return {
    isDark,
    toggleTheme,
  }
}
