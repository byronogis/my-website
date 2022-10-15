<script setup lang="ts">
const route = useRoute()

const title = route.query.title

const name = shallowRef()
const frontmatter = ref()

const md = () => import(`../../docs/essays/${title}.md`)
md().then((res) => {
  name.value = res.default
  frontmatter.value = res.frontmatter
})
</script>

<template>
  <div class="pages-essays-detail">
    <h1
      class="ped-title"
      pt-4 pb-8
    >
      {{ frontmatter.title }}
    </h1>
    <component
      :is="name"
      v-highlight
    />
  </div>
</template>

<style lang="postcss">
.ped-title {
  color: var(--liam-primary)
}
</style>

<route lang="yaml">
name: essays-title
meta:
  layout: essays
</route>
