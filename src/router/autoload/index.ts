import { RouteRecordRaw, Router } from 'vue-router';
import route from './autoload';
import autoloadModuleRoutes from './module';
import { env } from '@/utils/env';
import useUserStore from '@/store/userStore';
// 根据环境变量中的VITE_ROUTE_AUTOLOAD（是否自动注册路由）配置路由并导出
let routes: RouteRecordRaw[] = [];
if (env.VITE_ROUTE_AUTOLOAD) {
  // 使用自动注册的路由
  routes = route;
} else {
  // 使用手动配置的路由
  routes = autoloadModuleRoutes();
}
// 根据权限过滤路由
function setRoutes(router: Router) {
  routes.map((route) => {
    route.children = route.children?.filter((croute) => {
      let isExist = true;
      // 该路由需要权限则验证用户拥有的权限
      if (croute.meta?.permissions) {
        isExist = croute.meta?.permissions?.every((item) => {
          return useUserStore().info?.permissions?.includes(item);
        });
      }
      return isExist;
    });
    return route;
  });

  routes.forEach((item) => {
    router.addRoute(item);
  });
}
export default setRoutes;
