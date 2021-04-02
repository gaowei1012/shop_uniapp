<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-25 09:53:58
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-04-02 19:38:39
 * @Description: 今日折扣
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
      <view class="name-box">
        <image class="avator" :src="infoObj.img" mode="scaleToFill" />
        <view class="title">{{ infoObj.title }}</view>
      </view>
      <image class="img" :src="infoObj.img" mode="scaleToFill" />
      <view class="name">{{ infoObj.name }}</view>
    </view>
  </view>
</template>

<script>
import tool from "@/utils/tool";
export default {
  data() {
    return {
      infoObj: {
        title: "ESTEE LAUDER/雅诗兰黛",
        img: "https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF",
        name: "【新品推荐】雅诗兰黛沁水粉底液63号SPF15/PA++ 30ml（2CO）",
      },
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
    console.log("list==>", JSON.parse(options.list));
  },
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
