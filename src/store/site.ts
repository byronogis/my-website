import { defineStore } from 'pinia'

export const useSiteStore = defineStore('site', () => {
  // 网站标题
  const siteName = import.meta.env.VITE_SITE_NAME
  // 网站顶部导航
  const siteNav: { text: string; path: string; outer?: boolean }[] = [
    { text: '首页', path: '/' },
    { text: '随笔', path: '/essays' },
    { text: '项目', path: '/project' },
    { text: 'Github', path: 'https://www.github.com/liamrad', outer: true },
    { text: '关于', path: '/about' },
  ]

  return {
    siteName,
    siteNav,
  }
})
