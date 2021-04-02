/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-06 10:07:44
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-04-02 17:14:51
 * @Description: 首页的接口管理
 */

import axios from "utils/request";

const home = {
  // 获取轮播
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
  // 品牌特卖
  getBrandList() {
    return axios({
      method: "GET",
      url: "brand/getBrandList",
    });
  },
  // 折扣列表
  getDiscount() {
    return axios({
      method: "GET",
      url: "discount/getAllDiscount",
    });
  },
};

export default home;
