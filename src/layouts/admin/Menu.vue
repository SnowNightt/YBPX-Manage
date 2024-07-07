<template>
  <div class="admin-menu min-h-screen" :class="{ close: menuStore.isClose }">
    <div class="menu bg-[#495057] py-2 px-4 h-full">
      <!-- logo -->
      <div class="logo mt-3 flex items-center">
        <img class="logo-img" src="../../../public/img/5.png" alt="网络错误" />
        <span class="text-[#f1f3f5] text-lg font-bold">后台管理系统</span>
      </div>
      <!-- 菜单 -->
      <div class="menu-list mt-5">
        <div>
          <dl class="menu-item mt-5 px-4">
            <dt
              class="item-title text-xl text-[#e9ecef] cursor-pointer flex items-center h-[28px]"
              :class="{ active: ($route.name as string) == 'admin.user' }"
            >
              <i class="fas fa-house-user text-sm"></i>
              <span class="ml-5">个人首页</span>
            </dt>
          </dl>
          <TransitionGroup name="list">
            <dl class="menu-item mt-5 px-1" v-for="(item, index) of menu.menus.value" :key="index">
              <dt
                @click="handleMenu(item)"
                class="item-title text-xl text-[#e9ecef] pl-4 flex items-center justify-between cursor-pointer h-[28px]"
              >
                <i class="fas fa-bars text-sm"></i>
                <span>{{ item.meta.menu?.title }}</span>
                <i
                  class="down-arrow fas fa-angle-down text-sm duration-500 origin-center flex items-center"
                  :class="{ 'rotate-180': item.meta.menu?.isClick }"
                ></i
              ></dt>
              <dd v-show="item.meta.menu?.isClick && !menuStore.isClose">
                <div
                  class="item-content"
                  @click="handleMenu(item, it)"
                  :class="{ active: it.meta?.menu?.isClick }"
                  v-for="(it, index) of item.children"
                  :key="index"
                >
                  <i class="fas fa-italic text-sm mr-3"></i>
                  <span class="menu-text">{{ it.meta?.menu?.title }}</span></div
                >
              </dd>
            </dl>
          </TransitionGroup>
        </div>
      </div>
    </div>
    <div class="mask md:hidden" @click="menuStore.setStatus"></div>
  </div>
</template>

<script setup lang="ts">
import useMenuStore from '@/store/menuStore';
import { IMenu, RouteRecordNormalized, RouteRecordRaw, useRoute, useRouter } from 'vue-router';
import MenuSerive from '@/composables/menu.ts';
import { watch } from 'vue';
const router = useRouter();
const route = useRoute();
const menu = new MenuSerive(router);
const menuStore = useMenuStore();
// 监听路由变化，设置子菜单点击状态
watch(route, () => menu.setCurrentMenu(route), { immediate: true });
// 处理菜单点击事件
const handleMenu = (pmenu: RouteRecordNormalized, cmenu?: RouteRecordRaw) => {
  //   点击的是一级菜单且当前一级菜单是打开状态
  if (!cmenu && pmenu.meta.menu?.isClick) {
    pmenu.meta.menu.isClick = false;
  } else {
    (pmenu.meta.menu as IMenu).isClick = true;
  }
  // 点击的是子菜单
  if (cmenu) {
    router.push({ name: cmenu.name as string });
    // 添加面包屑
    menuStore.addHistoryMenu(cmenu);
  }
};
</script>

<style scoped lang="scss">
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.15s linear;
}

.list-leave-active {
  position: absolute;
}

.admin-menu {
  .menu {
    .logo {
      .logo-img {
        @apply w-[50px] h-[50px] rounded-full object-cover mr-1;
      }
    }

    .menu-list {
      .menu-item {
        .item-content {
          @apply h-[40px] w-[130px] leading-[40px] ml-6 pl-3 text-base text-[#e9ecef] mt-2 hover:bg-[#4dabf7] cursor-pointer duration-300 rounded-md;

          &.active {
            @apply bg-[#339af0];
          }
        }
      }
    }
  }
}

@media screen and (width >= 768px) {
  .admin-menu {
    &.close {
      span {
        display: none;
      }

      .down-arrow {
        display: none;
      }

      i {
        font-size: 18px;
      }

      dl {
        position: relative;

        &:hover {
          dd {
            position: absolute;
            top: 0;
            left: 100%;
            z-index: 999;
            display: block !important;
            width: 190px;
            padding: 2px 10px 10px;
            padding-left: 20px !important;
            background-color: #495057;
            border-radius: 10px;

            .item-content {
              box-sizing: border-box;
              margin: 8px auto 0 !important;
            }

            .menu-text {
              display: inline;
            }
          }
        }
      }
    }
  }
}

@media screen and (width <= 768px) {
  .admin-menu {
    @apply absolute;

    &.close {
      @apply hidden;
    }

    .mask {
      @apply absolute w-screen h-screen bg-gray-100 opacity-70 top-0 left-0 z-20;
    }

    .menu {
      @apply z-50 absolute top-0 left-0 w-[200px] bg-[#495057];
    }
  }
}
</style>
