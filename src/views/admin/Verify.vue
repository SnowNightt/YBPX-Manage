<template>
  <div class="verify">
    <Form @submit="onSubmit">
      <Field
        label="邮箱"
        name="email"
        :rules="{ required: true, email: true }"
        #default="{ field, errorMessage }"
      >
        <input v-bind="field" v-model="fieldEmail" />
        <br />
        {{ errorMessage }}
      </Field>
      <br />
      <button class="border-2">提交</button>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { Form, Field, defineRule, configure } from 'vee-validate';
import { required, email } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';
import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json';
import { ref } from 'vue';
defineRule('email', email);
defineRule('required', required);
configure({
  generateMessage: localize('zh_CN', zh_CN)
});
const fieldEmail = ref('');
// 表单验证规则
// const validateEmail = (value: string) => {
//   console.log(value);
//   return /@/.test(value) ? true : '邮箱错误';
// };
// 提交表单触发事件
/**
 *
 * @param values Form组件下所有表单的数据集，当表单都验证成功才会触发该事件
 */
const onSubmit = (values: any) => {
  console.log(values);
  alert('success');
};
</script>
<style scoped lang="scss">
.verify {
  @apply flex justify-center items-center;

  input {
    @apply border-2 border-[#b197fc] focus:border-[#5f3dc4] outline-none;
  }
}
</style>
