<script setup lang="ts">
import type { EssayFrontmatter } from '~/types'

const props = defineProps<{
  data: EssayFrontmatter
}>()
const router = useRouter()
// const openDetail = ({ _name }: EssayFrontmatter) => {
//   router.push({
//     path: 'essays/detail',
//     query: {
//       title: _name,
//     },
//   })
// }
</script>

<template>
  <div
    id="essay-item"
    class="w-full"
    text-left
  >
    <RouterLink
      class="essay-item-title"
      text-6 font-700
      decoration-none hover:underline
      cursor-pointer
      my-2
      :to="{
        path: 'essays/detail',
        query: {
          title: props.data._name,
        },
      }"
    >
      {{ props.data.title }}
    </RouterLink>
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
