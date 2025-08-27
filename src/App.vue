<script setup lang="ts">
import { useOrder } from '@/composables'
import Header from '@/components/organisms/Header.vue'
import {
  BillToSection,
  ChargeToSection,
  SupplierSection,
  ShipToSection,
} from '@/components/organisms'
import { Stack, Typography } from '@/components/atoms'
import { ref } from 'vue'

const { data, loading, error } = useOrder(1)
const showAddresses = ref(true)

function toggleAddresses() {
  showAddresses.value = !showAddresses.value
}
</script>

<template>
  <main class="container">
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Erro: {{ error }}</div>
    <Stack v-else-if="data" direction="column" :spacing="32">
      <Header :data="data.header" />
      <SupplierSection :data="data.supplier" />
      <div class="addresses_container">
        <button @click="toggleAddresses">
          <Stack :spacing="8" class="address__btn">
            <unicon
              :name="showAddresses ? 'arrow-circle-down' : 'arrow-circle-up'"
              icon-style="monochrome"
              width="24"
              height="24"
            />
            <Typography tag="h6" color="dark">Addresses</Typography>
          </Stack>
        </button>
        <Stack :spacing="16" v-show="showAddresses" class="address__row">
          <ShipToSection :data="data.addresses[0]" />
          <BillToSection :data="data.addresses[1]" />
          <ChargeToSection :data="data.addresses[2]" />
        </Stack>
      </div>
    </Stack>
  </main>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  padding: 20px;

  @media (max-width: 1024px) {
    padding: 0;
  }
}

.addresses_container {
  @media (max-width: 1024px) {
    padding-left: 12px;
    padding-right: 12px;
  }
}

.address__row {
  & > section {
    flex: 1;
  }

  @media (max-width: 1024px) {
    flex-direction: column !important;
  }
}

.address__btn {
  align-items: center;
}
</style>
