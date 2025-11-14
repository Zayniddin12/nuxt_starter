<template>
  <div>
    <LayoutsHeader />
    <div class="min-h-[calc(100vh-457px)]">
      <slot />
    </div>
    <LayoutsFooter />
  </div>
</template>
<script setup lang="ts"></script>
