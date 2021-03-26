/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-25 17:38:55
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-26 10:14:43
 * @Description:工具类
 */

class tool {
  static setItem(key, data) {
    return uni.setStorageSync(key, data);
  }

  static getItem(key) {
    return uni.getStorageSync(key);
  }

  static removeItem(key) {
    console.log("removeItem==>", key);
    return uni.removeStorageSync(key);
  }
}

export default tool;
