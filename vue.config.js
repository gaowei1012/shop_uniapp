/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-02 12:04:30
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-02 16:46:36
 * @Description:
 */

module.exports = {
  css: {
    loaderOptions: {
      // 给 less-loader 传递 Less.js 相关选项
      less: {},
    },
  },

  devServer: {
    disableHostCheck: true, //webpack4.0 开启热更新
    hot: true,
    port: 1900,
    proxy: {
      "/api": {
        target: "http://192.168.3.15:7082/api/v0.0.1/", //目标地址
        ws: true, // 是否启用websockets
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          "^/api": "/",
        }, //这里重写路径
      },
    },
  },
};
