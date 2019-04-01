"use strict";
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  entry: {
    main: "./lib/index.tsx"
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /\.(jpg|png|svg)$/, loader: ["file-loader"] },
      {
        test: /\.css$/,
        use: [
          //   {
          //     loader: MiniCssExtractPlugin.loader,
          //     options: {
          //       publicPath: "../../"
          //     }
          //   },
          "css-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [
    new TsconfigPathsPlugin({
      /*configFile: "./path/to/tsconfig.json" */
    })
  ]
};
