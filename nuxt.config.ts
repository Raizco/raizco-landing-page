// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/scss/main.scss" as *; @use "~/assets/scss/variables.scss" as *; @use "~/assets/scss/mixins.scss" as *; @use "~/assets/scss/fonts.scss" as *;`,
          api: "modern-compiler",
        },
      },
    },
  },
  runtimeConfig: {
    apiSecret: "123",
    public: {
      apiBaseUrl:
        process.env.NUXT_PUBLIC_API_BASE_URL || "https://default.api.com",
      fallbackImages: "https://picsum.photos/500/300",
    },
  },
  plugins: ["~/plugins/clickOutside.ts", "~/plugins/api.ts",],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  modules: ["vue3-carousel-nuxt", "@vesp/nuxt-fontawesome", "@nuxtjs/i18n", "@nuxt/ui", "@pinia/nuxt", "nuxt-viewport"],
  viewport: {
    breakpoints: {
      tablet: 720,
      desktop: 721,
    }
  },
  fontawesome: {
    icons: {
      solid: [
        "sliders",
        "magnifying-glass",
        "money-bill",
        "bed",
        "warehouse",
        "bath",
        "ruler-combined",
        "location-pin",
        "building",
        "xmark",
      ],
    },
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
});