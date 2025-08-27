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
    <Card title="Bill to" :subtitle="data.name">
      <Stack direction="column" :spacing="4">
        <IconText icon="map-marker" :text="data.address" />
        <IconText icon="user" :text="data.contact.name" />
        <IconText icon="envelope" :text="data.contact.email" />
        <IconText icon="phone" :text="data.contact.phone" />
        <IconText icon="print" :text="data.contact.fax" />
      </Stack>
    </Card>
  </section>
</template>
