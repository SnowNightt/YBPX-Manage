import { http } from '@/plugins/axios';

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
export { getLogin };
