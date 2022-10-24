import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('main', () => {
  const isTop = ref(true)
  const isTopChange = (status: boolean) => {
    isTop.value = status
  }

  return {
    isTop,
    isTopChange,
  }
})
