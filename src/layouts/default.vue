<script setup lang="ts">
// 网站标题
const siteName = import.meta.env.VITE_SITE_NAME
// 网站顶部导航
const navs: { text: string; path: string; outer?: boolean }[] = [
  { text: '随笔', path: '/essays' },
  { text: '项目', path: '/project' },
  { text: 'Github', path: 'https://www.github.com/liamrad', outer: true },
  { text: '关于', path: '/about' },
]
</script>

<template>
  <div
    class="app-container"
    pt-15
  >
    <BaseHeader
      :title="siteName"
      :navs="navs"
    />
    <RouterView />
  </div>
</template>
