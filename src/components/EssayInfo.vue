<script setup lang="ts">
import type { EssayFrontmatter } from '~/types'

const props = defineProps<{
  data: EssayFrontmatter
}>()
</script>

<template>
  <div
    class="essay-info"
    flex flex-row justify-between
  >
    <div class="essay-item-tags">
      <BaseTag :data="props.data.tags" />
    </div>
    <div class="essay-item-date" opacity-80>
      <span>更新于: </span>
      {{ props.data.update }}
    </div>
  </div>
</template>
