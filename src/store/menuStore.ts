import { defineStore } from 'pinia';
import { IHistoreMenu } from 'types/HistoryMenu';
import { ref } from 'vue';
import router from '@/router';
import { RouteLocationNormalizedLoaded, RouteMeta, RouteRecordRaw, useRouter } from 'vue-router';

const useMenuStore = defineStore('menu', () => {
  const routes = getRoutes();
  const historyMenu = ref<IHistoreMenu[]>([]);
  // 菜单是否展开
  const isClose = ref<boolean>(false);
  // 消息显示
  const messageShow = ref<boolean>(false);
  // 控制消息显示
  function handleMessageShow() {
    messageShow.value = !messageShow.value;
  }
  // 点击菜单，添加面包屑
  function addHistoryMenu(route: RouteRecordRaw | RouteLocationNormalizedLoaded) {
    // 如果不是菜单路由则直接返回
    if (!(route.meta as RouteMeta).menu) return;
    // 面包屑数量超10个，删除第一个面包屑
    if (historyMenu.value.length >= 10) {
      historyMenu.value.shift();
    }
    // 如果重复就不添加
    if (historyMenu.value.every((item) => item.routeName != (route.name as string))) {
      // 添加面包屑
      historyMenu.value.push({
        title: (route.meta as RouteMeta).menu?.title as string,
        routeName: route.name as string
      });
    }
    sessionStorage.setItem('history_route_name', JSON.stringify(historyMenu.value));
  }
  // 从本地获取面包屑,根据权限过滤
  function getHistoryMenu() {
    let historyLink: IHistoreMenu[] =
      JSON.parse(sessionStorage.getItem('history_route_name')!) ?? [];
    const routes = [] as RouteRecordRaw[];
    router.getRoutes().forEach((route) => {
      routes.push(...route.children);
    });

    historyMenu.value = historyLink.filter((item) => {
      return routes.some((route) => route.name == item.routeName);
    });

    // return historyLink;
  }

  // function getHistoryMenu() {
  //   historyMenu.value = JSON.parse(sessionStorage.getItem('history_route_name')!) ?? [];
  // }
  // 删除面包屑
  function removeHistoryMenu(menu: IHistoreMenu, route: RouteLocationNormalizedLoaded) {
    const index = historyMenu.value.indexOf(menu);
    // 当前面包屑是最后一个
    if (index == historyMenu.value.length - 1) {
      // 要删的是当前选中的
      if (route.name == menu.routeName) {
        router.push({ name: historyMenu.value[index - 1].routeName });
      }
    }
    // 要删的不是最后一个
    else {
      // 要删的是当前选中的
      if (route.name == menu.routeName) {
        router.push({ name: historyMenu.value[index + 1].routeName });
      }
    }

    historyMenu.value.splice(index, 1);
    sessionStorage.setItem('history_route_name', JSON.stringify(historyMenu.value));
  }
  function setStatus() {
    isClose.value = !isClose.value;
  }
  return {
    routes,
    addHistoryMenu,
    historyMenu,
    getHistoryMenu,
    removeHistoryMenu,
    isClose,
    setStatus,
    handleMessageShow,
    messageShow
  };
});
export default useMenuStore;
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
