const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = function(PATHS) {
  return {
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
        },
        {
          test: /\.(html)$/,
          use: [
            "file-loader?name=[path][name].[ext]!extract-loader!html-loader"
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(PATHS.build, {
        root: process.cwd()
      }),
      new ExtractTextPlugin("styles.css"),
      new webpack.optimize.AggressiveMergingPlugin(),
      new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  };
};
