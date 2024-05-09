import _ from "lodash";
class helper {
  public env: Record<string, any>;
  constructor() {
    this.env = this.getEnv();
  }
  private getEnv(): ImportMetaEnv {
    const envs: ImportMetaEnv = _.cloneDeep(import.meta.env);
    Object.entries(envs).forEach(([key, value]) => {
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
}
const help = new helper();
const env = help.env;
export default help;
export { env };
