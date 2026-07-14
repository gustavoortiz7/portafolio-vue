import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import AOS from 'aos'
import 'aos/dist/aos.css'

import './style.css'

const app = createApp(App)

AOS.init({
  duration: 900,
  once: true,
})

app.use(createPinia())

app.mount('#app')
