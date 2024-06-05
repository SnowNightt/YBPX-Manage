<template>
  <div class="menu w-[200px] bg-[#495057]">
    <!-- logo -->
    <div class="logo pl-2 mt-3 flex items-center">
      <img class="logo-img" src="../../../public/img/5.png" alt="网络错误" />
      <span class="text-[#f1f3f5] text-lg font-bold">后台管理系统</span>
    </div>
    <!-- 菜单 -->
    <div class="menu-list mt-5">
      <dl class="menu-item mt-5 px-4" v-for="(item, index) of menu" :key="index">
        <dt
          @click="handleMenu(item)"
          class="item-title text-xl text-[#e9ecef] pl-6 flex justify-between"
          >{{ item.title }} <i class="fas fa-angle-down text-sm"></i
        ></dt>
        <dd
          class="item-content"
          @click="handleMenu(item, it)"
          :class="{ active: it.active }"
          v-show="item.active"
          v-for="(it, index) of item.children"
          :key="index"
          >{{ it.title }}</dd
        >
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
interface IMenuItem {
  title: string;
  active?: boolean;
}
interface IMenu extends IMenuItem {
  children?: IMenuItem[];
}
const menu = ref<IMenu[]>([
  {
    title: '菜单一',
    active: true,
    children: [{ title: '选项1', active: true }, { title: '选项1' }, { title: '选项1' }]
  },
  {
    title: '菜单二',
    active: false,
    children: [{ title: '选项2' }, { title: '选项2' }, { title: '选项2' }]
  }
]);
// 重置菜单
const resetMenu = () => {
  menu.value.forEach((item) => {
    item.active = false;
    item.children?.forEach((it) => {
      it.active = false;
    });
  });
};
// 处理菜单点击事件
const handleMenu = (pmenu: IMenuItem, cmenu?: IMenuItem) => {
  resetMenu();
  pmenu.active = true;
  if (cmenu) {
    cmenu.active = true;
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
