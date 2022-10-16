import { defineStore } from 'pinia'
import type { EssayFrontmatter } from '~/types'

export const useEssayStore = defineStore('essay', () => {
  const essaysRaw = import.meta.glob('~/docs/essays/**/*.md', { import: 'frontmatter', eager: true }) as Record<string, EssayFrontmatter>
  // 处理 md 可能的异常
  Object.keys(essaysRaw).forEach((val) => {
    // essays[val]._path = val
    essaysRaw[val]._name = val.split('/').at(-1)?.split('.md')[0]
    essaysRaw[val].title = essaysRaw[val].title || '无标题'
    essaysRaw[val].description = essaysRaw[val].description || '无简述'
    essaysRaw[val].date = essaysRaw[val].date || '1999-12-31 23:59'
    essaysRaw[val].tags = Array.isArray(essaysRaw[val].tags) ? essaysRaw[val].tags : ['无标签']
  })

  const essays = Object.values(essaysRaw).sort((a, b) => +new Date(b.date) - +new Date(a.date))
  //
  const essaysFilterWithTag = (tag: string) => Object.values(essaysRaw).filter(val => val.tags.includes(tag))

  const tags = Object.values(essaysRaw).reduce((acc, val) => {
    val.tags.forEach((tag) => { acc[tag] = acc[tag] ? ++acc[tag] : 1 })
    return acc
  }, {} as Record<string, number>)

  return {
    essaysRaw,
    essays,
    essaysFilterWithTag,
    tags,
  }
})
