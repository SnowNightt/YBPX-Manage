import { RouteRecordRaw } from 'vue-router';

const routes = [
  {
    name: 'admin',
    path: '/admin',
    component: () => import('@/layouts/Admin.vue'),
    meta: { menu: { title: '用户首页', isShow: true, icon: 'fab fa-cloudsmith' } },
    children: [
      {
        name: 'admin.user',
        path: 'user',
        component: () => import('@/views/admin/User.vue'),
        meta: {
          menu: {
            title: '主页',
            isShow: true,
            icon: 'fab fa-cloudsmith'
          }
        }
      }
    ]
  }
] as RouteRecordRaw[];
export default routes;
