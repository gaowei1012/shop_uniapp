/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-25 17:38:55
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-04-02 19:37:39
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
  // 倒计时
  static countDown(startTime, endTime) {
    startTime = startTime ? new Date(startTime) : new Date();
    endTime = new Date(endTime);
    const time = endTime.getTime() - startTime.getTime();
    return time;
  }
}

export default tool;
