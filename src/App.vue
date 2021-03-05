<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-01 20:05:27
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-05 10:20:49
 * @Description: 
-->
<script>
export default {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  },
};
</script>

<style>
@import url("./static/icons/iconfont.css");
/*每个页面公共css */
* {
  font-family: PingFangSC-regular;
}

.header-box {
  height: 336rpx;
  background: #f7c659;
}
</style>
