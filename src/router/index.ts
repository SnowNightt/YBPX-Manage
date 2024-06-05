import { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import autoRoutes from './autoload';
import guard from './guard';
const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...autoRoutes]
});
guard(router);
export function setupRouter(app: App) {
  app.use(router);
}
