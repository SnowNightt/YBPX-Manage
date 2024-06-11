import { RouteRecordRaw } from 'vue-router';

const routes = [
  {
    name: 'admin',
    path: '/admin',
    component: () => import('@/layouts/Admin.vue'),
    // 重定向
    redirect: '/admin/user',
    meta: { menu: { title: '用户', isShow: true, icon: 'fab fa-cloudsmith' } },
    children: [
      {
        name: 'admin.user',
        path: 'user',
        component: () => import('@/views/admin/User.vue'),
        meta: {
          auth: true,
          menu: {
            title: '工作台',
            isShow: true,
            icon: 'fab fa-cloudsmith'
          }
        }
      }
    ]
  }
] as RouteRecordRaw[];
export default routes;
