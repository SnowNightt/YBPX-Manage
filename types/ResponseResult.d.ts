interface ResponseResult<T> {
  code: number;
  message: string;
  type: string;
  data: T;
}
