<template>
  <div class="history-link w-full my-4 px-4 hidden md:block">
    <div class="flex">
      <div
        v-for="(item, index) in menuStore.historyMenu"
        :key="index"
        class="bg-white rounded-md h-9 flex justify-center items-center text-gray-700 mr-4 p-2"
        :class="{ active: $route.name == item.routeName }"
        ><router-link :to="{ name: item.routeName }" class="">{{ item.title }}</router-link>
        <i
          class="fas fa-xmark text-sm cursor-pointer ml-2 hover:text-gray-300 hover:rotate-180 duration-500"
          @click="menuStore.removeHistoryMenu(item, $route)"
        ></i
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useMenuStore from '@/store/menuStore';
const menuStore = useMenuStore();
</script>
<style scoped lang="scss">
.active {
  @apply bg-[#7048e8] text-[#f1f3f5];
}
</style>
