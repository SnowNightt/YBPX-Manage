import { CacheEnum } from '@/enum/cacheEnum';
import localStore from './localStore';
import user from '@/store/userStore';
import { router } from '@/router';
import { ILoginData, getLogin } from '@/api/userApi';
// 用户退出登录，删除token
function logout(key: CacheEnum.TOKEN_NAME) {
  console.log(router);
  localStore.remove(key);
  user().info = null;
  router.push('/');
}

async function login(data: ILoginData) {
  // 发送请求获取token
  const {
    data: { token }
  } = await getLogin(data); // 解构获取token
  localStore.set(CacheEnum.TOKEN_NAME, { token });
  // 直接进登录页面登录后会死循环，需要设置'||'
  const routeName = localStore.get(CacheEnum.REDIRECT_ROUTE_NAME) || 'home';
  localStore.remove(CacheEnum.REDIRECT_ROUTE_NAME);
  // 登录成功跳转
  router.push({ name: routeName });
}
export { logout, login };
