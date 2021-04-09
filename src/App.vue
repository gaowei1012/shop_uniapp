<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-01 20:05:27
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-04-09 22:09:06
 * @Description: 
-->
<script>
export default {
  // onLaunch: function() {
  //   console.log("App Launch");
  // },
  // onShow: function() {
  //   console.log("App Show");
  // },
  // onHide: function() {
  //   console.log("App Hide");
  // },
};
</script>

<style lang="less">
@import url("./static/icons/iconfont.css");
@import url("./static/css/index.css");
/*每个页面公共css */
* {
  font-family: PingFangSC-regular;
}

.header-box {
  height: 336rpx;
  background: #f7c659;
}

.van-tree-select {
  height: 100vh !important;
}
.van-search {
  .van-search__content {
    border-radius: 60rpx;
  }
}

.no-info {
  color: #bfbfbf;
  font-size: 30rpx;
  text-align: center;
}

.tui-icon {
  font-size: 0 !important;
}
/* #ifdef APP-PLUS ||MP-WEIXIN */
checkbox .wx-checkbox-input {
  border-radius: 50% !important;
  color: #ffffff !important;
}

checkbox .wx-checkbox-input.wx-checkbox-input-checked {
  color: #fff;
  background: #3d7eff;
}

.wx-checkbox-input.wx-checkbox-input-checked {
  border: none !important;
}
/* #endif */
/* #ifdef H5 */
uni-checkbox .uni-checkbox-input {
  border-radius: 50% !important;
  color: #ffffff !important;
}

uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked {
  border: none !important;
  background: #3d7eff;
  border-color: #3d7eff;
}

uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked::before {
  width: 20rpx;
  height: 20rpx;
  line-height: 20rpx;
  text-align: center;
  font-size: 18rpx;
  color: #fff;
  background: transparent;
  transform: translate(-70%, -50%) scale(1);
  -webkit-transform: translate(-70%, -50%) scale(1);
}

/* #endif */
</style>
