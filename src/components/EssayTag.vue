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
        hover:underline
        @click="router.push(`/essays?tag=${title}`)"
      >
        {{ title }}
        <em
          class="essay-tag-count"
          relative top--1 left--1
          opacity-80
          scale-80
          inline-block
        >{{ count }}</em>
      </dd>
    </dl>
  </div>
</template>

<style lang="postcss">
.essay-tag-count {
  color: var(--liam-primary)
}
</style>
