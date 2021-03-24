<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-24 17:04:03
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-24 18:23:31
 * @Description: 产品参数
-->
<template>
  <view class="product-box">
    <div class="title">产品参数</div>
    <div class="params-box">
      <view class="params" v-for="params in paramsArray" :key="params.id">
        <text class="title">{{ params.title }}</text>
        <text>{{ params.content }}</text>
      </view>
    </div>
    <div class="content-box">
      <div class="title">产品描述</div>
      <div class="content">
        <swiper-items :options="options" :swiperArray="swiperArray" />
        <view>{{ content }}</view>
      </div>
    </div>
  </view>
</template>

<script>
import swiperItems from "components/swiper/index";
export default {
  components: { swiperItems },
  data() {
    return {
      paramsArray: [
        { id: 0, title: "品牌", content: "雅诗兰黛" },
        { id: 1, title: "规格", content: "30ml" },
        { id: 2, title: "制造时间", content: "2018-11-1" },
        { id: 4, title: "参考价", content: "690" },
      ],
      options: {
        doots: false,
        autoplay: true,
        interval: "2000",
        duration: "500",
      },
      swiperArray: ["SS", "CC"],
      content:
        "这是一个哈哈sad哈市大会上的哈实打实大哈实打实大哈实打实的哈师大哈师大哈师大哈师大哈啥的嘎斯打算打算阿萨达是大萨达所打算大叔大婶多",
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
