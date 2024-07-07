import { IUserInfo, getUserInfo } from '@/api/userApi';
import { defineStore } from 'pinia';
import { ref } from 'vue';
const useUserStore = defineStore('user', () => {
  // 用户信息
  const info = ref<null | IUserInfo>();
  const getInfo = async () => {
    if (localStorage.getItem('token')) {
      const { data } = await getUserInfo();
      info.value = data;
    }
  };
  return {
    info,
    getInfo
  };
});
export default useUserStore;
