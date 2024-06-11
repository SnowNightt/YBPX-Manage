import { IHistoreMenu } from 'types/HistoryMenu';
import { ref } from 'vue';
import {
  RouteLocationNormalizedLoaded,
  RouteRecordNormalized,
  RouteRecordRaw,
  Router
} from 'vue-router';
import router from '@/router';
class Menu {
  menus = ref<RouteRecordNormalized[]>([]);
  historyLink = ref<IHistoreMenu[]>([]);
  isClose = ref<boolean>(true);
  constructor(router: Router) {
    this.menus.value = this.getMenu(router);
    // this.historyLink.value = JSON.parse(sessionStorage.getItem('history_route_name')!) ?? [];
    this.historyLink.value = this.getHistoryLink();
  }
  public getHistoryLink() {
    let historyLink: IHistoreMenu[] =
      JSON.parse(sessionStorage.getItem('history_route_name')!) ?? [];
    const routes = [] as RouteRecordRaw[];
    router.getRoutes().forEach((route) => {
      routes.push(...route.children);
    });

    historyLink = historyLink.filter((item) => {
      return routes.some((route) => route.name == item.routeName);
    });
    return historyLink;
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
