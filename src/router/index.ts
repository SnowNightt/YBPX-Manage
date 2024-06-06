import { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
// import autoRoutes from './autoload/autoload.ts';
import autoloadRoutes from './autoload/index.ts';
import guard from './guard';
const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...autoloadRoutes]
});
guard(router);
export function setupRouter(app: App) {
  app.use(router);
}
