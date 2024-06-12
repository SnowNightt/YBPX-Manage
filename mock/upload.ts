// test.ts
import { MockMethod } from 'vite-plugin-mock';
export default [
  {
    url: '/api/upload/image',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: '图片上传成功',
        type: 'success',
        data: {
          url: '../../../public/img/5.png'
        }
      };
    }
  }
] as MockMethod[];
