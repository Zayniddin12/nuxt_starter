<template>
  <el-select
    v-model="current"
    placeholder="Tilni tanlang"
    size="small"
    style="width: 150px"
    @change="setLocale"
  >
    <!-- Chap tomonda flag -->
    <template #prefix>
      <img
        v-if="current"
        src="/icons/global_alt.svg"
        class="w-5 h-5 rounded-full mr-0"
      />
    </template>

    <!-- Dropdown elementlari -->
    <el-option
      v-for="l in locales"
      :key="l.code"
      :label="l.code"
      :value="l.code"
    >
      <div class="flex items-center gap-2">
        <span>{{ l.name }}</span>
      </div>
    </el-option>
  </el-select>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
const { locale, locales, setLocale } = useI18n()

const current = ref(locale.value.toUpperCase())
watch(locale, (val) => (current.value = val.toUpperCase()))
</script>
<style>
.el-select__wrapper {
  min-width: 100px !important;
  width: 100px !important;
}
.el-select__selected-item {
  flex-shrink: 0 !important;
  font-size: 16px !important;
  font-weight: 600 !important;
}
.el_select__prefix img {
  margin-right: 0 !important;
}
.el-select__placeholder {
}
</style>
