
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import viteCompression from 'vite-plugin-compression'
import WindiCSS from 'vite-plugin-windicss'
import { injectHtml } from 'vite-plugin-html'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [vue(),
  injectHtml({
    injectData: {
      title: 'SW网'
    }
  }),
  AutoImport({
    imports: [
      'vue',
      'vue-router',
      {
        axios: [
          ['default', 'axios'] // import { default as axios } from 'axios',
        ]
      }
    ],
    resolvers: [
      /* ... */
    ]
  }),
  WindiCSS(),
  Components({
    dts: true, // ts支持
    dirs: ['src/components', 'src/views'], // 自定义路径按需导入
    resolvers: [AntDesignVueResolver()] // antd直接使用组件,无需在任何地方导入组件
  }),
  viteCompression({
    verbose: true,
    disable: false,
    threshold: 10240,
    algorithm: 'gzip',
    ext: '.gz'
  })

  ],
  resolve: {
    //extensions: ['.vue', '.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.node', '.scss'],
    alias: {
      '@': resolve('./src'),
      '@vi': resolve('./src/views'),
      '@api': resolve('./src/api'),
      '@h': resolve('./src/hooks')
    }
  },
  base: '/', // 打包路径
  server: {
    port: 4000, // 服务端口号
    open: false, // 服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    fs: {
      strict: false
    }
  },
  css: {
    preprocessorOptions: {
      // less: {},
      scss: {
        // 避免出现: build时的 @charset 必须在第一行的警告
        charset: false,
        additionalData: '@import "./src/design/com.scss";'
      }
    }
  },
})
