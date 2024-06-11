import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/Login.vue'),
    meta: { guest: true }
  },
  {
    path: '/:any(.*)',
    name: '404',
    component: () => import('@/views/errors/404.vue')
  }
];
export default routes;
