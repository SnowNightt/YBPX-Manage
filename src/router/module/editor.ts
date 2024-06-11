import { RouteRecordRaw } from 'vue-router';

const routes = [
  {
    name: 'editor',
    path: '/editor',
    component: () => import('@/layouts/Admin.vue'),
    meta: {
      menu: {
        title: '编译器',
        isShow: true,
        icon: 'fab fa-apple'
      },
      auth: true
    },
    children: [
      {
        name: 'editor.base',
        path: 'base',
        component: () => import('@/views/editor/Base.vue'),
        meta: {
          menu: {
            title: '基础编译器',
            isShow: true,
            icon: 'fab fa-apple'
          }
        }
      },
      {
        name: 'editor.markdown',
        path: 'markdown',
        component: () => import('@/views/editor/MarkDown.vue'),
        meta: {
          menu: {
            title: 'MarkDown',
            isShow: true,
            icon: 'fab fa-atlassian'
          }
        }
      }
    ]
  }
] as RouteRecordRaw[];
export default routes;
