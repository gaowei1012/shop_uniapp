<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-11 21:02:02
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-12 10:40:37
 * @Description: 地址列表
-->

<template>
  <view class="address-container">
    <template v-if="addressArray.length > 0">
      <view>哈哈哈</view>
    </template>
    <template v-else>
      <van-image
        width="696rpx"
        height="696rpx"
        src="../../static/img/no-address.png"
      />
      <view class="no-address">暂无任何地址</view>
    </template>
    <van-button class="btn">添加地址</van-button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      addressArray: [],
    };
  },
  onLoad() {},
  //方法集合
  methods: {},
};
</script>
<style lang="less">
@import url("./index.less");

</style>
