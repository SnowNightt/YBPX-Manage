import { createApp } from 'vue';
import App from './App.vue';
import router, { setupRouter } from '@/router';
import { setupPlugins } from './plugins';
import '@/styles/global.scss';
async function bootstrap() {
  const app = createApp(App);
  setupPlugins(app);
  // 注册路由
  setupRouter(app);
  // 确保路由器（router）在 Vue 应用程序启动后完全准备就绪
  // 返回一个 Promise，只有当路由器的异步任务（如动态加载组件或等待导航守卫完成）都处理完毕时，Promise 才会被解决（resolved）
  await router.isReady();
  app.mount('#app');
}
bootstrap();
