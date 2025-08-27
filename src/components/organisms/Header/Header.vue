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
    <Stack direction="column" :spacing="12" class="header__middle_section">
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
  gap: $spacing-xl;

  & > div {
    flex: 1;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: $spacing-sm;
  }
}

.header__left_section {
  background-color: $color-primary;
  max-width: 200px;
  border-radius: 0 $radius-md $radius-md 0;
  padding: $spacing-md;
  order: 1;

  @media (max-width: 1024px) {
    max-width: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0 0 $radius-md $radius-md;
  }
}

.header__middle_section {
  order: 2;

  @media (max-width: 1024px) {
    order: 3;
    padding-left: $spacing-md;
    padding-right: $spacing-md;
  }
}

.header__right_section {
  text-align: end;
  order: 3;

  @media (max-width: 1024px) {
    text-align: start;
    order: 1;
    padding-left: $spacing-md;
    padding-right: $spacing-md;
  }
}

.text_icon {
  align-items: center;
  justify-content: end;

  @media (max-width: 1024px) {
    justify-content: start;
  }
}

@media (min-width: 1024px) {
}
</style>
