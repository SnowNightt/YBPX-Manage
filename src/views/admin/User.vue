<template>
  <div class="user px-4">
    <div class="cards grid grid-flow-col gap-2">
      <el-card
        shadow="always"
        :body-style="{ padding: '20px' }"
        v-for="(item, index) in data"
        :key="index"
      >
        <template #header>
          <div class="flex justify-between">
            <span>{{ item.title }}</span>
            <el-tag type="danger" effect="dark"> {{ item.titleTag }} </el-tag>
          </div>
        </template>
        <!-- card body -->
        <section class="flex justify-between">
          <div> {{ item.bodyText }} </div>
          <i class="fas fa-star text-[24px] text-yellow-500"></i>
        </section>
        <template #footer>
          <section class="flex justify-between">
            <div>{{ item.footetText }}</div>
            <div>{{ item.footerValue }}</div>
          </section>
        </template>
      </el-card>
    </div>

    <div class="echarts grid grid-cols-2 gap-2 mt-[50px]">
      <el-card shadow="always" :body-style="{ padding: '20px' }">
        <template #header>
          <div>
            <span class="font-bold text-lg">用户统计</span>
          </div>
        </template>
        <div id="echarts1" class="h-[400px] w-full"></div>
      </el-card>
      <el-card shadow="always" :body-style="{ padding: '20px' }">
        <template #header>
          <div>
            <span class="font-bold text-lg">用户活跃度</span>
          </div>
        </template>
        <div id="echarts2" class="h-[400px] w-full"></div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue';
import { echarts1, echarts2 } from './echarts';
import * as echarts from 'echarts';
interface ICardData {
  title: string;
  titleTag: string;
  bodyText: string;
  footetText: string;
  footerValue: string;
}
const data = ref<ICardData[]>([
  {
    title: '用户数',
    titleTag: '月',
    bodyText: '114514',
    footetText: '用人数',
    footerValue: '114514'
  },
  {
    title: '用户数',
    titleTag: '月',
    bodyText: '114514',
    footetText: '用人数',
    footerValue: '114514'
  },
  {
    title: '用户数',
    titleTag: '月',
    bodyText: '114514',
    footetText: '用人数',
    footerValue: '114514'
  },
  {
    title: '用户数',
    titleTag: '月',
    bodyText: '114514',
    footetText: '用人数',
    footerValue: '114514'
  }
]);
nextTick(() => {
  echarts.init(document.getElementById('echarts1')).setOption(echarts1);
  echarts.init(document.getElementById('echarts2')).setOption(echarts2);
});
</script>
<!-- <script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  route: { path: '/user' }
});
</script> -->
