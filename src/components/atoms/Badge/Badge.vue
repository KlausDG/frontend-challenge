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
  border-radius: 8px;
  padding: 6px;
  background-color: #edf3ff;
}
</style>
