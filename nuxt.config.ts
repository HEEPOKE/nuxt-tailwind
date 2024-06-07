export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/ui",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "@nuxt/eslint",
    "nuxt-security",
    "dayjs-nuxt",
    "nuxt-booster",
  ],
  eslint: {
    config: {
      stylistic: {
        indent: "tab",
        semi: true,
      },
    },
  },
  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
    exposeConfig: true,
    viewer: true,
    config: {},
    editorSupport: true,
  },
  googleFonts: {
    families: {
      Roboto: true,
      "Josefin+Sans": true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
      Inter: "200..700",
      "Crimson Pro": {
        wght: "200..900",
        ital: "200..700",
      },
    },
  },
  security: {
    headers: {},
    rateLimiter: {},
  },
  dayjs: {
    defaultLocale: [
      "th",
      {
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few secondses",
          m: "a minute",
          mm: "%d minuteses",
          h: "an hour",
          hh: "%d hourses",
          d: "a day",
          dd: "%d dayses",
          M: "a month",
          MM: "%d monthseses",
          y: "a year",
          yy: "%d yearseses",
        },
      },
    ],
  },
  booster: {
    detection: {
      performance: true,
      browserSupport: true,
      battery: true,
    },
  },
});
