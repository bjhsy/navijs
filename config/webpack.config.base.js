"use strict";
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
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
