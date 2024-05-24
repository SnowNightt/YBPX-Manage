<template>
  <div class="verify">
    <input type="text" class="" />
  </div>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss">
.verify {
  @apply w-screen h-screen flex justify-center items-center;

  input {
    @apply border-2 border-[#b197fc] focus:border-[#5f3dc4] outline-none;
  }
}
</style>
