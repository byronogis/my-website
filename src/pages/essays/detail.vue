<script setup lang="ts">
const route = useRoute()

const title = route.query.title

const name = shallowRef()

const md = () => import(`../../docs/essays/${title}.md`)
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
