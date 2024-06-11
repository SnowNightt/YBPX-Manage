// test.ts
import { MockMethod } from 'vite-plugin-mock';
export default [
  {
    url: '/api/login',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: '',
        type: 'success',
        data: {
          token: 'slakghoadslnre'
        }
      };
    }
  },
  {
    url: '/api/user/info',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '',
        type: 'success',
        data: {
          name: 'ybpx',
          avatar: '../../../public/img/5.png',
          permissions: ['markdown_editor']
        }
      };
    }
  }
] as MockMethod[];
