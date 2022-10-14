<script setup lang="ts">
const props = defineProps<{
  data: Record<string, number>
}>()

const router = useRouter()
</script>

<template>
  <div class="essay-tag">
    <dl>
      <dt font-600 py-4>
        标签
      </dt>
      <dd
        v-for="(count, title) in props.data" :key="title"
        cursor-pointer py-1
        @click="router.push(`/essays?tag=${title}`)"
      >
        {{ title }} {{ count }}
      </dd>
    </dl>
  </div>
</template>
