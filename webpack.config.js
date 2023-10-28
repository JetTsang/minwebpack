// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/index.js", // 入口文件
  output: {
    filename: "bundle.js", // 输出文件名
    path: path.resolve(__dirname, "dist"), // 输出目录
  },
  devtool: "source-map",
//   module: {
//     rules: [
//       {
//         test: /\.js$/, // 匹配所有.js文件
//         exclude: /node_modules/, // 排除node_modules目录
//         use: {
//           loader: "babel-loader", // 使用babel-loader进行转译
//         },
//       },
//     ],
//   },
};
