<script setup lang="ts">
interface HeroContentProps {
  className?: string
}

const props = defineProps<HeroContentProps>()

// Vue ref
const containerRef = ref<HTMLDivElement | null>(null)

// Computed class
const classes = computed(() =>
  props.className
    ? props.className
    : 'max-sm:max-h-[700px] relative animate-pop-in opacity-1 w-full overflow-hidden ' +
      'bg-[length:120px_120px] ' +
      '[background-image:linear-gradient(0deg,transparent_24%,rgba(0,0,0,0.025)_25%,rgba(0,0,0,0.025)_26%,transparent_27%,transparent_74%,rgba(0,0,0,0.025)_75%,rgba(0,0,0,0.025)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(0,0,0,0.025)_25%,rgba(0,0,0,0.025)_26%,transparent_27%,transparent_74%,rgba(0,0,0,0.025)_75%,rgba(0,0,0,0.025)_76%,transparent_77%,transparent)] h-screen'
)
</script>

<template>
  <div ref="containerRef" :class="classes">
    <!-- content va contentTags slotlar orqali uzatiladi -->
    <slot name="content" />
    <slot name="contentTags" />
  </div>
</template>
