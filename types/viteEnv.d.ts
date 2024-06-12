interface ViteEnv {
  VITE_API_URL: string;
  VITE_ROUTE_AUTOLOAD: boolean;
  VITE_SOME_KEY: number;
  VITE_UPLOAD_IMAGE_SERVE: string;
}
interface ImportMetaEnv extends ViteEnv {}
