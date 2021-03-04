/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-01 20:05:27
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-03 19:48:32
 * @Description: 
 */
import Vue from "vue";
import App from "./App";
import './static/css/index.css'
// import Vant from "vant";
// import 'vant/lib/index.less';

// Vue.use(Vant);
Vue.config.productionTip = false;

App.mpType = "app";

const app = new Vue({
  ...App,
});
app.$mount();
