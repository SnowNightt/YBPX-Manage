<template>
  <div class="message" v-show="menuStore.messageShow" v-message>
    <el-tabs v-model="activeName" class="demo-tabs" @click.stop>
      <el-tab-pane label="系统通知" name="first">
        <a href="javascript:;" class="sys-msg"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, eaque?</a
        >
        <a href="javascript:;" class="sys-msg"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, eaque?</a
        >
        <a href="javascript:;" class="sys-msg"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, eaque?</a
        >
      </el-tab-pane>
      <el-tab-pane label="站内通知" name="second">站内通知</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useMenuStore from '@/store/menuStore';
import vMessage from '@/directives/vMessage';
const menuStore = useMenuStore();
const activeName = ref('first');
</script>
<style scoped lang="scss">
.message {
  @apply absolute bg-gray-100 -left-[200px] w-[300px] top-[40px] px-4 py-3 rounded-sm;

  .sys-msg {
    @apply truncate block border-b mb-2 pb-1 hover:text-[#da77f2];
  }
}
</style>
