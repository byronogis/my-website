<script setup lang="ts">
import type { EssayFrontmatter } from '~/types'

const props = defineProps<{
  dataList: EssayFrontmatter[]
}>()
</script>

<template>
  <template
    v-for="item, index in props.dataList" :key="item.title"
  >
    <EssayListItem
      :data="item"
    />
    <n-divider v-if="index !== props.dataList.length - 1" />
  </template>
</template>
