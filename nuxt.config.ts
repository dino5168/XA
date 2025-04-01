// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  ssr: true,
  devtools: {enabled: true},
  app: {
    head: {
      link: [
        {rel: "preconnect", href: "https://fonts.googleapis.com"},
        {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: ""},
        {
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Yusei+Magic&display=swap",
          rel: "stylesheet",
        },
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      hmr: true,
    },
  },
  css: [
    "~/assets/css/main.css",
    "material-icons/iconfont/material-icons.css",
    "@fortawesome/fontawesome-free/css/all.min.css",
    "leaflet/dist/leaflet.css",
    "animate.css",
  ],
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/scripts",
    "radix-vue/nuxt",
    "@vueuse/nuxt",
  ],
});
