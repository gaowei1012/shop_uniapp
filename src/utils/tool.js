/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-25 17:38:55
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-25 17:42:36
 * @Description:工具类
 */

class tool {
  static setItem(key, data) {
    return uni.setStorageSync(key, data);
  }

  static getItem(key) {
    return uni.getStorageInfoSync(key);
  }

  static removeItem(key) {
    return uni.removeStorageSync(key);
  }
}

export default tool;
