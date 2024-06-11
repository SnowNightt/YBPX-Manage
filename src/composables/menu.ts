import { IHistoreMenu } from 'types/HistoryMenu';
import { ref } from 'vue';
import { RouteLocationNormalizedLoaded, RouteRecordNormalized, Router } from 'vue-router';
class Menu {
  menus = ref<RouteRecordNormalized[]>([]);
  historyLink = ref<IHistoreMenu[]>([]);
  isClose = ref<boolean>(true);
  constructor(router: Router) {
    this.menus.value = this.getMenu(router);
    this.historyLink.value = JSON.parse(sessionStorage.getItem('history_route_name')!) ?? [];
  }
  public setStatus() {
    this.isClose.value = !this.isClose.value;
  }
  public getMenu(router: Router) {
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
  // 设置子菜单点击状态
  public setCurrentMenu(route: RouteLocationNormalizedLoaded) {
    this.menus.value.forEach((item) => {
      item.meta.menu!.isClick = false;
      item.children?.forEach((c) => {
        c.meta!.menu!.isClick = false;
        if (c.name == route.name) {
          c.meta!.menu!.isClick = true;
          item.meta.menu!.isClick = true;
        }
      });
    });
  }
}
export default Menu;
