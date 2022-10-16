<script setup lang="ts">
const props = defineProps<{
  data: Record<string, number>
}>()

const router = useRouter()
const route = useRoute()
const currentTag = computed(() => route.query.tag as string)
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
        <span
          class="essay-tag-title"
          :class="title === currentTag && 'active'"
        >{{ title }}</span>
        <em
          class="essay-tag-count"
          relative top--1 left--0
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
.essay-tag-title {
  &.active {
    text-decoration: underline;
    color: var(--liam-primary)
  }
}
</style>
