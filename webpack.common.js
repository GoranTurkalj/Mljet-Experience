const webpack = require("webpack");
const autoprefixer = require("autoprefixer");

module.exports = {
  //GENERAL CONFIG XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  entry: {
    main: "./src/scripts/index.js",
    slider: "./src/scripts/slider.js",
  },
  //RULES XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  module: {
    rules: [
      //Rules for HTML
      { test: /\.html$/, use: ["html-loader"] },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()],
      },
    }),
  ],
};
