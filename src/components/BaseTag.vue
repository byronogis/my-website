<script setup lang="ts">
const props = defineProps<{
  data: string[]
}>()
</script>

<template>
  <div class="base-tag">
    <span
      v-for="tag in props.data" :key="tag"
      inline-block mx-2 px-2
      bg-gray-100
    >
      {{ tag }}
    </span>
  </div>
</template>
