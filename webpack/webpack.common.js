const path = require("path");
const merge = require("webpack-merge");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const devConfig = require("./webpack.dev");
const prodConfig = require("./webpack.prod");

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const MODE = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, "../src/js/app.js"),
  player: path.join(__dirname, "../src/js/player.js"),
  build: path.join(__dirname, "../build"),
  styles: path.join(__dirname, "../src/css/styles.css")
};

const commonConfig = {
  entry: {
    app: ["babel-polyfill", PATHS.app],
    player: ["babel-polyfill", PATHS.player]
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
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ["url-loader?limit=10000", "img-loader"]
      },
      {
        test: /\.ogv$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../src/index.html"),
      filename: "index.html",
      chunks: ["app"]
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../src/view.html"),
      filename: "view.html",
      chunks: ["player"]
    })
  ]
};

if (MODE === "build") {
  module.exports = merge(commonConfig, prodConfig(PATHS));
} else if (MODE === "start") {
  module.exports = merge(commonConfig, devConfig(PATHS));
}
