<template>
  <div class="bg-white">
    <div class="container xs:pt-5 py-3 flex-center-between">
      <img
        src="https://startupbase.uz/_next/static/media/logo-black.3f5117bd.svg"
      />

      <nav class="flex-center gap-3">
        <div v-for="item in navbarMenu" :key="item.label">
          <el-dropdown
            v-if="item.children"
            @command="goToPage"
            class="my-4"
            type="primary"
          >
            <div
              class="flex items-center gap-1 cursor-pointer rounded-[16px] gap-x-1 hover:text-[#7DBA28] px-1.5 !text-[15px] font-semibold transition-all 2xl:px-3 lg:text-[17.5px] outline-none ring-0 text-[#676E76]"
            >
              {{ item.label }}
              <el-icon class="el-icon--right">
                <el-icon-arrow-down class="text-base font-bold" />
              </el-icon>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  v-for="child in item.children"
                  :key="child.path"
                  :command="child.path"
                  >{{ child.label }}</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>

          <NuxtLink
            v-else
            to=""
            class="cursor-pointer text-gray-700 hover:text-green-600"
          >
            {{ item.label }}
          </NuxtLink>
        </div>
      </nav>
      <div class="flex-center gap-2">
        <BaseLang />
        <BaseButton text="login" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { navbarMenu } from '@/data/header'

const router = useRouter()

function goToPage(path: string) {
  router.push(path)
}
</script>
