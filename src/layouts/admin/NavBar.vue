<template>
  <div class="nav-bar w-full h-14 flex justify-between bg-[#ced4da] px-4 relative">
    <div class="flex items-center">
      <div class="arrow mr-3 cursor-pointer" @click="menuStroe.setStatus">
        <i class="fas fa-arrow-right-arrow-left"></i>
      </div>
      <BreadCrumb />
    </div>

    <div class="cursor-pointer flex items-center">
      <div class="message mr-3 relative">
        <i class="fas fa-bell" @click.stop="menuStroe.handleMessageShow"></i>
        <Message />
      </div>
      <div class="full-screen mr-3 cursor-pointer hidden md:block" @click="setFullScreen">
        <i class="fas fa-expand"></i>
      </div>
      <div class="relative group h-full flex items-center">
        <div class="avatar flex items-center">
          <img
            :src="userStore.info?.avatar"
            alt="网络问题"
            class="w-[40px] h-[40px] rounded-full object-cover mr-2"
          />
          <span class="text-sm text-gray-600">{{ userStore.info?.name }}</span>
        </div>

        <section
          class="group-hover:block down-bar absolute top-[56px] left-[-25px] bg-[#dee2e6] w-24 rounded-sm p-2 hidden z-10"
        >
          <div class="cmenu flex justify-center items-center mb-2">
            <i class="fab fa-accessible-icon mr-1 text-gray-800"></i>
            <span class="text-sm text-gray-500 hover:text-gray-800">个人中心</span>
          </div>

          <div class="cmenu flex justify-center items-center mb-2" @click="userLogout">
            <i class="fab fa-accessible-icon mr-1 text-gray-800"></i>
            <span class="text-sm text-gray-500 hover:text-gray-800">退出登录</span>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CacheEnum } from '@/enum/cacheEnum';
import useUserStore from '@/store/userStore';
import useMenuStore from '@/store/menuStore';
import { logout } from '@/utils/user';
import Message from '@/components/Message.vue';
import BreadCrumb from '@/components/BreadCrumb.vue';
const userStore = useUserStore();
const menuStroe = useMenuStore();
const userLogout = () => {
  logout(CacheEnum.TOKEN_NAME);
};
// 设置全屏
const setFullScreen = () => {
  if (document.fullscreenElement) {
    return document.exitFullscreen();
  }
  document.documentElement.requestFullscreen();
};
</script>
