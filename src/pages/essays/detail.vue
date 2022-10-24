<script setup lang="ts">
useSiteStore().updSiteTitle('Essays')
const route = useRoute()

const component = shallowRef()
const frontmatter = ref()

const md = () => import(`../../docs/essays/${route.query.title}.md`)
md().then((res) => {
  component.value = res.default
  frontmatter.value = res.frontmatter
  useSiteStore().updSiteTitle(frontmatter.value.title)
})
</script>

<template>
  <div v-if="!component">
    <BaseLoading />
  </div>
  <div v-else class="pages-essays-detail">
    <div ref="pedMain" class="ped-main">
      <h1
        class="ped-title"
        pt-4 pb-8
        sticky top-15 z-9
      >
        {{ frontmatter?.title }}
      </h1>
      <div class="ped-description" pb-4 opacity-50>
        {{ frontmatter.description }}
      </div>
      <EssayInfo :data="frontmatter" pb-4 />
      <BaseDivider />
      <component
        :is="component"
        v-highlight
      />
    </div>
    <div class="ped-toc" pl-8>
      <!--  -->
    </div>
  </div>
</template>

<style lang="postcss">
.ped-title {
  color: var(--liam-primary);
  background-color: var(--liam-bg);
}

.pages-essays-detail {
  display: grid;
  grid-template-columns: 6fr 2fr;
}

@media (max-width: 640px) {
  .pages-essays-detail {
    display: block;
    .ped-toc {
      display: none;
    }
  }
}
</style>

<route lang="yaml">
name: essays-title
meta:
  layout: essays
</route>
