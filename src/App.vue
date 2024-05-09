<script setup lang="ts">
import { env } from './types/helper';
import { getUser } from './api/userApi';
import { onMounted } from 'vue';
onMounted(async () => {
  const res = await getUser()
  console.log(res.data);
})


console.log(env);

</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
