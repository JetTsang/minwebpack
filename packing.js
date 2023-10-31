const webpack = require("./lib/webpack"); //手写webpack
const webpackOptions = require("./webpack.config.js"); //这里一般会放配置信息
const compiler = webpack(webpackOptions);

compiler.run((err, stats) => {
  console.log(err);
});