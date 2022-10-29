<script setup lang="ts">
const props = defineProps<{
  target?: string
  size?: number
}>()

const target = document.querySelector(props.target || 'body')
const size = props.size && `${props.size}px`

const backToTop = () => {
  target?.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div
    class="base-to-top bottom-10% right-10%"
    title="点击回到顶部"
    :style="{ width: size, height: size }"
    fixed
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
