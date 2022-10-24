<script setup lang="ts">
useSiteStore().updSiteTitle('Essays')
const route = useRoute()

const component = shallowRef()
const frontmatter = ref()

// 借用 markdown-it 生成的目录
const pedMain = ref<Element>()
watchEffect(() => {
  const toc = pedMain.value?.querySelector('.markdown-body .table-of-contents')
  toc && document.querySelector('.ped-toc .markdown-body')?.appendChild(toc.cloneNode(true))
})

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
      <!-- 添加类名 markdown-body 以借用样式 -->
      <div class="markdown-body" style="max-height: calc(100vh - 6em);" overflow-auto fixed />
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

/* 隐藏正文中的目录， 仅使用右侧展示目录 */
.ped-main .markdown-body .table-of-contents {
  display: none;
}
</style>

<route lang="yaml">
name: essays-title
meta:
  layout: essays
</route>
