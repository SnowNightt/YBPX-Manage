import { http } from '@/plugins/axios';
export interface IUserInfo {
  name: string;
  avatar: string;
}
interface LoginToken {
  token: string;
}
interface LoginData {
  account: string;
  password: string;
}
async function getLogin(data: LoginData) {
  return http.request<LoginToken>({
    url: '/login',
    method: 'post',
    data
  });
}
async function getUserInfo() {
  return http.request<IUserInfo>({
    url: '/user/info',
    method: 'get'
  });
}
export { getLogin, getUserInfo };
