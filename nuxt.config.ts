// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  // css: ["~/assets/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/scss/main.scss" as *; @use "~/assets/scss/variables.scss" as *; @use "~/assets/scss/mixins.scss" as *;`,
          api: "modern-compiler",
        },
      },
    },
  },
  runtimeConfig: {
    apiSecret: "123",
    public: {
      apiBase: "/api",
      fallbackImages: "https://picsum.photos/500/300",
    },
  },
  plugins: [
    "~/plugins/clickOutside.ts",
  ],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  modules: [
    "@primevue/nuxt-module",
    "vue3-carousel-nuxt",
    "@vesp/nuxt-fontawesome",
  ],
  fontawesome: {
    icons: {
      solid: [
        "money-bill",
        "bed",
        "warehouse",
        "bath",
        "ruler-combined",
        "location-pin",
        "building",
      ],
    },
  },
});
