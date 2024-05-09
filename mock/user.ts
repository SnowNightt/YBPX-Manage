// test.ts

import { MockMethod } from "vite-plugin-mock";
export default [
  {
    url: "/api/user",
    method: "get",
    response: () => {
      return {
        code: 200,
        message:'cg',
        type:'success',
        data: {
          name: "vben",
        },
      };
    },
  },
] as MockMethod[];

