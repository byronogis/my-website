import { createPinia, defineStore } from 'pinia'
import { ref } from 'vue'

const pinia = createPinia()

export default pinia

export const useStore = defineStore('main', () => {
  const count = ref(0)
  const increment = () => {
    count.value ++
  }
  return {
    count,
    increment,
  }
})

