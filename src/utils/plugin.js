/*
 * @Author: su xiao yan
 * @Date: 2019-11-08 09:38:56
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-21 22:46:06
 * @Description:message封装
 */

import Toast from "../wxcomponents/vant-weapp/toast/toast";
import Dialog from "../wxcomponents/vant-weapp/dialog/dialog";

export default {
  install(Vue) {
    Vue.prototype.$toast = (content = "", type = "text", duration = 2000) => {
      Toast({
        type: type,
        message: content,
        duration: duration,
      });
    };

    Vue.prototype.$confirm = (title, content, overlay = false) => {
      return new Promise((resolve, reject) => {
        Dialog.confirm({
          title: title,
          message: content,
          overlay: overlay,
        })
          .then(() => {
            resolve();
          })
          .catch(() => {
            reject();
          });
      });
    };
  },
};
