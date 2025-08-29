// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    watch: {
      // 强制启用轮询模式（针对 WSL2/Windows）
      usePolling: true,
      interval: 1000,
      // 显式指定监听目录
      ignored: [
        '!**/pages/**',   // 监控文章目录
        '!**/valaxy.config.*', // 监控配置文件
        '!**/public/**'
      ]
    }
  }
})