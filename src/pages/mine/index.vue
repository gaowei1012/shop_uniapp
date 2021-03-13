<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-02 10:59:44
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-12 20:44:19
 * @Description: 我的
-->

<template>
  <view class="mine-container">
    <view class="header-box">
      <view class="left">
        <image
          class="avatar"
          fit="cover"
          style="width:108rpx;height:108rpx"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <view class="name">苏小妍</view>
        <view class="zhiwei">
          <van-icon class="iconfont icon-crown" />
          洋掌柜
        </view>
      </view>
      <view class="right">
        <van-icon class="iconfont icon-message" />
        <van-icon class="iconfont icon-setting" />
      </view>
    </view>
    <!-- 我的订单 -->
    <view class="order-box">
      <view class="title-box">
        <view class="title">我的订单</view>
        <view class="more">
          更多
          <van-icon class="iconfont icon-right" />
        </view>
      </view>

      <view class="content-box">
        <view class="box" v-for="order in orderArray" :key="order.id">
          <view class="name-box">
            <view class="number" v-if="order.number > 0">{{
              order.number
            }}</view>
            <vant-icon class="iconfont" :class="order.icon" />
          </view>
          <view>{{ order.name }}</view>
        </view>
      </view>
    </view>
    <!--  -->
    <view class="info-box">
      <view
        class="box flex justify-content-between"
        v-for="item in list"
        :key="item.id"
        @click="handleList(item.name)"
      >
        <view class="name-box">
          <van-icon class="iconfont" :class="item.icon" />
          <view class="name">{{ item.name }}</view>
        </view>
        <van-icon class="iconfont icon-right" />
      </view>
    </view>
    <!-- 为您推荐 -->
    <view class="recommend-box">
      <view class="title">为您推荐</view>
      <view class="content-box">
        <view
          class="box"
          v-for="recommend in recommendArray"
          :key="recommend.id"
        >
          <image style="width:320rpx;height:320rpx" :src="recommend.src" />
          <view class="content">
            <view class="chandi">{{ recommend.chandi }}</view>
            <view class="name">{{ recommend.name }}</view>
            <view class="new">new</view>
            <view class="price-box">
              <label class="new-price color-ffaa67"
                >￥{{ recommend.new_price }}</label
              >
              <label class="old-price">￥{{ recommend.old_price }}</label>
            </view>
            <view class="leaderboard color-ffaa67">
              <van-icon class="iconfont icon-trophy color-ffaa67" />
              {{ recommend.leaderboard }}
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      orderArray: [
        {
          id: 0,
          name: "待付款",
          icon: "icon-card",
          number: 1,
        },
        {
          id: 1,
          name: "待发货",
          icon: "icon-ship",
          number: 1,
        },
        {
          id: 2,
          name: "待收货",
          icon: "icon-receipt",
          number: 1,
        },
        {
          id: 3,
          name: "待评价",
          icon: "icon-evaluation",
          number: 0,
        },
      ],
      list: [
        { id: 1, name: "收货地址", icon: "icon-address" },
        { id: 2, name: "商品收藏", icon: "icon-collect" },
        // { id: 3, name: "客服中心", icon: "icon-customer-service" },
      ],

      recommendArray: [
        {
          id: 0,
          src: "../../static/sale.png",
          chandi: "[法国] LANCOME",
          name: "法国兰蔻LANCOME小黑瓶眼霜 15ml",
          new_price: "299",
          old_price: "369",
          leaderboard: "热销眼霜榜第1名 >",
        },
        {
          id: 1,
          src: "../../static/sale.png",
          chandi: "[法国] LANCOME",
          name: "法国兰蔻LANCOME小黑瓶眼霜 15ml",
          new_price: "299",
          old_price: "369",
          leaderboard: "热销眼霜榜第1名 >",
        },
        {
          id: 3,
          src: "../../static/sale.png",
          chandi: "[法国] LANCOME",
          name: "法国兰蔻LANCOME小黑瓶眼霜 15ml",
          new_price: "299",
          old_price: "369",
          leaderboard: "热销眼霜榜第1名 >",
        },
        {
          id: 4,
          src: "../../static/sale.png",
          chandi: "[法国] LANCOME",
          name: "法国兰蔻LANCOME小黑瓶眼霜 15ml",
          new_price: "299",
          old_price: "369",
          leaderboard: "热销眼霜榜第1名 >",
        },
      ],
    };
  },
  onLoad() {},
  //方法集合
  methods: {
    // 点击列表
    handleList(e) {
      e === "收货地址"
        ? uni.navigateTo({ url: "/pages/address/index" })
        : console.log("哈哈哈");
    },
  },
};
</script>
<style lang="less" scoped>
@import url("./index.less");
</style>
