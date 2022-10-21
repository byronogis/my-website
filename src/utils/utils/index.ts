import nprogress from '../nprogress'
import type { EssayFrontmatter } from '~/types'

/**
 * sort callback for md (frontmatter)
 * @param a
 * @param b
 */
const mdSortByDate = (a: EssayFrontmatter, b: EssayFrontmatter) => {
  return +new Date(b.date) - +new Date(a.date)
}

const mdSortByUpDate = (a: EssayFrontmatter, b: EssayFrontmatter) => {
  return +new Date(b.date) - +new Date(a.date)
}

export default {
  mdSortByDate,
  mdSortByUpDate,
  nprogress,
}
