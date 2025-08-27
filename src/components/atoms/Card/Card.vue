<script setup lang="ts">
import { Stack, Typography } from '..'

defineProps<{
  title?: string
  subtitle?: string
}>()
</script>

<template>
  <Stack direction="column" :spacing="16" class="card__container">
    <Stack direction="column" :spacing="4">
      <Typography>{{ title }}</Typography>

      <slot name="subtitle">
        <Typography variant="semibold">
          {{ subtitle }}
        </Typography>
      </slot>
    </Stack>
    <slot />
  </Stack>
</template>

<style scoped lang="scss">
.card__container {
  box-shadow: 0px 4px 8px 0px #00000014;
  border-radius: 8px;
  min-width: 328px;
  padding: 16px;
}
</style>
