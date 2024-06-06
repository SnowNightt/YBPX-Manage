import { RouteRecordRaw } from 'vue-router';
import route from './autoload';
import autoloadModuleRoutes from './module';
import { env } from '@/utils/env';
// 根据环境变量中的VITE_ROUTE_AUTOLOAD（是否自动注册路由）配置路由并导出
let routes: RouteRecordRaw[] = [];
if (env.VITE_ROUTE_AUTOLOAD) {
  // 使用自动注册的路由
  routes = route;
} else {
  // 使用手动配置的路由
  routes = autoloadModuleRoutes();
}
export default routes;
