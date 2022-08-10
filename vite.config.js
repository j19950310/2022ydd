import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import path from "path";

const OnlineUrl = 'https://j19950310.github.io/2022ydd/'
const PROD = process.env.MODE === 'PROD'

// https://vitejs.dev/config/
export default defineConfig({
  base: PROD ? OnlineUrl : undefined,
  plugins: [vue(),Pages({
    dirs: './src/views',
    exclude: ['**/components/*.vue'],
    routeStyle: 'nuxt'
  })],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/style/global.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
