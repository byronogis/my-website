<script setup lang="ts">
const props = defineProps<{
  data: string[]
}>()

const router = useRouter()
const openEssaysOfTag = (tag: string) => {
  router.push({
    path: 'essays',
    query: {
      tag,
    },
  })
}
</script>

<template>
  <div class="base-tag">
    <span
      v-for="tag in props.data"
      :key="tag"
      class="base-tag-item"
      inline-block
      mx-2 px-2 cursor-pointer
      opacity-80
      hover:underline
      @click="openEssaysOfTag(tag)"
    >
      {{ tag }}
    </span>
  </div>
</template>

<style lang="postcss">
.base-tag {
  font-size: 14px;
  &::before {
    content: '标签: '
  }
}
.base-tag-item {
  color: var(--liam-primary);
}
</style>
