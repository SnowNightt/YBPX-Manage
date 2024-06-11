<template>
  <div class="admin w-screen min-h-screen md:grid md:grid-cols-[auto_1fr]">
    <Menu />
    <div class="content bg-[#e9ecef] grid grid-rows-[auto_1fr]">
      <div>
        <NavBar />
        <HistoryLink />
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import HistoryLink from './admin/HistoryLink.vue';
import Menu from './admin/Menu.vue';
import NavBar from './admin/NavBar.vue';
import useMenuStore from '@/store/menuStore';
const menuStore = useMenuStore();
const route = useRoute();
// 设置面包屑
menuStore.addHistoryMenu(route);
</script>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  // 设置该路由下的子路由都需要登录验证
  route: { meta: { auth: true } }
});
</script>
