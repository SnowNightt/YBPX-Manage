interface ViteEnv {
  VITE_API_URL: string;
  VITE_ROUTE_AUTOLOAD: boolean;
  VITE_SOME_KEY: number;
}
interface ImportMetaEnv extends ViteEnv{}
