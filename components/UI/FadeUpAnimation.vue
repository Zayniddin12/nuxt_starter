<script setup lang="ts">
import { motion } from '@vueuse/motion'

interface Props {
  delayIndex?: number
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  delayIndex: 0,
  class: '',
})
</script>

<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :enter="{ opacity: 1, y: 0 }"
    :transition="{
      duration: 0.5,
      delay: props.delayIndex * 0.1,
    }"
    :class="props.class"
  >
    <slot />
  </div>
</template>
