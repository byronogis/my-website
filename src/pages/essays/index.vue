<script setup lang="ts">
const route = useRoute()
const isTagParamsHere = computed(() => !!route.query.tag)

const essayStore = useEssayStore()

const essays = essayStore.essays
const essaysFilter = ref()
const tags = essayStore.tags

watch(() => route.query.tag, (tag) => {
  essaysFilter.value = essayStore.essaysFilterWithTag(tag as string)
})
</script>

<template>
  <div
    class="page-essays-index"
    h-full w-full
    flex flex-row justify-evenly items-start
  >
    <EssayTag :data="tags" />
    <EssayList :data-list="!isTagParamsHere ? Object.values(essays) : essaysFilter" />
  </div>
</template>
