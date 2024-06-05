<template>
  <div class="admin w-screen h-screen flex">
    <Menu />
    <div class="content flex-1 bg-[#e9ecef]">
      <i class="fab fa-accessible-icon"></i>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from './admin/Menu.vue';
</script>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  // 设置该路由下的子路由都需要登录验证
  route: { meta: { auth: true } }
});
</script>
