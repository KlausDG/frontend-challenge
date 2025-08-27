<script setup lang="ts">
import type { Header } from '@/models'
import { Stack, Typography } from '@/components/atoms'
import { IconText } from '@/components/molecules'

defineProps<{
  data: Header
}>()
</script>

<template>
  <section class="header__container">
    <div class="header__left_section">
      <Typography tag="h2" color="secondary">Pre-Order</Typography>
      <Typography tag="h4" color="secondary">{{ data.number }}</Typography>
      <Typography color="secondary">#ME{{ data.serial }}</Typography>
    </div>
    <Stack direction="column" :spacing="12">
      <Typography tag="h5" color="dark" class="title">{{ data.buyer }}</Typography>
      <Stack direction="column" :spacing="6">
        <IconText icon="user" :text="data.contact.name" />
        <Stack :spacing="16">
          <IconText icon="envelope" :text="data.contact.email" />
          <IconText icon="phone" :text="data.contact.phone" />
          <IconText icon="print" :text="data.contact.fax" />
        </Stack>
      </Stack>
    </Stack>
    <Stack direction="column" :spacing="6" class="header__right_section">
      <Typography tag="h5" color="dark">{{ `${data.currency} ${data.price}` }}</Typography>
      <Typography tag="h5" color="success">{{ data.status }}</Typography>
      <Stack :spacing="4" class="text_icon">
        <Typography color="dark">Crated at {{ data.createdAt }}</Typography>
        <unicon name="exclamation-circle" icon-style="solid" fill="#A3ACB6" />
      </Stack>
    </Stack>
  </section>
</template>

<style lang="scss" scoped>
.header__container {
  display: flex;
  gap: 32px;

  & > div {
    flex: 1;
  }
}

.header__left_section {
  background-color: $color-primary;
  max-width: 200px;
  border-radius: 0 8px 8px 0;
  padding: 16px;
}

.header__right_section {
  text-align: end;
}

.text_icon {
  align-items: center;
  justify-content: end;
}
@media (min-width: 1024px) {
}
</style>
