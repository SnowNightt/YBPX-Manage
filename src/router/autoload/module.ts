import { RouteRecordRaw } from 'vue-router';
let routes = [] as RouteRecordRaw[];
// 将手动配置的路由注册到路由
export default function autoloadModuleRoutes(): RouteRecordRaw[] {
  const file = import.meta.glob('../module/*.ts', { eager: true });
  Object.entries(file).forEach(([_filepath, module]) => {
    routes.push((module as any).default[0]);
  });

  return routes;
}
