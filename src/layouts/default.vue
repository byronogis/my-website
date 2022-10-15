<script setup lang="ts">
const siteStore = useSiteStore()
</script>

<template>
  <div
    class="container"
    m-auto pt-15
    h-100vh min-h-100vh
  >
    <BaseHeader
      :title="siteStore.siteName"
      :navs="siteStore.siteNav"
    />
    <RouterView />
  </div>
</template>
