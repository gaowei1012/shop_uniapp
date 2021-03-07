/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-06 10:07:44
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-06 17:40:10
 * @Description: 首页的接口管理
 */

import axios from "../../utils/request";

const home = {
  // 获取轮播
  // http://127.0.0.1:7082/api/v0.0.1/banner
  getBanner() {
    return axios({
      method: "GET",
      url: "banner", // 请求url
    });
  },
  //  获取分类
  getCategoryList() {
    return axios({
      method: "GET",
      url: "category/getCategoryList",
    });
  },
};

export default home;
