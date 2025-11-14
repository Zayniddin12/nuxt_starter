<script setup>
const { t } = useI18n()
</script>

<template>
  <footer class="z-50 bg-black text-white">
    <div class="container flex flex-col px-5 py-10">
      <div class="flex justify-between max-xl:flex-col max-xl:gap-10">
        <!-- LEFT LOGO + SOCIAL -->
        <div class="flex flex-col justify-between max-xl:gap-10">
          <img class="w-96" src="/icons/logo.svg" alt="startup base logo" />

          <div class="flex gap-10 max-xl:gap-4">
            <a
              href="https://www.youtube.com/@itpark_uz"
              target="_blank"
              class="greenGradient flex size-12 items-center justify-center rounded-full"
            >
              <img src="/icons/yt.svg" alt="yt icon" class="w-7" />
            </a>

            <a
              href="https://www.linkedin.com/showcase/startupbaseuz/"
              target="_blank"
              class="greenGradient flex size-12 items-center justify-center rounded-full"
            >
              <img src="/icons/ln.svg" alt="ln icon" class="w-6" />
            </a>

            <a
              href="https://www.facebook.com/@startupbase.uz"
              target="_blank"
              class="greenGradient flex size-12 items-center justify-center rounded-full"
            >
              <img src="/icons/fb.svg" alt="fb icon" class="w-6" />
            </a>

            <a
              href="https://www.instagram.com/startupbase.uz"
              target="_blank"
              class="greenGradient flex size-12 items-center justify-center rounded-full"
            >
              <img src="/icons/inst.svg" alt="inst icon" class="w-6" />
            </a>

            <a
              href="https://t.me/startupbaseuz"
              target="_blank"
              class="greenGradient flex size-12 items-center justify-center rounded-full"
            >
              <img src="/icons/tg.svg" alt="tg icon" class="-ml-1 w-6" />
            </a>
          </div>
        </div>

        <!-- CENTER LINKS -->
        <div class="flex flex-col gap-6 text-lg 2xl:text-[20px]">
          <NuxtLink class="hover:text-[#9efc1c]" to="/events">
            {{ t('Header.activities') }}
          </NuxtLink>

          <NuxtLink class="hover:text-[#9efc1c]" to="/startups">
            {{ t('Header.startups') }}
          </NuxtLink>

          <NuxtLink class="hover:text-[#9efc1c]" to="/investors">
            {{ t('Header.investors') }}
          </NuxtLink>

          <NuxtLink
            class="hover:text-[#9efc1c]"
            to="/programs?tab=support-programs"
          >
            {{ t('Header.programs') }}
          </NuxtLink>

          <NuxtLink class="hover:text-[#9efc1c]" to="/news">
            {{ t('Header.news') }}
          </NuxtLink>
        </div>

        <!-- RIGHT CONTACT -->
        <div class="flex cursor-default flex-col gap-8">
          <h2 class="text-xl sm:text-3xl 2xl:text-[50px]">
            {{ t('Home.contactUs') }}
          </h2>

          <div class="flex flex-col justify-center gap-8">
            <div class="flex items-center gap-3">
              <div
                class="greenGradient flex size-7 items-center justify-center rounded-full"
              >
                <img src="/icons/phone.svg" alt="phone icon" />
              </div>
              <p>+998 99 665 11 99</p>
            </div>

            <div class="flex items-center gap-3">
              <div
                class="greenGradient flex size-7 items-center justify-center rounded-full"
              >
                <img src="/icons/mail.svg" alt="mail icon" />
              </div>
              <p>info@startupbase.uz</p>
            </div>

            <div class="flex items-center gap-3">
              <div
                class="greenGradient flex size-7 items-center justify-center rounded-full"
              >
                <img src="/icons/location.svg" alt="location icon" />
              </div>
              <p>4, Tepamasjid str., Tashkent, Uzbekistan, 100164</p>
            </div>

            <a href="https://outsource.gov.uz/" target="_blank"></a>
          </div>
        </div>
      </div>

      <p class="m-auto select-none pt-10 text-xs">{{ t('Home.reserved') }}.</p>
    </div>
  </footer>
</template>
