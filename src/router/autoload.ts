import { RouteRecordRaw } from 'vue-router';
import { env } from '@/types/helper';
// 定义一个接口描述 Vue 单文件组件的结构
interface VueComponent {
  default: {
    // setup 函数返回的属性
    name: string;
    route?: RouteRecordRaw;
    // 其他可能的属性和方法
  };
}
// 获取layouts文件夹下的文件，父级路由
const layouts = import.meta.glob('../layouts/*.vue', { eager: true });
// 获取views下的，文件夹下的文件
const views = import.meta.glob('../views/**/*.vue', { eager: true });

// 最终生成的路由
const autoRoutes = [] as RouteRecordRaw[];
// 遍历父级，生成路由
Object.entries(layouts).forEach(([file, module]) => {
  // 生成父级路由
  const route = getRoutes(file, module as VueComponent);
  // 生成子路由
  route.children = getChildrenRoutes(route);
  autoRoutes.push(route);
});
function getChildrenRoutes(route: RouteRecordRaw) {
  const childrenRoute = [] as RouteRecordRaw[];
  // 遍历子集
  Object.entries(views).forEach(([file, module]) => {
    // 匹配到对应其父级路由的子路由
    if (file.includes(route.name as string)) {
      //console.log(file, route.name); // ../views/admin/User.vue和admin, ../views/member/Menber.vue和member 等...
      // 生成子路由
      const chRoute = getRoutes(file, module as VueComponent);
      childrenRoute.push(chRoute);
    }
  });
  return childrenRoute;
}
function getRoutes(file: string, module: VueComponent) {
  // const name = file.split("/").pop()?.split(".")[0].toLowerCase();
  const typedModule = module as VueComponent;
  const reg = /.+layouts\/|.+views\/|\.vue/gi;
  const name = file.replace(reg, '').toLowerCase();
  const route = {
    path: `/${name}`,
    name: name.replace('/', '-'),
    component: typedModule.default
  } as RouteRecordRaw;

  // 页面自定义路由规则
  return Object.assign(route, typedModule.default?.route);
}
const route = env.VITE_ROUTE_AUTOLOAD ? autoRoutes : ([] as RouteRecordRaw[]);
export default route;
