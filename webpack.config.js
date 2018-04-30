const path = require("path");
const merge = require("webpack-merge");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

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
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      title: "Nomflix"
    })
  ]
};

if (MODE === "build") {
  module.exports = merge(commonConfig, {
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
        })
      ]
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                options: {
                  minimize: true
                }
              },
              { loader: "postcss-loader" }
            ]
          })
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(PATHS.build),
      new ExtractTextPlugin("styles.css")
    ]
  });
}

if (MODE === "start") {
  module.exports = merge(commonConfig, {
    devtool: "eval-source-map",
    devServer: {
      contentBase: path.join(__dirname, "build"),
      hot: true,
      inline: true,
      progress: true,
      port: 8000
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader",
              options: {
                importLoaders: 1
              }
            },
            {
              loader: "postcss-loader"
            }
          ]
        }
      ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
  });
}
