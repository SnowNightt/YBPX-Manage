import { RouteRecordRaw } from 'vue-router';

const routes = [
  {
    name: 'editor',
    path: '/editor',
    component: () => import('@/layouts/Editor.vue'),
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
            title: '基础编译器',
            isShow: true,
            icon: 'fab fa-atlassian'
          }
        }
      }
    ]
  }
] as RouteRecordRaw[];
export default routes;
