<script setup lang="ts">
const route = useRoute()
const isTagParamsHere = computed(() => !!route.query.tag)

const essayStore = useEssayStore()

const essays = essayStore.essays
const essaysFilter = ref()

watch(() => route.query.tag, (tag) => {
  essaysFilter.value = essayStore.essaysFilterWithTag(tag as string)
})
</script>

<template>
  <EssayList :data-list="!isTagParamsHere ? Object.values(essays) : essaysFilter" />
</template>

<route lang="yaml">
meta:
  layout: essays
</route>
