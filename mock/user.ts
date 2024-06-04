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
  }
] as MockMethod[];
