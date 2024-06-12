import { ConfigEnv, loadEnv } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { handleEnv } from './vite/util';

export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command == 'build';
  const env = handleEnv(loadEnv(mode, '.'));
  return {
    plugins: [
      vue(),
      // 配置mockjs
      viteMockServe({
        // default
        mockPath: 'mock',
        enable: true
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@public': path.resolve(__dirname, 'public')
      }
    }
  };
};
