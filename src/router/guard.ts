import { RouteLocationNormalized, Router } from 'vue-router';
import localStore from '@/utils/localStore';
class Guard {
  constructor(private router: Router) {
    this.router = router;
  }
  public run() {
    this.router.beforeEach((to, from) => {
      // 获取token
      const token = localStore.get('token');
      // 验证是否登录
      if (this.isLogin(to, token?.token) == false) {
        // 验证失败则跳到登录页面
        return { name: 'login' };
      }
      //  判断是不是游客,不是游客则不能进登录页面
      if (this.isGuest(to, token?.token) == false) {
        return from.path;
      }
    });
  }
  // 判断是否登录
  private isLogin(route: RouteLocationNormalized, token: string | null): Boolean {
    // 不需要登录或者需要登录且要有token
    return Boolean(!route.meta.auth || (token && route.meta.auth));
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
