import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

const pinia = createPinia()

const app = createApp(App)

app
.use(pinia)
.mount('#app')
