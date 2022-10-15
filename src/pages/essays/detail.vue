<script setup lang="ts">
const route = useRoute()

const component = shallowRef()
const frontmatter = ref()

const md = () => import(`../../docs/essays/${route.query.title}.md`)
md().then((res) => {
  component.value = res.default
  frontmatter.value = res.frontmatter
})
</script>

<template>
  <div class="pages-essays-detail">
    <h1
      class="ped-title"
      pt-4 pb-8
      sticky top-15 z-9
    >
      {{ frontmatter?.title }}
    </h1>
    <div
      class="ped-info"
      pb-4
      grid grid-cols-2
    >
      <BaseTag :data="frontmatter?.tags || []" />
      <div text-14px>
        时间:
        <span px-1>{{ frontmatter?.date }}</span>
      </div>
    </div>
    <BaseDivider />
    <component
      :is="component"
      v-highlight
    />
  </div>
</template>

<style lang="postcss">
.ped-title {
  color: var(--liam-primary);
  background-color: var(--liam-bg);
}
</style>

<route lang="yaml">
name: essays-title
meta:
  layout: essays
</route>
