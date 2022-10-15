import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('main', () => {
  const count = ref(0)
  const increment = () => {
    count.value++
  }
  return {
    count,
    increment,
  }
})

export { useEssayStore } from './essay'
export { useSiteStore } from './site'
