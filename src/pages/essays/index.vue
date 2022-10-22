<script setup lang="ts">
useSiteStore().updSiteTitle('Essays')
const route = useRoute()
const isTagParamsHere = computed(() => !!route.query.tag)

const essayStore = useEssayStore()

const essays = essayStore.essays
const essaysFilter = ref()

watch(() => route.query.tag, (tag) => {
  essaysFilter.value = essayStore.essaysFilterWithTag(tag as string)
}, { immediate: true })
</script>

<template>
  <EssayList :data-list="!isTagParamsHere ? essays : essaysFilter" />
</template>

<route lang="yaml">
meta:
  layout: essays
</route>
