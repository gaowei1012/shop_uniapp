/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-01 20:05:27
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-27 20:16:31
 * @Description:
 */
import Vue from "vue";
import App from "./App";

import plugin from "./utils/plugin";
Vue.use(plugin);

import api from "./api"; // 导入api接口
Vue.prototype.$api = api; // 将api挂载到vue的原型上

Vue.config.productionTip = false;

App.mpType = "app";

const app = new Vue({
  ...App,
});
app.$mount();
