const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = function(PATHS) {
  return {
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
      new ExtractTextPlugin(PATHS.styles)
    ]
  };
};
