<template>
  <div class="pl-4">
    <MarkdownEditor v-model="valueHtml" :placeholder="placeholder" />
  </div>
</template>

<script setup lang="ts">
import MarkdownEditor from '@/components/editor/MarkdownEditor.vue';
import { ref } from 'vue';
const valueHtml = ref<string>('haha');
const placeholder = ref('请输入内容...');
</script>
