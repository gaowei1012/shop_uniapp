<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-25 09:53:58
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-04-03 09:05:35
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
      <template v-for="(item, index) in infoObj">
        <view class="box" :key="index">
          <view class="name-box">
            <image class="avator" :src="item.discount_url" mode="scaleToFill" />
            <view class="title">{{ item.discount_name }}</view>
          </view>
          <image class="img" :src="item.discount_url" mode="scaleToFill" />
          <view class="name">{{ item.discount_detail }}</view>
        </view>
      </template>
    </view>
  </view>
</template>

<script>
import tool from "@/utils/tool";
export default {
  data() {
    return {
      infoObj: [],
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
      console.log("list==>", options.list);
      tool.setItem("discount", options.list);
      var list = JSON.parse(options.list);
    } else {
      list = JSON.parse(tool.getItem("discount"));
    }
    this.infoObj.push(list);
  },
  // 分享
  // TODO:开发版小程序已过期，请在开发者工具重新扫码
  onShareAppMessage(res) {
    // https://blog.csdn.net/qq_39109182/article/details/93312659
    var shareData = this.infoObj[0];
    console.log("infoObj==>", shareData);
    return {
      title: "哈哈哈哈",
      desc: "描述描述",
      // imageUrl: "分享要显示的图片，如果不设置就会默认截图当前页面的图片",
      path: `/pages/discount/index?list=${shareData}`,

      success: function(res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function(res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      },
      complete: function(res) {
        console.log("转发结束:", res, JSON.stringify(res));
      },
    };
  },

  onShareAppMessage() {
    var that = this;
    return {
      title: "今日折扣详情",
      path: "/pages/discount/index",
    };
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
