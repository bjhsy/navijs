const config = require("./webpack.config.base");
const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path");
const ClearWebpackPlugin = require("clean-webpack-plugin");

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production")
    }
  })
  // new ClearWebpackPlugin(["build"], { root: path.resolve(__dirname, "../") })
]);

module.exports = merge(config, {
  mode: "production",
  output: {
    path: path.join(process.cwd(), "/build"),
    filename: "[name].js"
  },
  devtool: false
});
