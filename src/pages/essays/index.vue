<script setup lang="ts">
useSiteStore().updSiteTitle('Essays')
const route = useRoute()
const isTagParamsHere = computed(() => !!route.query.tag)

const essayStore = useEssayStore()

const essays = essayStore.essays
const essaysFilter = computed(() => essayStore.essaysFilterWithTag(route.query.tag as string))
</script>

<template>
  <div class="pages-essays-index">
    <EssayList :data-list="!isTagParamsHere ? essays : essaysFilter" />
  </div>
</template>

<style lang="postcss">
.pages-essays-index {
  display: grid;
  grid-template-columns: 6fr 2fr;
}

@media (max-width: 640px) {
  .pages-essays-index {
    display: block;
  }
}
</style>

<route lang="yaml">
meta:
  layout: essays
</route>
