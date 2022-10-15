<script setup lang="ts">
// import hljs from 'highlight.js'

const props = defineProps<{
  title: string
}>()

const name = shallowRef()

const md = () => import(`../../docs/essays/${props.title}.md`)
md().then((res) => {
  name.value = res.default
})
</script>

<template>
  <component
    :is="name"
    v-highlight
  />
</template>

<route lang="yaml">
name: essays-title
meta:
  layout: essays
</route>
