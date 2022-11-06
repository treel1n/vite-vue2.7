import path from 'path'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue2'
import Components from 'unplugin-vue-components/vite'
import legacy from '@vitejs/plugin-legacy'
import postcss from 'postcss-preset-env'
import AntdMomentResolver from './build/vite-plugin-antdv1-momentjs-resolver'
import styleImport from 'vite-plugin-style-import'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const isDev = mode === 'development'
  const plugins: PluginOption[] = [
    vue(),
    Components({
      resolvers: [],
      transformer: 'vue2',
      dirs: ['src/components'],
      extensions: ['vue'],
      dts: false
    }),
    AntdMomentResolver(),
    styleImport({
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: name => {
            return `ant-design-vue/es/${name}/style/index`
          }
        }
      ]
    }),
    eslint({
      include: ['src/**/*.ts', 'src/**/*.vue', 'src/**/*.js'],
      exclude: ['./node_modules/**'],
      cache: false
    }),
    splitVendorChunkPlugin()
  ]
  if (command === 'build') {
    plugins.push(
      legacy({
        targets: ['> 0.01%, last 10 versions, Firefox ESR']
      })
    )
  }
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    build: {
      target: 'es2015',
      // cssTarget: 'chrome80',
      brotliSize: false,
      chunkSizeWarningLimit: 2000,
      commonjsOptions: {
        //  改为 ture 后就会转化 require 语法
        transformMixedEsModules: true
      }
    },
    server: {
      // port: isDev ? 80 : 3000
    },
    plugins,
    css: {
      postcss: {
        plugins: [postcss()]
      },
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: {
            hack: `true; @import (reference) "${path.resolve(
              __dirname,
              'src/less/index.less'
            )}"`
          }
        }
      }
    }
  }
})
