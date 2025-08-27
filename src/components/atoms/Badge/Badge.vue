<script setup lang="ts">
import { Typography } from '@/components/atoms'
</script>

<template>
  <div class="badge__container">
    <Typography color="primary"><slot /></Typography>
  </div>
</template>

<style lang="scss" scoped>
.badge__container {
  border-radius: $radius-md;
  padding: $spacing-xs;
  background-color: $color-faded;
}
</style>
