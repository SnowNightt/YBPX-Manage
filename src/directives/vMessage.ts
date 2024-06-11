import menu from '@/store/menuStore';
// 自定义指令，控制点击空白时系统消息组件隐藏
const vMessage = {
  mounted(_el: HTMLElement) {
    document.documentElement.addEventListener('click', () => {
      menu().messageShow = false;
    });
  }
};
export default vMessage;
