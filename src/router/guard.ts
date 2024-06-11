import { RouteLocationNormalized, Router } from 'vue-router';
import localStore from '@/utils/localStore';
import user from '@/store/userStore';
import menu from '@/store/menuStore';
import { CacheEnum } from '@/enum/cacheEnum';
class Guard {
  constructor(private router: Router) {
    this.router = router;
  }
  public run() {
    this.router.beforeEach(async (to, from) => {
      await user().getInfo();
      // 获取token
      const token = localStore.get('token');
      // 验证是否登录
      if (this.isLogin(to, token?.token) == false) {
        // 验证失败则跳到登录页面
        return { name: 'login', query: { redirect: JSON.stringify(to.name) } };
      }
      //  判断是不是游客,不是游客则不能进登录页面
      if (this.isGuest(to, token?.token) == false) {
        return from;
      }
      // 获取面包屑
      menu().getHistoryMenu();
    });
  }
  // 判断是否登录
  private isLogin(route: RouteLocationNormalized, token: string | null): Boolean {
    // 不需要登录或者需要登录且要有token
    const state = Boolean(!route.meta.auth || (token && route.meta.auth));
    // 如果没登录
    if (!state) {
      // 路由重定向，登录后跳转到一开始要进的路由
      localStorage.setItem(CacheEnum.REDIRECT_ROUTE_NAME, JSON.stringify(route.name));
    }
    return state;
  }
  // 判断是不是游客
  private isGuest(route: RouteLocationNormalized, token: string | null): Boolean {
    //
    return Boolean(!route.meta.guest || (!token && route.meta.guest));
  }
}
export default (router: Router) => {
  new Guard(router).run();
};
