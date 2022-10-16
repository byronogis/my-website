<script setup lang="ts">
import type { EssayFrontmatter } from '~/types'

const props = defineProps<{
  dataList: EssayFrontmatter[]
}>()
</script>

<template>
  <div class="essay-list">
    <template
      v-for="item, index in props.dataList" :key="item._name"
    >
      <EssayListItem
        :data="item"
        pb-2
      />
      <BaseDivider v-if="index !== props.dataList.length - 1" />
    </template>
  </div>
</template>
