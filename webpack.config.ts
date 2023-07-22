import path from "path";
import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "dist"),
  html: path.resolve(__dirname, "public", "index.html"),
};

export default (env: BuildEnv) => {
  const mode = env.mode || "development";
  const isDev = mode === "development";

  const PORT = env.port || 3000;

  const config: webpack.Configuration = buildWebpackConfig({
    paths,
    mode,
    port: PORT,
    isDev,
  });

  return config;
};
