<script setup lang="ts">
useSiteStore().updSiteTitle('404')
const router = useRouter()
const el = ref<HTMLDivElement>()
const stopAnimate = () => { el.value?.classList.remove('animate__shakeY') }
const resumeAnimate = () => { el.value?.classList.add('animate__shakeY') }
</script>

<template>
  <div>
    <div
      ref="el"
      class="animate__animated animate__shakeY animate__slow animate__infinite"
      i-carbon-face-dizzy
      h-40 w-40 cursor-pointer
      title="返回首页"
      @click="router.push('/')"
      @mouseenter="stopAnimate"
      @mouseout="resumeAnimate"
    />
  </div>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
