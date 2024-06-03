<template>
  <div class="verify">
    <form @submit="onSubmit">
      <div>
        <input type="text" v-model="useremailEmailVal" />
        <h2>{{ errors.useremail }}</h2>
      </div>
      <div>
        <input type="text" v-model="passwordVal" />
        <h2>{{ errors.password }}</h2>
      </div>
      <button class="border-2">提交</button>
    </form>
  </div>
</template>

<script setup lang="ts">
// import { defineRule, configure, useField, useForm } from 'vee-validate';
// import { required, email } from '@vee-validate/rules';
// import { localize } from '@vee-validate/i18n';
// import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json';
// import * as yup from 'yup';
// defineRule('email', email);
// defineRule('required', required);
// configure({
//   generateMessage: localize('zh_CN', zh_CN)
// });
import validate from '@/plugins/validate';
//       处理函数      各表单错误信息集合
const { handleSubmit, errors } = validate.useForm({
  // 集中定义各表单规则
  // 设置初始值
  initialValues: {
    useremail: '2222222@qq.com', // 设置name为useremail的input的初始值
    password: ''
  },
  // 设置验证字段
  validationSchema: {
    useremail: validate.yup.string().required().email().label('邮箱'), // 设置name为useremail的input的验证规则
    password: { required: true }
  }
});
// 解构出来并取别名
const { value: useremailEmailVal } = validate.useField(
  'useremail', // input的name
  {},
  { label: '邮箱xxxxx' }
);
const { value: passwordVal } = validate.useField(
  'password', // input的name
  {},
  { label: '密码' }
);
// 表单提交时触发,当通过handleSubmit函数的验证时，才触发里面的回调函数，没有handleSubmit的话，提交表单时不会触发验证，直接调用验证成功函数
const onSubmit = handleSubmit((_values: { useremail: string; password: string }) => {
  // console.log(values);
  alert('success');
});
</script>
<style scoped lang="scss">
.verify {
  @apply flex justify-center items-center;

  input {
    @apply border-2 border-[#b197fc] focus:border-[#5f3dc4] outline-none;
  }
}
</style>
