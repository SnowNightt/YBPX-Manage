import * as validate from 'vee-validate';
import rules from '@vee-validate/rules';
import { loadLocaleFromURL, localize } from '@vee-validate/i18n';
// import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json';
// cdn
loadLocaleFromURL('https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_CN.json');
// 引入ypu，需要的话就用
import yup from './yup';
// 设置中文,要放前面
validate.configure({
  validateOnBlur: true,
  validateOnInput: false,
  // generateMessage: localize('zh_CN', zh_CN)
  generateMessage: localize('zh_CN')
});
// 定义验证规则
// console.log(rules);
Object.keys(rules).forEach((rule) => {
  validate.defineRule(rule, rules[rule]);
});

const module = {
  yup,
  ...validate
};
export default module;
