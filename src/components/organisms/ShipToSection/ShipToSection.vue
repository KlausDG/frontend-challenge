<script setup lang="ts">
import { Badge, Card, Stack, Typography } from '@/components/atoms'
import { IconText } from '@/components/molecules'
import type { Address } from '@/models'

defineProps<{
  data: Address
}>()
</script>

<template>
  <section>
    <Card title="Ship to">
      <template #subtitle>
        <Stack :spacing="8" class="subtitle__container">
          <Typography tag="p" variant="semibold" color="dark">{{ data.name }}</Typography>
          <Badge>#{{ data.code }}</Badge>
        </Stack>
      </template>
      <Stack direction="column">
        <Stack>
          <Stack direction="column" :spacing="4" class="content__column">
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
