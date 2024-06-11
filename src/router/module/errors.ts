import { RouteRecordRaw } from 'vue-router';
const routes = [
  {
    name: 'errors',
    path: '/errors',
    component: () => import('@/layouts/Admin.vue'),
    children: [
      {
        name: 'errors.404',
        path: '404',
        component: () => import('@/views/errors/404.vue')
      }
    ]
  }
] as RouteRecordRaw[];
export default routes;
