const path = require("path");
const webpack = require("webpack");

module.exports = function(PATHS) {
  return {
    devtool: "eval-source-map",
    devServer: {
      contentBase: path.join(__dirname, PATHS.build),
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
  };
};
