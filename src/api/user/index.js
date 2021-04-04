/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-27 20:07:48
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-04-04 17:33:33
 * @Description: 用户接口管理
 */

import axios from "@/utils/request";

const user = {
  goLogin(code) {
    return axios({
      method: "Post",
      url: "user/wxlogin", // 请求url
      data: {
        code,
      },
    });
  },
  // 获取地址
  getAddressList(userid) {
    return axios({
      method: "GET",
      url: `address/getAddress/${userid}`,
    });
  },
};
export default user;
