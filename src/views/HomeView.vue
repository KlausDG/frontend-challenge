<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { inject, onMounted } from 'vue'
import type OrderGateway from '@/gateway/OrderGateway'

const orderGateway = inject('orderGateway') as OrderGateway

onMounted(async () => {
  const data = await orderGateway.getOrderById(1)
  console.log(data)
})
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
