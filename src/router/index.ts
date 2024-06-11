import { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import useUserStore from '@/store/userStore';
// import autoRoutes from './autoload/autoload.ts';
import setRoutes from './autoload/index.ts';
import guard from './guard';
const router = createRouter({
  history: createWebHistory(),
  routes: [...routes]
});
export async function setupRouter(app: App) {
  const user = useUserStore();
  await user.getInfo();

  setRoutes(router);
  guard(router);
  app.use(router);
}
export default router;
