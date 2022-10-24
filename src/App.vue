<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

// watchEffect(() => {
//   const status = document.querySelector('#app').scrollTop > 200
//   console.log(status)
// })
const app = document.querySelector('#app')

const store = useStore()
window.addEventListener('scroll', (e: any) => {
  if (e.target.id !== 'app')
    return
  store.isTopChange(e.target.scrollTop < 200)
}, { capture: true })
</script>

<template>
  <RouterView />
  <BaseToTop v-show="!store.isTop" :target="app" :size="30" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
