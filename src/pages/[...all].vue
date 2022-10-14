<template>
  <n-result status="404" title="404 资源不存在">
    <template #footer>
      <n-button>
        <RouterLink to="/">
          返回首页
        </RouterLink>
      </n-button>
    </template>
  </n-result>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
