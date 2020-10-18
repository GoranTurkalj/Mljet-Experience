

module.exports = {
  //GENERAL CONFIG XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
    slider: "./src/slider.js"
  },
  //RULES XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  module: {
    rules: [
      //Rules for HTML
      { test: /\.html$/, use: ["html-loader"] },
    ],
  },
  //PLUGINS XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
};
