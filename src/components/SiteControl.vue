<script setup lang="ts">
// const props = withDefaults(defineProps<{
//   isExpand?: boolean
// }>(), {
//   isExpand: false,
// })

// const emits = defineEmits<>()
const isExpand = ref(false)
const gridColumns = computed(() => isExpand.value ? '1fr 2rem' : '2rem')

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
    shadow-lg
    liam-bg
    opacity-60
    hover:opacity-100
  >
    <div
      v-if="isExpand"
    >
      <div
        p-4
      >
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
      :class="!isExpand ? 'i-carbon-chevron-left' : 'i-carbon-chevron-right'"
      cursor-pointer
      py-10
      w-8 h-8
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
