<script setup lang="ts">
useSiteStore().updSiteTitle('Essays')
const route = useRoute()

const component = shallowRef()
const frontmatter = ref()

const pagesEssaysDetail = ref<Element>()
watchEffect(() => {
  // 借用 markdown-it 生成的目录
  const toc = pagesEssaysDetail.value?.querySelector('.docs-markdown-body .table-of-contents')
  toc && document.querySelector('.ped-toc .docs-markdown-body')?.appendChild(toc.cloneNode(true))
})

// 拦截目录锚点点击事件，另行处理跳转
useEventListener(pagesEssaysDetail, 'click', (e: any) => {
  const hash = e.target?.hash
  if (!hash.startsWith('#'))
    return

  e.preventDefault()
  const el = document.querySelector(decodeURI(hash))
  el?.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  })
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
  <div v-else ref="pagesEssaysDetail" class="pages-essays-detail">
    <div class="ped-main">
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
      <BaseDivider />
      <Vssue
        :options="{
          prefix: '[Essay] ',
          labels: ['Essay'],
          autoCreateIssue: false,
        }"
        :title="component.__name"
      />
    </div>
    <div class="ped-toc" pl-8>
      <!-- 添加类名 docs-markdown-body 以借用样式 -->
      <div
        class="docs-markdown-body"
        style="max-height: calc(100vh - 6em); width: -webkit-fill-available;"
        overflow-auto fixed
      />
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

/* 隐藏正文中的目录， 仅使用右侧展示目录 */
.ped-main .docs-markdown-body .table-of-contents {
  display: none;
}

@media (max-width: 640px) {
  .pages-essays-detail {
    display: block;
    .ped-toc {
      display: none;
    }
  }

  /* 移动端由于隐藏了侧边目录，因此恢复显示正文目录 */
  .ped-main .docs-markdown-body .table-of-contents {
    display: block;
  }
}
</style>

<route lang="yaml">
name: essays-title
meta:
  layout: essays
</route>
