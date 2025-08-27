<script setup lang="ts">
import styles from './Typography.module.scss'
import { computed } from 'vue'

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'semibold'
type Color = 'primary' | 'secondary' | 'dark' | 'text' | 'success'

interface Props {
  tag?: string
  variant?: Variant
  color?: Color
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'p',
  color: 'text',
})

const tagToVariantMap: Record<string, Props['variant']> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'caption',
  pre: 'body',
}

const computedVariant = computed(() => props.variant ?? tagToVariantMap[props.tag ?? 'p'] ?? 'body')
const variantClass = computed(() => styles[computedVariant.value])
const colorClass = computed(() => styles[props.color ?? 'text'])
</script>

<template>
  <component :is="tag" :class="['typography', variantClass, colorClass]">
    <slot />
  </component>
</template>

<style module lang="scss">
@use './Typography.module.scss';
</style>
