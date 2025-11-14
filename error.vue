<script setup lang="ts">
defineProps({
  error: Object,
})
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen text-center">
    <h1 class="text-3xl font-bold text-red-600 mb-4">Xato yuz berdi!</h1>
    <p>{{ error?.message }}</p>
    <NuxtLink to="/" class="text-blue-500 underline mt-4"
      >Bosh sahifaga qaytish</NuxtLink
    >
  </div>
</template>
