<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  direction?: 'row' | 'column'
  spacing?: number
}

const props = withDefaults(defineProps<Props>(), {
  direction: 'row',
})

const style = computed(() => ({
  flexDirection: props.direction || 'column',
  gap: props.spacing ? `${props.spacing}px` : '0px',
}))
</script>

<template>
  <div class="stack__container" :style="style">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.stack__container {
  display: flex;
}
</style>
