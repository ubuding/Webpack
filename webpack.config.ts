import webpack from "./.webpack/index";
import { type ENV } from "./.webpack/typescript";

export default (env: ENV) => webpack(env);
