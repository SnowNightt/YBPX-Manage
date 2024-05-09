import { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import autoRoutes from "./autoload";
const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...autoRoutes],
});
export function setupRouter(app: App) {
  app.use(router);
}
