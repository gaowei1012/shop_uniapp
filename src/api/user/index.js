/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-27 20:07:48
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-04-04 18:38:19
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
  // 添加地址
  addAddress(data) {
    return axios({
      method: "POST",
      url: "address/addAddress",
      data: {
        user_id: data.user_id,
        receiver: data.name,
        phone: data.mobile,
        province_city: data.address,
        address_details: data.addressDetail,
      },
    });
  },
  // 编辑地址
  editAddress(data) {
    return axios({
      method: "PUT",
      url: `address/updateAddress/${data.user_id}`,
      data: {
        receiver: data.receiver,
        phone: data.phone,
        province_city: data.province_city,
        address_details: data.address_details,
      },
    });
  },
};
export default user;
