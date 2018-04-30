const path = require("path");
const merge = require("webpack-merge");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const MODE = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, "src/js/app.js"),
  build: path.join(__dirname, "build"),
  style: path.join(__dirname, "src/css/styles.css")
};

const commonConfig = {
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
  }
};

if (MODE === "build") {
  module.exports = merge(commonConfig, {
    plugins: [new CleanWebpackPlugin(PATHS.build), new HtmlWebpackPlugin()]
  });
}

if (MODE === "start") {
  module.exports = merge(commonConfig, {
    devServer: {
      contentBase: path.join(__dirname, "build")
    }
  });
}
