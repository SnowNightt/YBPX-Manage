<template>
  <div class="nav-bar w-full h-14 flex justify-between bg-[#ced4da] px-4">
    <el-breadcrumb separator="/" class="flex items-center">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>个人中心</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="avatar flex items-center relative cursor-pointer group">
      <img
        src="../../../public/img/5.png"
        alt="网络问题"
        class="w-[40px] h-[40px] rounded-full object-cover mr-2"
      />
      <span class="text-sm text-gray-600">夜半飘雪</span>
      <section
        class="group-hover:block group-ho down-bar absolute top-[56px] left-[-25px] bg-[#dee2e6] w-24 rounded-sm p-2 hidden"
      >
        <div class="cmenu flex justify-center items-center mb-2">
          <i class="fab fa-accessible-icon mr-1 text-gray-800"></i>
          <span class="text-sm text-gray-500 hover:text-gray-800">个人中心</span>
        </div>

        <div class="cmenu flex justify-center items-center mb-2">
          <i class="fab fa-accessible-icon mr-1 text-gray-800"></i>
          <span class="text-sm text-gray-500 hover:text-gray-800">退出登录</span>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
