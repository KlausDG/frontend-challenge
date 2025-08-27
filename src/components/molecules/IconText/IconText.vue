<script setup lang="ts">
import { Typography } from '@/components/atoms'

defineProps<{
  icon: string
  text: string
}>()
</script>

<template>
  <div class="icon-text__container">
    <unicon :name="icon" />
    <Typography>{{ text }}</Typography>
  </div>
</template>

<style scoped lang="scss">
.icon-text__container {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
}
</style>
