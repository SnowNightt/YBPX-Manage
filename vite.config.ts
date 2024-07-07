import { ConfigEnv, loadEnv } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { handleEnv } from './vite/util';
import setupPlugins from './vite/plugins';
export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command == 'build';
  const env = handleEnv(loadEnv(mode, '.'));

  return {
    // 外部配置插件
    plugins: setupPlugins(),
    // plugins: [
    //   vue(),
    //   // 配置mockjs
    //   viteMockServe({
    //     // default
    //     mockPath: 'mock',
    //     enable: true
    //   })
    // ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@public': path.resolve(__dirname, 'public')
      }
    },

    build: {
      // 分块打包
      // 使用分块打包可以将内容打包到不同的文件中，减少单个文件大小，提高加载速度。下面将node_modules的扩展单独进行打包。
      rollupOptions: {
        // 打包时会把最终的编译目录清空
        emptyOutDir: true,
        output: {
          manualChunks(id: string) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          }
        }
      }
    },
    // 开发环境
    server: {
      proxy: {
        '/api': {
          target: env.VITE_API_URL,
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, '')
        }
      }
    }
  };
};
