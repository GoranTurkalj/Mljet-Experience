const path = require("path");
const common = require("./webpack.common");
const AppManifestWebpackPlugin = require('app-manifest-webpack-plugin') 
const { merge } = require("webpack-merge");

//Plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  //OUTPUT XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  output: {
    filename: "[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
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
          //Optimize image size
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: { progressive: true },
              optipng: { enabled: true },
            },
          },
        ],
      },
      //Rules for SCSS
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      //BABEL LOADER - TRANSPILING TO OLDER JS FOR PRODUCTION XXXXXXXXXXXXXXXXXXXXXXXX
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },
  //PLUGINS XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: { removeAttributeQuotes: true },
    }),
     new AppManifestWebpackPlugin({
    logo: './my-logo.png',
    inject: true,
    config: {
      appName: "Mljet Experience",
      icons: {
        android: false, 
        appleIcon: false, 
        coast: false, 
        yandex: false, 
        appleStartup: false, 
        windows: false,
        firefox: false,
        favicons: true, 
      }
    }
  }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
  ],
});
