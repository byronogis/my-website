<script setup lang="ts">
// const props = withDefaults(defineProps<{
//   isExpand?: boolean
// }>(), {
//   isExpand: false,
// })

// const emits = defineEmits<>()
const isExpand = ref(false)
const gridColumns = computed(() => isExpand.value ? '1fr 1rem' : '1rem')

const siteStore = useSiteStore()
const fontSizeChange = (e: Event) => {
  siteStore.updSiteFontSize((e.target as HTMLInputElement).value)
}
</script>

<template>
  <div
    class="site-control"
    style="height: -webkit-fit-content;"
    fixed z-11
    top-0 bottom-0 right-4
    m-auto
  >
    <div
      v-if="isExpand"
    >
      <div>
        <span>字体：</span>
        <input
          type="range" min="12" max="26"
          step="2"
          :value="siteStore.siteFontSize"
          @change="fontSizeChange"
          @input="fontSizeChange"
        >
      </div>
    </div>
    <div
      v-if="!isExpand"
      i-carbon-chevron-left
      cursor-pointer
      @click="isExpand = !isExpand"
    />
    <div
      v-else
      i-carbon-chevron-right
      cursor-pointer
      @click="isExpand = !isExpand"
    />
  </div>
</template>

<style lang="postcss">
.site-control {
  display: grid;
  grid-template-columns: v-bind(gridColumns);
  align-items: center;
}
</style>
