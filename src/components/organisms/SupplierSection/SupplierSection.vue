<script setup lang="ts">
import { Badge, Card, Stack, Typography } from '@/components/atoms'
import { IconText } from '@/components/molecules'
import type { Supplier } from '@/models'

defineProps<{
  data: Supplier
}>()
</script>

<template>
  <section class="supplier__container">
    <Card title="Supplier">
      <template #subtitle>
        <Stack :spacing="8" class="subtitle__container">
          <Typography tag="p" variant="semibold" color="dark">{{ data.name }}</Typography>
          <Badge>#{{ data.code }}</Badge>
        </Stack>
      </template>
      <Stack class="info__container">
        <Stack direction="column" :spacing="4" class="content__column">
          <IconText
            icon="file-landscape-alt"
            :text="`${data.document.type}: ${data.document.value}`"
          />
          <IconText icon="map-marker" :text="data.address" />
          <IconText icon="user" :text="data.contact.name" />
        </Stack>
        <Stack direction="column" :spacing="4">
          <IconText icon="envelope" :text="data.contact.email" />
          <IconText icon="phone" :text="data.contact.phone" />
          <IconText icon="print" :text="data.contact.fax" />
          <IconText icon="eye" :text="data.readAt" />
        </Stack>
      </Stack>
    </Card>
  </section>
</template>

<style lang="scss" scoped>
.supplier__container {
  @media (max-width: 1024px) {
    padding-left: 12px;
    padding-right: 12px;
  }
}

.subtitle__container {
  align-items: center;
}

.info__container {
  @media (max-width: 1024px) {
    flex-direction: column !important;
    gap: 8px !important;
  }
}

.content__column {
  width: 50%;

  @media (max-width: 1024px) {
    width: 100%;
  }
}
</style>
