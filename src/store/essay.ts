import { defineStore } from 'pinia'
import type { EssayFrontmatter } from '~/types'

export const useEssayStore = defineStore('essay', () => {
  const essays = import.meta.glob('~/docs/essays/**/*.md', { import: 'frontmatter', eager: true }) as Record<string, EssayFrontmatter>
  Object.keys(essays).forEach((val) => {
    // essays[val]._path = val
    essays[val]._name = val.split('/').at(-1)?.split('.md')[0]
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
