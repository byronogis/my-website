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
    p-2
  >
    <h2
      class="essay-item-title"
      font-700
      my-2
      @click="openDetail(props.data)"
    >
      {{ props.data.title }}
    </h2>
    <div
      class="essay-item-description"
      font-400
      my-2
    >
      {{ props.data.description }}
    </div>
    <div
      class="essay-item-more"
      flex flex-row justify-between
    >
      <div class="essay-item-tags">
        <BaseTag :data="props.data.tags" />
      </div>
      <div class="essay-item-date">
        {{ props.data.date }}
      </div>
    </div>
  </div>
</template>
