/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-06 10:07:44
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-04-03 16:59:46
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
  // 热门列表
  getHotList() {
    return axios({
      method: "GET",
      url: "hotCakes/getAllHotCakes",
    });
  },
  // 精品推荐
  getRecommend() {
    return axios({
      method: "GET",
      url: "recommend/getAllRecommend",
    });
  },
};

export default home;
