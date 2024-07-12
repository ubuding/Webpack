import { merge } from "webpack-merge";
import common from "./webpack.common";
import development from "./webpack.dev";
import production from "./webpack.prod";
import { type ENV } from "./typescript";

export default (env: ENV) => {
  switch (true) {
    case env.development:
      return merge(common(env), development as any);

    case env.production:
      return merge(common(env), production as any);

    default:
      return new Error("无该配置项文件!");
  }
};
