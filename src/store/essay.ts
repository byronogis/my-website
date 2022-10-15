import { defineStore } from 'pinia'
import type { EssayFrontmatter } from '~/types'

export const useEssayStore = defineStore('essay', () => {
  const essays = import.meta.glob('~/docs/essays/**/*.md', { import: 'frontmatter', eager: true }) as Record<string, EssayFrontmatter>
  // 处理 md 可能的异常
  Object.keys(essays).forEach((val) => {
    // essays[val]._path = val
    essays[val]._name = val.split('/').at(-1)?.split('.md')[0]
    essays[val].title = essays[val].title || '无标题'
    essays[val].description = essays[val].description || '无简述'
    essays[val].date = essays[val].date || '1999-12-31 23:59'
    essays[val].tags = Array.isArray(essays[val].tags) ? essays[val].tags : ['无标签']
  })

  //
  const essaysFilterWithTag = (tag: string) => Object.values(essays).filter(val => val.tags.includes(tag))

  const tags = Object.values(essays).reduce((acc, val) => {
    val.tags.forEach((tag) => { acc[tag] = acc[tag] ? ++acc[tag] : 1 })
    return acc
  }, {} as Record<string, number>)

  return {
    essays,
    essaysFilterWithTag,
    tags,
  }
})
