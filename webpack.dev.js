const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

//Plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  //OUTPUT XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",
  //RULES XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  module: {
    rules: [
      //Rules for assets
      {
        test: /\.(jpe?g|svg|gif|png)$/i,
        use: [
          //Requires assets and resolves paths
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: "[name].[hash].[ext]",
              outputPath: "assets",
              publicPath: "assets",
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
  //PLUGINS XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
  ],
});
