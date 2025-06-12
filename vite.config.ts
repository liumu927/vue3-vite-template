import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import path from 'path'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log('current Info: ', { command, mode })

  const env = loadEnv(mode, './')
  console.log('current api: ', env.VITE_APP_API_BASE_URL)

  return {
    resolve: {
      // 配置@别名
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        dirs: ['src'], // 指定需要自动导入的库目录
        imports: ['vue', 'vue-router', 'pinia'], // 指定需要自动导入的库和函数
        resolvers: [AntDesignVueResolver()], // 自动导入ant-design-vue的组件和函数（处理JS/TS API自动导入（如 message、notification 等））
        dts: 'auto-imports.d.ts', // 配置文件生成位置
        // ESLint 报错处理
        eslintrc: {
          enabled: true,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true,
        },
      }),
      Components({
        dirs: ['src/components'], // 指定需要自动导入的组件目录
        extensions: ['vue', 'ts'], // 指定需要自动导入的组件文件类型
        dts: 'components.d.ts', // 配置文件生成位置
        resolvers: [
          AntDesignVueResolver({
            importStyle: false,
            resolveIcons: false,
          }),
        ], // 新增 antd 组件自动导入（处理组件自动导入（如 Button、Table 等））
      }),
    ],
    server: {
      port: 80, //自定义端口
      host: '0.0.0.0', // 0.0.0.0 表示所有地址都可以访问
      proxy: {
        '/api': {
          // 使用环境变量
          target: env.VITE_APP_BASE_URL,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
  }
})
