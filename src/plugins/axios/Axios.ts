import router from '@/router/index.ts';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { CacheEnum } from '@/enum/cacheEnum';
import localStore from '@/utils/localStore';
class Axios {
  private instance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors();
  }
  private interceptors() {
    this.interceptorsRequest();
    this.interceptorsResponse();
  }
  public request<T, D = ResponseResult<T>>(config: AxiosRequestConfig): Promise<D> {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await this.instance.request<D>(config);
        resolve(res.data);
      } catch (error) {
        reject(error);
      }
    });
  }
  private interceptorsRequest() {
    // 添加请求拦截器
    this.instance.interceptors.request.use(
      function (config) {
        // 动态设置请求头携带token
        // 退出登录的话没有token
        if (JSON.parse(localStorage.getItem(CacheEnum.TOKEN_NAME)!)) {
          config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem(CacheEnum.TOKEN_NAME)!)[CacheEnum.TOKEN_NAME]}`;
        }
        config.headers.Accept = 'application/json';

        // config.headers = {
        //   Authorization: `Bearer ${JSON.parse(localStorage.getItem(CacheEnum.TOKEN_NAME)!)[CacheEnum.TOKEN_NAME]}`
        // } as AxiosRequestHeaders;
        // 在发送请求之前做些什么
        return config;
      },
      function (error) {
        // 对请求错误做些什么
        // 根据响应状态码执行不同操作
        switch (error.response.status) {
          case 401:
            localStore.remove(CacheEnum.TOKEN_NAME);
            router.push({ name: 'login' });
        }
        return Promise.reject(error);
      }
    );
  }
  private interceptorsResponse() {
    // 添加响应拦截器
    this.instance.interceptors.response.use(
      function (response) {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        return response;
      },
      function (error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        return Promise.reject(error);
      }
    );
  }
}
export default Axios;
