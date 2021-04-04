/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-06 08:11:49
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-04-04 16:57:03
 * @Description: 封装请求
 */

const request = (config) => {
  if (!config.data) {
    config.data = {};
  }

  return new Promise((resolve, reject) => {
    // const baseUrl = process.env.VUE_APP_BASE_API;
    const baseUrl = "http://39.99.241.232:7082/api/v0.0.1/auth/data";
    uni.request({
      url: `${baseUrl}/${config.url}`,
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
