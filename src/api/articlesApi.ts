import { http } from '@/plugins/axios';
interface IArticles {
  id: number;
  title: string;
  content: string;
}

async function getArticles() {
  return http.request<IArticles[]>({
    url: '/articles',
    method: 'get'
  });
}
export { getArticles };
