<template>
  <div class="home-container w-screen h-screen bg-[#f3d9fa]">
    <div class="push-btn">
      <router-link
        :to="{ name: 'admin.user' }"
        class="w-full h-full flex items-center justify-center"
        >进入</router-link
      >
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  route: { name: 'home' }
});
</script>
<style scoped lang="scss">
.push-btn {
  @apply w-72 h-14 text-lg font-bold text-white/90 bg-gradient-to-r from-[#ce9ffc] to-[#8b68f7] border-none rounded-2xl;
}
</style>
