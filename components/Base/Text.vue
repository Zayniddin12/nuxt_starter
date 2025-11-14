<script setup lang="ts">
type TextTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'

const TEXT_VARIANTS = [
  'display',
  'title',
  'heading-lg',
  'heading-md',
  'description',
  'title-xs',
  'subtitle',
  'body',
  'small',
] as const

interface TextProps {
  as?: TextTypes
  variant?: (typeof TEXT_VARIANTS)[number] | 'inherit'
  ellipsis?: boolean
  ellipsisLines?: number
  whiteSpace?: 'nowrap' | 'break-spaces'
  wordBreak?: 'break-all' | 'break-word'
  class?: string
  center?: boolean
  innerHTML?: string
}

const props = defineProps<TextProps>()

// Variant style mapping
const variantStyles: Record<NonNullable<TextProps['variant']>, string> = {
  display: 'fs-display',
  title: 'fs-title',
  description: 'fs-description',
  'title-xs': 'fs-title-xs',
  'heading-lg': 'fs-heading-lg',
  'heading-md': 'fs-heading-md',
  subtitle: 'fs-subtitle',
  body: 'fs-body',
  small: 'fs-small',
  inherit: '',
}

// Word break mapping
const wordBreakStyles: Record<NonNullable<TextProps['wordBreak']>, string> = {
  'break-all': 'break-all',
  'break-word': 'break-words',
}

// White space mapping
const whiteSpaceStyles: Record<NonNullable<TextProps['whiteSpace']>, string> = {
  nowrap: 'whitespace-nowrap',
  'break-spaces': 'whitespace-pre-wrap',
}

// Ellipsis line clamp
const ellipsisLineClamp = (lines: number) =>
  `overflow-hidden line-clamp-${lines}`

// Computed classes
const classes = computed(() =>
  [
    variantStyles[props.variant ?? 'body'],
    props.ellipsis ? 'truncate' : '',
    props.ellipsisLines ? ellipsisLineClamp(props.ellipsisLines) : '',
    props.whiteSpace ? whiteSpaceStyles[props.whiteSpace] : '',
    props.wordBreak ? wordBreakStyles[props.wordBreak] : '',
    props.center ? 'text-center' : '',
    props.class ?? '',
  ]
    .filter(Boolean)
    .join(' ')
)

const Tag = props.as ?? 'p'
</script>

<template>
  <component :is="Tag" :class="classes">
    <!-- Agar innerHTML berilgan bo'lsa uni render qilamiz -->
    <template v-if="props.innerHTML" v-html="props.innerHTML" />
    <!-- Aks holda slot orqali content keladi -->
    <template v-else>
      <slot />
    </template>
  </component>
</template>
