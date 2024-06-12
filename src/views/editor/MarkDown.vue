<template>
  <div class="pl-4">
    <MarkdownEditor v-model="valueHtml" :placeholder="placeholder" />
  </div>
</template>

<script setup lang="ts">
import MarkdownEditor from '@/components/editor/MarkdownEditor.vue';
import { onMounted, ref } from 'vue';
const valueHtml = ref<string>();
const placeholder = ref('请输入内容...');
// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>';
  }, 1500);
});
</script>
