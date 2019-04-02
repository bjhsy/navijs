"use strict";
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.tsx"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.js$/,
        loader: "source-map-loader",
        enforce: "pre"
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: ["file-loader"]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [new TsconfigPathsPlugin()]
};
