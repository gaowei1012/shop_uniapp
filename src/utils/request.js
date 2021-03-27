/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-06 08:11:49
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-27 20:23:25
 * @Description: 封装请求
 */
import base from "../api/base";

const request = (config) => {
  if (!config.data) {
    config.data = {};
  }

  return new Promise((resolve, reject) => {
    uni.request({
      url: `${base.api2}/${config.url}`,
      data: config.data,
      method: config.method,
      success: (res) => {
        const { statusCode, data } = res;
        if (statusCode === 200 || statusCode === "200") {
          resolve(data.data);
        } else {
          reject(data.message);
        }
      },
      fail: (err) => {
        reject(err);
      },
    });
  });
};
export default request;
