// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: {enabled: true},
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
  ],
});
