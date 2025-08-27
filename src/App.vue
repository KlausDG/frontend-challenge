<script setup lang="ts">
import { useOrder } from '@/composables'
import Header from '@/components/organisms/Header.vue'

const { data, loading, error } = useOrder(1)
</script>

<template>
  <main class="container">
    <div v-if="loading">Carregando...</div>
    <div v-else-if="error">Erro: {{ error }}</div>
    <div v-else-if="data">
      <Header :data="data.header" />
      <pre>{{ data }}</pre>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  padding: 20px;
}
</style>
