const config = require("./webpack.config.base");
const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path");

module.exports = merge(config, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    path: path.join(process.cwd(), "/build"),
    filename: "main.js"
  }
});
