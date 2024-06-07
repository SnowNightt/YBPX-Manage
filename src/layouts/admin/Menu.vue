<template>
  <div class="menu w-[200px] bg-[#495057]">
    <!-- logo -->
    <div class="logo pl-2 mt-3 flex items-center">
      <img class="logo-img" src="../../../public/img/5.png" alt="网络错误" />
      <span class="text-[#f1f3f5] text-lg font-bold">后台管理系统</span>
    </div>
    <!-- 菜单 -->
    <div class="menu-list mt-5">
      <div>
        <dl class="menu-item mt-5 px-4" v-for="(item, index) of routerStore.routes" :key="index">
          <dt
            @click="handleMenu(item)"
            class="item-title text-xl text-[#e9ecef] pl-6 flex justify-between"
            >{{ item.meta.menu?.title }}
            <i
              class="fas fa-angle-down text-sm duration-500 origin-center flex items-center"
              :class="{ 'rotate-180': item.meta.menu?.isClick }"
            ></i
          ></dt>
          <transition name="menu">
            <div v-if="item.meta.menu?.isClick">
              <dd
                class="item-content"
                @click="handleMenu(item, it)"
                :class="{ active: it.meta?.menu?.isClick }"
                v-for="(it, index) of item.children"
                :key="index"
                >{{ it.meta?.menu?.title }}</dd
              >
            </div>
          </transition>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useRouterStore from '@/store/router';
import { IMenu, RouteRecordNormalized, RouteRecordRaw } from 'vue-router';
// interface IMenuItem {
//   title: string;
//   active?: boolean;
// }
// interface IMenu extends IMenuItem {
//   children?: IMenuItem[];
// }
// const menu = ref<IMenu[]>([
//   {
//     title: '菜单一',
//     active: true,
//     children: [{ title: '选项1', active: true }, { title: '选项1' }, { title: '选项1' }]
//   },
//   {
//     title: '菜单二',
//     active: false,
//     children: [{ title: '选项2' }, { title: '选项2' }, { title: '选项2' }]
//   }
// ]);
const routerStore = useRouterStore();
// 重置菜单
const resetMenu = () => {
  routerStore.routes.forEach((item) => {
    (item.meta.menu as IMenu).isClick = false;
    item.children?.forEach((it) => {
      (it.meta?.menu as IMenu).isClick = false;
    });
  });
};
// 处理菜单点击事件
const handleMenu = (pmenu: RouteRecordNormalized, cmenu?: RouteRecordRaw) => {
  //   resetMenu();
  //   点击的是一级菜单且当前一级菜单是打开状态
  if (!cmenu && pmenu.meta.menu?.isClick) {
    pmenu.meta.menu.isClick = false;
  } else {
    (pmenu.meta.menu as IMenu).isClick = true;
  }
  // 点击的是子菜单
  if (cmenu) {
    resetMenu();
    (pmenu.meta.menu as IMenu).isClick = true;
    (cmenu.meta?.menu as IMenu).isClick = true;
  }
};
// 处理子菜单点击事件
// const handleItem = (item: IMenuItem, pitem: IMenuItem) => {
//   resetMenu();
//   pitem.active = true;
//   item.active = true;
// };
</script>

<style scoped lang="scss">
.menu-enter-active,
.menu-leave-active {
  transition:
    opacity 0.3s,
    transform 0.3s;
}

.menu-enter,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.menu {
  .logo {
    .logo-img {
      @apply w-[50px] h-[50px] rounded-full object-cover mr-1;
    }
  }

  .menu-list {
    .menu-item {
      .item-content {
        @apply h-[40px] leading-[40px] pl-10 text-base text-[#e9ecef] mt-2 hover:bg-[#4dabf7] cursor-pointer duration-300 rounded-md;

        &.active {
          @apply bg-[#339af0];
        }
      }
    }
  }
}
</style>
