import { App } from 'vue';
import { setupTailwind } from './tailwind';
// import setupElementPlus from './element-plus';
import setupPinia from './pinia';
import _ from 'lodash';
export function setupPlugins(app: App<Element>) {
  setupPinia(app);
  setupTailwind();
  // setupElementPlus(app);

  // ../components/form/*.vue目录下的组件自动注册为全局组件
  // const modules = import.meta.glob('../components/form/*.vue', { eager: true, import: 'default' });
  // const keys = Object.keys(modules);
  // for (const key of keys) {
  //   let componentName = key.split('/').at(-1)?.split('.')[0];
  //   componentName = _.camelCase(componentName);
  //   app.component(componentName, modules[key] || {});
  // }
}
