/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-27 20:07:48
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-27 20:13:49
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
};
export default user;
