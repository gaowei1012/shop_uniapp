/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-25 17:38:55
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-04-09 10:40:16
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
  // 字符串分割
  static strSegmentation(str, condition) {
    return str.split(condition);
  }

  // toSeconds(hours, minutes, seconds) {
  //   return hours * 60 * 60 + minutes * 60 + seconds;
  // }
  // endOfTime() {
  //   clearInterval(this.countdown);
  //   this.countdown = null;
  //   this.$emit("end", {});
  // }
  // doLoop() {
  //   let seconds = this.toSeconds(
  //     this.time.hours || 0,
  //     this.time.minute || 0,
  //     this.time.second
  //   );
  //   this.countDown(seconds);
  //   this.countdown = setInterval(() => {
  //     seconds--;
  //     if (seconds < 0) {
  //       this.endOfTime();
  //       return;
  //     }
  //     this.countDown(seconds);
  //   }, 1000);
  // }
  // countDown(seconds) {
  //   let [hour, minute, second] = [0, 0, 0];
  //   if (seconds > 0) {
  //     hour = Math.floor(seconds / (60 * 60));
  //     minute = Math.floor(seconds / 60) - hour * 60;
  //     second = Math.floor(seconds) - hour * 60 * 60 - minute * 60;
  //   } else {
  //     this.endOfTime();
  //   }
  //   hour = hour < 10 ? "0" + hour : hour;
  //   minute = minute < 10 ? "0" + minute : minute;
  //   second = second < 10 ? "0" + second : second;
  //   this.h = hour;
  //   this.i = minute;
  //   this.s = second;
  // }
}
export default tool;
