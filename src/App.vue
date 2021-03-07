<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-01 20:05:27
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-07 15:44:29
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

<style lang="less">
@import url("./static/icons/iconfont.css");
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
  background: #f7c659 !important;
  .van-search__content {
    border-radius: 60rpx;
  }
}
</style>
