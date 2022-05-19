module.exports = {
  chainWebpack: (config) => {
    config.module.rules.delete("svg");
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: "vue-svg-loader",
        },
      ],
    },
  },
};

// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
//   chainWebpack: (config) => {
//     const svgRule = config.module.rule("svg");

//     svgRule.uses.clear();

//     svgRule
//       .use("babel-loader")
//       .loader("babel-loader")
//       .end()
//       .use("vue-svg-loader")
//       .loader("vue-svg-loader");
//   },
// });
// module.exports = {
//   chainWebpack: (config) => {
//     const svgRule = config.module.rule("svg");

//     svgRule.uses.clear();

//     svgRule
//       .use("babel-loader")
//       .loader("babel-loader")
//       .end()
//       .use("vue-svg-loader")
//       .loader("vue-svg-loader");
//   },
// };
