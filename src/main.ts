import { createApp } from 'vue'
import pinia from '~/store'
import router from '~/router'
import './style.css'
import App from './App.vue'

const app = createApp(App)

app
.use(pinia)
.use(router)
.mount('#app')
