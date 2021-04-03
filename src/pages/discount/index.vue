<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-25 09:53:58
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-04-03 09:20:07
 * @Description: 今日折扣详情
-->
<template>
  <view class="discount-container">
    <view class="desc-box">
      <view class="desc">限时商品，拼手速的时候到了</view>
      <view>
        <van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
        后结束
      </view>
    </view>
    <view class="content-box">
      <view class="box">
        <view class="name-box">
          <image class="avator" :src="obj.discount_url" mode="scaleToFill" />
          <view class="title">{{ obj.discount_name }}</view>
        </view>
        <image class="img" :src="obj.discount_url" mode="scaleToFill" />
        <view class="name">{{ obj.discount_detail }}</view>
      </view>
    </view>
  </view>
</template>

<script>
import tool from "@/utils/tool";
export default {
  data() {
    return {
      obj: {},
    };
  },
  computed: {
    time() {
      let now_date = new Date(
        new Date(new Date().toLocaleDateString()).getTime() +
          24 * 60 * 60 * 1000 -
          1
      );
      return tool.countDown("", now_date);
    },
  },
  //页面加载,上一个页面传值的options
  onLoad(options) {
    if (Object.keys(options).length > 0) {
      tool.setItem("discount", options.list);
      var list = JSON.parse(options.list);
    } else {
      list = JSON.parse(tool.getItem("discount"));
    }
    this.obj = list;
  },
  // 分享
  // TODO:开发版小程序已过期，请在开发者工具重新扫码
  onShareAppMessage() {
    return {
      title: "今日折扣详情",
      path: "/pages/discount/index",
    };
  },
};
</script>
<style lang="less">
@import url("./index.less");
</style>
