import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { Plugin } from 'vite';
export function setupAutoImportPlugin(plugin: Plugin[]) {
  plugin.push(
    // 自动引入Api
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue', 'vue-router'],
      //为true时在项目根目录自动创建
      dts: 'types/auto-imports.d.ts'
    }),
    // 自动加载组件,element按需加载
    Components({
      // element按需加载
      resolvers: [ElementPlusResolver()],
      //自动加载的组件目录，默认值为 ['src/components']  components文件夹下的组件自动导入，有ts类型
      dirs: ['src/components'],
      //组件名称包含目录，防止同名组件冲突
      // directoryAsNamespace: true,
      //指定类型声明文件，为true时在项目根目录创建
      dts: 'types/components.d.ts'
    })
  );
}
