<template>
  <div> ss</div>
</template>

<script setup lang="ts">
import { getArticles } from '@/api/articlesApi';

const res = await getArticles();
console.log(res);
</script>
