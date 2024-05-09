import Axios from "./Axios";
const config = {
  baseURL: "/api",
  timeout: 10000,
  headers: {},
};
const http = new Axios(config);
export { http };
