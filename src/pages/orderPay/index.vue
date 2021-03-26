<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-26 17:22:48
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-26 18:50:48
 * @Description: 订单支付
-->
<template>
  <view class="orderPay-container">
    <view class="title-box">
      <view class="flex">
        <van-icon class="iconfont icon-time" />
        <view class="title">待支付</view>
      </view>
      <view class="time">
        剩
        <van-count-down :time="time" />
        自动关闭
      </view>
    </view>

    <view class="info-box">
      <view class="desc-box flex">
        <!-- <view class="desc">免运费</view> -->
        <view class="desc">正品保证</view>
      </view>
      <view class="box" v-for="item in array" :key="item.id">
        <image :src="item.img" mode="scaleToFill" />
        <view class="content">
          <view class="name-box">
            <view class="name">{{ item.name }}</view>
            <view class="capacity">{{ item.capacity }}</view>
          </view>
          <view class="price-box">
            <view class="price">{{ item.price }}</view>
            <view class="amount">x{{ item.amount }}</view>
          </view>
        </view>
      </view>
    </view>
    <view class="order-box">钉钉想象</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
      array: [
        {
          id: 0,
          img: "../../static/sale.png",
          name: "【香港直邮】shu uemura植村秀 清透持妆小方瓶粉底...",
          price: "399.00",
          amount: 1,
          capacity: "35ml",
        },
        {
          id: 1,
          img: "../../static/sale.png",
          name: "【香港直邮】shu uemura植村秀 清透持妆小方瓶粉底...",
          price: "399.00",
          amount: 2,
          capacity: "35ml",
        },
        {
          id: 2,
          img: "../../static/sale.png",
          name: "【香港直邮】shu uemura植村秀 清透持妆小方瓶粉底...",
          price: "399.00",
          amount: 3,
          capacity: "35ml",
        },
      ],
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
