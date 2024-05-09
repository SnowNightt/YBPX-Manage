import { http } from "@/plugins/axios";

interface User{
    name:string
}
async function getUser() {
  return http.request<User>({
    url: "/user",
    method: "get",
  });
}
export { getUser };
