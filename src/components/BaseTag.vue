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
      v-for="tag in props.data" :key="tag"
      inline-block mx-2 px-2
      bg-gray-100
      @click="openEssaysOfTag(tag)"
    >
      {{ tag }}
    </span>
  </div>
</template>
