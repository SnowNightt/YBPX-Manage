import { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import { setupMockPlugin } from './mock';
import { setupAutoImportPlugin } from './autoImport';

// 配置vite中插件的方法
export default function setupPlugins() {
  const plugins: Plugin[] = [vue()];
  // vite配置mockjs
  plugins.push(setupMockPlugin());
  // vite配置element按需导入,components文件夹下的组件自动导入，有ts类型
  setupAutoImportPlugin(plugins);

  return plugins;
}
