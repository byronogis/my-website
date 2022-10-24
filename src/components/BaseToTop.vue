<script setup lang="ts">
const props = defineProps<{
  target?: HTMLElement
  size?: number
}>()

const target = props.target || document.documentElement
const size = props.size && `${props.size}px`

const backToTop = () => {
  target.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div
    class="base-to-top"
    title="点击回到顶部"
    :style="{ width: size, height: size }"
    fixed bottom-20 right-20
    cursor-pointer
    i-carbon-up-to-top
    @click="backToTop"
  />
</template>

<style lang="postcss">
.base-to-top {
  color: var(--liam-primary);
  background-color: var(--liam-primary);
}
</style>
