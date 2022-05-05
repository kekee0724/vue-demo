import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import config from './src/config'
import tsconfigPaths from 'vite-tsconfig-paths'

const pathResolve = (pathStr: string) => {
  return path.resolve(__dirname, pathStr)
}

const env = process.argv[process.argv.length - 1]
const base = config[env]
console.log('process:::env', base)

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  server: {
    port: 2233,
    open: true,
    proxy: {
      '/api': {
        // target: 'http://localhost:3000',
        // 当遇到 /api 路径时，将其转换成 target 的值，这里我们为了测试，写了新蜂商城的请求地址
        target: 'http://127.0.0.1:8071/api/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '') // 将 /api 重写为空
      }
    }
  },
  resolve: {
    alias: {
      '~': pathResolve('./'), // 根路径
      '@': pathResolve('src'), // src 路径
      '@levi-m/core': pathResolve('src/core'), // core 路径
      '@levi-m/core-ui': pathResolve('src/core-ui'), // core-ui 路径
      '@levi-a': pathResolve('src/apps') // apps 路径
    }
  },
  optimizeDeps: {
    // include: ['@ant-design/icons-vue']
  },
  // otherwise, may assets 404 or visit with index.html
  base: '/start-vue/',
  build: {
    target: 'es2015',
    outDir: 'build',
    assetsDir: 'assets',
    assetsInlineLimit: 2048,
    cssCodeSplit: true
  },
  plugins: [vue(), vueJsx(), tsconfigPaths()]
})
