<template>
  <div class="container mx-auto text-center lg:w-1/2">
    <BaseText variant="description" class="mt-12">
      {{ t('platform_descriptions') }}
    </BaseText>
    <BaseText variant="description" class="my-8">
      {{ t('present_startup') }}
    </BaseText>

    <BaseButton class="greenGradient px-6 py-3 text-lg font-bold">
      {{ t('join_now') }}
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n() // Nuxt 3 / Vue I18n uchun translation hook
</script>
