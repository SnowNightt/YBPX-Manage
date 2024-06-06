<template>
  <div class="admin w-screen min-h-screen flex">
    <Menu />
    <div class="content flex-1 bg-[#e9ecef]">
      <NavBar />
      <HistoryLink />
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HistoryLink from './admin/HistoryLink.vue';
import Menu from './admin/Menu.vue';
import NavBar from './admin/NavBar.vue';
</script>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  // 设置该路由下的子路由都需要登录验证
  route: { meta: { auth: true } }
});
</script>
