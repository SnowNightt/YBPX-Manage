<template>
  <div>
    <el-breadcrumb separator="/" class="flex items-center">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in matchRoute" :key="index">{{
        item.meta.menu?.title
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouteLocationMatched, useRoute } from 'vue-router';
// 匹配的路由
const matchRoute = ref<RouteLocationMatched[]>();
const route = useRoute();
watch(
  route,
  () => {
    console.log(route);
    matchRoute.value = route.matched;
  },
  { immediate: true }
);
</script>
