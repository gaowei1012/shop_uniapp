/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-06 08:11:49
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-28 15:38:38
 * @Description: 封装请求
 */

const request = (config) => {
  if (!config.data) {
    config.data = {};
  }

  return new Promise((resolve, reject) => {
    const baseUrl = process.env.VUE_APP_BASE_API;
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
