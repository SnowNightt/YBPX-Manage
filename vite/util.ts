import _ from "lodash";
export function handleEnv(env: Record<string, any>): ViteEnv {
  const envs: any = _.cloneDeep(env);
  Object.entries(env).forEach(([key, value]) => {
    if (value == "true" || value == "false") {
      envs[key] = value == "true";
    } else if (/^\d+$/.test(value)) {
      envs[key] = parseInt(value);
    } else if (value == null) {
      envs[key] = null;
    } else if (value == undefined) {
      envs[key] = undefined;
    }
  });
  return envs;
}
