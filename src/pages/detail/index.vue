<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-22 15:59:15
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-22 17:30:22
 * @Description: 商品详情页
-->
<template>
  <view class="detail-container">
    <swiper-box :options="options" :swiperArray="swiperArray" />
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
  //方法集合
  methods: {},
};
</script>
<style lang="less">
@import url("./index.less");
</style>
