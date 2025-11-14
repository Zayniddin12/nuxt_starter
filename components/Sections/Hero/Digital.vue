<script setup>
// import Typewriter from 'vue3-typewriter'

const { t } = useI18n()

// Refs
const sectionRef = ref(null)
const cursorPos = ref({ x: 0, y: 0 })
const visible = ref(false)

function handleMouseMove(e) {
  const rect = sectionRef.value?.getBoundingClientRect()
  if (!rect) return

  const isInside =
    e.clientX >= rect.left &&
    e.clientX <= rect.right &&
    e.clientY >= rect.top &&
    e.clientY <= rect.bottom

  if (!isInside) {
    visible.value = false
    return
  }

  cursorPos.value = {
    x: e.clientX - rect.left - 44,
    y: e.clientY - rect.top - 44,
  }

  visible.value = true
}
</script>

<template>
  <section
    ref="sectionRef"
    @mousemove="handleMouseMove"
    @mouseleave="visible = false"
    class="relative mt-12 h-[50vh] max-h-[93vh] w-full overflow-hidden xs:mt-16 sm:mt-16 md:h-screen 2xl:mt-20"
    :class="{ 'lg:cursor-none': visible }"
  >
    <!-- Background video -->
    <video
      src="/videos/Startup_V3.mp4"
      autoplay
      loop
      playsinline
      muted
      class="size-full object-cover"
    />

    <div class="absolute inset-0 z-10 bg-black/40" />

    <!-- CONTENT -->
    <div
      class="container absolute inset-0 z-20 flex flex-col justify-end px-5 pb-5 sm:pb-20 lg:items-center lg:justify-end"
    >
      <h1
        class="text-[25px] font-bold text-white sm:text-[40px] md:text-[60px] lg:text-[80px] xl:text-[100px] 2xl:text-[120px]"
      >
        DIGITAL STARTUP AWARDS&nbsp;
        <span class="text-[#7DBA28]">
          <!--          <Typewriter-->
          <!--            :words="[-->
          <!--              'Armenia',-->
          <!--              'Kazakhstan',-->
          <!--              'Azerbaijan',-->
          <!--              'Kyrgyzstan',-->
          <!--              'Georgia',-->
          <!--              'Tadjikistan',-->
          <!--              'Turkmenistan',-->
          <!--              'Mongolia',-->
          <!--            ]"-->
          <!--            :loop="0"-->
          <!--            cursor="|"-->
          <!--            :type-speed="70"-->
          <!--            :delete-speed="50"-->
          <!--            :delay-speed="2500"-->
          <!--          />-->
        </span>
      </h1>

      <!-- MOBILE BUTTON -->
      <div
        class="mt-4 self-start ps-1 xs:mt-4 lg:absolute lg:bottom-28 lg:right-5 lg:mt-0 lg:hidden"
      >
        <NuxtLink
          to="/digital-startup-awards"
          class="block greenGradient h-auto rounded-none border-none px-6 py-2.5 text-[18px]"
        >
          {{ t('Home.RoleSection.moreBtn') }}
        </NuxtLink>
      </div>
    </div>

    <!-- FOLLOW CURSOR BUTTON -->
    <div
      class="absolute z-30 max-lg:hidden"
      style="top: 0; left: 0; width: 100%; height: 100%; cursor: none"
    >
      <div
        v-if="visible"
        class="absolute transition-transform duration-100 ease-out"
        :style="{
          transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`,
        }"
      >
        <button
          class="greenGradient size-[88px] rounded-full border-none duration-200 hover:scale-110 lg:cursor-none flex items-center justify-center"
        >
          <NuxtLink to="/digital-startup-awards">
            <span class="icon-move-up-right text-white text-2xl"></span>
          </NuxtLink>
        </button>
      </div>
    </div>
  </section>
</template>
