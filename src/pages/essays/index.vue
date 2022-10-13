<script setup lang="ts">
import type { EssayFrontmatter } from '~/types'
const essays = import.meta.glob('~/docs/essays/**/*.md', { import: 'frontmatter', eager: true }) as Record<string, EssayFrontmatter>
// eslint-disable-next-line no-console
console.log(essays)
Object.keys(essays).forEach((val) => {
  // essays[val]._path = val
  essays[val]._name = val.split('/').at(-1)?.split('.md')[0]
})
</script>

<template>
  this is essays
  <EssayList :data-list="Object.values(essays)" />
</template>
