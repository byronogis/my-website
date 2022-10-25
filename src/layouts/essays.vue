<script setup lang="ts">
const siteStore = useSiteStore()
const essayStore = useEssayStore()

const tags = essayStore.tags
</script>

<template>
  <div
    class="container layouts-essays"
    m-auto pt-15
    h-100vh min-h-100vh
  >
    <BaseHeader
      :title="siteStore.siteName"
      :navs="siteStore.siteNav"
    />
    <div
      class="layouts-essays-main"
      h-full w-full p-4
    >
      <div class="lem-tag">
        <EssayTag :data="tags" style="max-height: calc(100vh - 6em);" overflow-auto fixed />
      </div>
      <RouterView />
    </div>
  </div>
</template>

<style lang="postcss">
.layouts-essays-main {
  display: grid;
  grid-template-columns: 2fr 8fr;
}

@media (max-width: 640px) {
  .layouts-essays-main {
    display: block;
  }
  .lem-tag {
    display: none;
  }
}
</style>
