<script setup lang="ts">
import { Card, Stack } from '@/components/atoms'
import { IconText } from '@/components/molecules'
import type { Address } from '@/models'

defineProps<{
  data: Address
}>()
</script>

<template>
  <section>
    <Card title="Charge to" :subtitle="data.name">
      <Stack direction="column">
        <Stack>
          <Stack direction="column" :spacing="4" class="content__column">
            <IconText
              icon="file-landscape-alt"
              :text="
                data.document
                  ? `${data.document.type}: ${data.document.value}`
                  : 'CNPJ: 00.000.000/0000-00'
              "
            />
            <IconText icon="map-marker" :text="data.address" />
            <IconText icon="user" :text="data.contact.name" />
          </Stack>
          <Stack direction="column" :spacing="4">
            <IconText icon="envelope" :text="data.contact.email" />
            <IconText icon="phone" :text="data.contact.phone" />
            <IconText icon="print" :text="data.contact.fax" />
          </Stack>
        </Stack>
      </Stack>
    </Card>
  </section>
</template>

<style lang="scss" scoped>
.subtitle__container {
  align-items: center;
}

.content__column {
  width: 50%;
}
@media (min-width: 1024px) {
}
</style>
