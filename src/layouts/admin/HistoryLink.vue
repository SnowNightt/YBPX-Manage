<template>
  <div class="history-link grid grid-flow-col gap-2 w-[400px] my-4 px-4">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="bg-white rounded-md h-8 flex justify-center items-center text-gray-700"
      >{{ item.title }} <i class="fas fa-xmark text-sm cursor-pointer ml-2 hover:text-gray-300"></i
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const titles = ref([
  { title: '编辑器' },
  { title: '编辑器' },
  { title: '编辑器' },
  { title: '编辑器' }
]);
</script>
