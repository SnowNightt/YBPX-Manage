import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';

const useRouterStore = defineStore('router', () => {
  const routes = getRoutes();
  return {
    routes
  };
});
export default useRouterStore;
// 过滤路由，返回在菜单中要渲染的路由
function getRoutes() {
  const router = useRouter();
  const routes = router
    // 获取所有路由
    .getRoutes()
    // 获取一级路由
    .filter((route) => route.children.length && route.meta.menu?.isShow)
    // 获取子路由
    .map((item) => {
      item.children = item.children.filter((ch) => ch.meta?.menu?.isShow);
      return item;
    })
    .filter((item) => item.children?.length);
  return routes;
}
