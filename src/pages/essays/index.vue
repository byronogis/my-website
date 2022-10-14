<script setup lang="ts">
import type { EssayFrontmatter } from '~/types'

const route = useRoute()
const tagParams = computed(() => route.query.tag)
const isTagParamsHere = computed(() => !!tagParams.value)

// 随笔数据
const essays = import.meta.glob('~/docs/essays/**/*.md', { import: 'frontmatter', eager: true }) as Record<string, EssayFrontmatter>
// eslint-disable-next-line no-console
console.log(essays)
Object.keys(essays).forEach((val) => {
  // essays[val]._path = val
  essays[val]._name = val.split('/').at(-1)?.split('.md')[0]
})

// 经路由参数过滤后的随笔数据
const essaysFilter = computed(() => isTagParamsHere && Object.values(essays).filter(val => val.tags.includes(tagParams.value as string)))

// 随笔标签数据
const tags = Object.values(essays).reduce((acc, val) => {
  val.tags.forEach((tag) => { acc[tag] = acc[tag] ? ++acc[tag] : 1 })
  return acc
}, {} as Record<string, number>)
</script>

<template>
  <div
    class="page-essays-index"
    h-full w-full
    flex flex-row justify-evenly items-start
  >
    <EssayTag :data="tags" />
    <EssayList :data-list="!isTagParamsHere ? Object.values(essays) : essaysFilter" />
  </div>
</template>
