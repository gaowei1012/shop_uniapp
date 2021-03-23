<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-22 15:59:15
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-23 09:55:26
 * @Description: 商品详情页
-->
<template>
  <view class="detail-container">
    <swiper-box :options="options" :swiperArray="swiperArray" />
    <view class="introduce-box">
      <view class="price-box ">
        <text class="new_price">￥{{ introduceObj.new_price }}</text>
        <text class="old_price text-decoration-through"
          >￥{{ introduceObj.old_price }}</text
        >
      </view>
      <view class="name">{{ introduceObj.name }}</view>
      <view class="info">
        <view class="origin">{{ introduceObj.origin }}品牌</view>
        <view class="flex">
          <view class="taxes">税费:{{ introduceObj.taxes }}</view>
          <view class="sale">销量:{{ introduceObj.sale }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import swiperBox from "components/swiper/index";
export default {
  components: { swiperBox },
  data() {
    return {
      options: {
        doots: true,
        color: "#ddd",
        activeColor: "#F65AAB",
        autoplay: true,
        interval: "2000",
        duration: "500",
      },
      swiperArray: ["SA", "SB"],
      introduceObj: {
        new_price: 318,
        old_price: 419.0,
        name:
          "【香港直邮】SHU UEMURA/植村秀 轻透持妆小方瓶粉底液 35ml 674# 中调偏白",
        origin: "日本",
        taxes: "免税",
        sale: 23,
      },
    };
  },
  //页面加载,上一个页面传值的options
  onLoad(options) {},
  //监听页面显示
  onShow() {},
  //监听页面初次渲染完成
  onReady() {},
  //监听页面隐藏
  onHide() {},
  //监听页面卸载
  onUnload() {},
  // 分享
  onShareAppMessage() {
    console.log("分享分享分享");
  },
  //方法集合
  methods: {},
};
</script>
<style lang="less">
@import url("./index.less");
</style>
