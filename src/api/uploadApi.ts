import { http } from '@/plugins/axios';
interface IuploadImage {
  url: string;
}

async function uploadImage(data: FormData) {
  return http.request<IuploadImage>({
    url: '/upload/image',
    method: 'post',
    data
  });
}
export { uploadImage };
