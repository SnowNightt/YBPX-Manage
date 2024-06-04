// 设置登录获取的token的过期时间
/**
 * expire:token保存的时长，单位：秒
 */
interface IData {
  expire?: number;
  [key: string]: any;
}
const localStore = {
  set(key: string, data: IData): void {
    if (data.expire) {
      data.expire = new Date().getTime() + data.expire * 1000; // 将时长转为毫秒
    }
    localStorage.setItem(key, JSON.stringify(data));
  },
  get(key: string): null | IData {
    const item = localStorage.getItem(key);
    if (item) {
      const data = JSON.parse(item);
      if (data?.expire < new Date().getTime()) {
        localStorage.removeItem(key);
        return null;
      }
      return data;
    }
    return null;
  }
};
export default localStore;
