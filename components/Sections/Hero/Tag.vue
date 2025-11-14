<script setup lang="ts">
interface TagType {
  href?: string
  left?: string
  top?: string
  label: string
}

interface HeroTagProps {
  className?: string
  tag: TagType
  isTag: boolean
}
const props = defineProps<HeroTagProps>()

// Shartli class
const showTag = props.isTag ? 'opacity-100 scale-100' : ''
</script>

<template>
  <BaseButton
    variant="clear"
    class="bg-white max-[320px]:px-2 max-[320px]:py-0"
  >
    <NuxtLinkLocale
      :to="props.tag.href || '#!'"
      class="text-center bg-white/90 sm:p-3 rounded-2xl text-black shadow-md z-10 hover:z-50 hover:shadow-lg opacity-0 transform transition-all duration-1000 ease-out"
      :class="showTag"
    >
      <p
        class="font-bold text-gray-800 max-sm:text-sm max-[360px]:text-[12px] max-[320px]:text-[11px] sm:text-[18px] md:text-[24px] lg:text-[30px]"
      >
        {{ props.tag.label }}
      </p>
    </NuxtLinkLocale>
  </BaseButton>
</template>
