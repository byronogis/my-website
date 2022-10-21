<script setup lang="ts">
const props = defineProps<{
  title: string
  navs: { text: string; path: string; outer?: boolean }[]
}>()

const windowObj = window
const router = useRouter()
// console.log(router)
</script>

<template>
  <div
    class="base-header container"
    fixed top-0 left-0 right-0 z-9
    flex flex-row justify-between items-center
    m-auto px-4 h-15
    border-b-1 border-b-gray-200
    liam-bg
  >
    <div
      class="bh-left"
      cursor-pointer
      @click="router.push('/')"
    >
      {{ $props.title }}
    </div>
    <div class="bh-right">
      <span
        v-for="{ text, path, outer = false } in $props.navs"
        :key="path"
        pl-8 cursor-pointer
        @click="!outer ? router.push(path) : windowObj.open(path, '_blank')"
      >
        {{ text }}
      </span>
    </div>
  </div>
</template>
