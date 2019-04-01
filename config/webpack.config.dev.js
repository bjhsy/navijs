const config = require("./webpack.config.base");
const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path");

module.exports = merge(config, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  output: {
    path: path.join(process.cwd(), "/build"),
    filename: "[name].js"
  }
});
