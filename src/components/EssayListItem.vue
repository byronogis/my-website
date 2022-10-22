<script setup lang="ts">
import type { EssayFrontmatter } from '~/types'

const props = defineProps<{
  data: EssayFrontmatter
}>()
const router = useRouter()
const openDetail = ({ _name }: EssayFrontmatter) => {
  router.push({
    path: 'essays/detail',
    query: {
      title: _name,
    },
  })
}
</script>

<template>
  <div
    id="essay-item"
    class="w-full"
    text-left
  >
    <h2
      class="essay-item-title"
      font-700
      my-2
      cursor-pointer
      hover:underline
      @click="openDetail(props.data)"
    >
      {{ props.data.title }}
    </h2>
    <div
      class="essay-item-description"
      mt-4
      opacity-80
    >
      {{ props.data.description }}
    </div>
    <EssayInfo :data="props.data" mt-8 />
  </div>
</template>

<style lang="postcss">
.essay-item-title {
  color: var(--liam-primary)
}
</style>
