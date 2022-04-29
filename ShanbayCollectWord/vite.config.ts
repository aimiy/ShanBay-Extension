import { defineConfig } from 'vite'
import { resolve } from "path"
import vue from '@vitejs/plugin-vue'
import { crx3 } from "vite-plugin-vue-crx3"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), crx3()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    target: 'es2015',
    rollupOptions: {
      input: resolve(__dirname, 'src/manifest.json'), // 将 src 中的 manifest.json 作为入口文件
    },
  }
})
