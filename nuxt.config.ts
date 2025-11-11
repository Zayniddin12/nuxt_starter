// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  app: {
    head: {
      title: 'Nuxt3 project',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: `/favicon.svg`,
        },
        {
          rel: 'canonical',
          href: '',
        },
      ],
    },
  },

  css: ['~/assets/tailwind.css', 'element-plus/dist/index.css'],

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-gtag',
    //   Enable if your Yandex Metrica with real credentials
    // [
    //   'yandex-metrika-module-nuxt3',
    //   {
    //     id: 0000000,
    //     webvisor: true,
    //   },
    // ],
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
      'nuxt-simple-robots',
      'nuxt-simple-sitemap',
    ],
  ],

  nitro: {
    serveStatic: true,
  },

  devServerHandlers: [],

  runtimeConfig: {
    public: {
      baseURL: 'localhost',
    },
  },

  gtag: {
    id: process.env.GOOGLE_TAG_ID,
  },

  compatibilityDate: '2025-04-05',
})