<script setup lang="ts">
const props = defineProps<{
  navs: { text: string; path: string; outer?: boolean }[]
  title: string
}>()

const windowObj = window
const router = useRouter()
const route = useRoute()

const matchPath = (path: string) => {
  if (path === '/')
    return route.path === path
  else
    return route.path.startsWith(path)
}
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
      flex flex-row justify-center items-center
      @click="router.push('/')"
    >
      <img src="/public/favicon.svg" alt="" h-8>
      <span ml-4 text-5>{{ props.title }}</span>
    </div>
    <div class="bh-right">
      <span
        v-for="{ text, path, outer = false } in $props.navs"
        :key="path"
        pl-8 cursor-pointer
        relative
        :style="{ color: matchPath(path) ? 'var(--liam-primary)' : undefined }"
        @click="!outer ? router.push(path) : windowObj.open(path, '_blank')"
      >
        {{ text }}
        <span
          v-if="outer"
          absolute top--1 right--1
          w-2 h-2
          i-carbon-arrow-up-right
        />
      </span>
    </div>
  </div>
</template>
