const path = require("path");
const merge = require("webpack-merge");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const MODE = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, "src/js/app.js"),
  build: path.join(__dirname, "build"),
  style: path.join(__dirname, "src/css/styles.css")
};

module.exports = {
  entry: {
    app: ["babel-polyfill", PATHS.app]
  },
  output: {
    path: PATHS.build,
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [new CleanWebpackPlugin(["build"])]
};
