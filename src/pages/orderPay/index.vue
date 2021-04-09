<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-26 17:22:48
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-26 21:10:30
 * @Description: 订单支付
-->
<template>
  <view class="orderPay-container">
    <view class="title-box">
      <view class="flex">
        <tui-icon class="iconfont icon-time" />
        <view class="title">待支付</view>
      </view>
      <view class="time">
        剩
        <van-count-down :time="time" />
        自动关闭
      </view>
    </view>
    <view class="content-box">
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
      <view class="order-box">
        <view class="title">订单信息</view>
        <view class="content">
          <view class="box">
            <view class="title-1">订单金额:</view>
            <view class="content">￥{{ orderObj.money }}</view>
          </view>
          <view class="box">
            <view class="title-1">订单编号:</view>
            <view class="content">{{ orderObj.order_id }}</view>
          </view>
          <view class="box">
            <view class="title-1">收货地址:</view>
            <view class="content">{{ orderObj.address }}</view>
          </view>
          <view class="box">
            <view class="title-1">买家备注:</view>
            <view class="content">{{ orderObj.remark }}</view>
          </view>
        </view>
      </view>
    </view>
    <view class="btn-box">
      <view class="total-box">
        <view class="amount">共{{ array.length }}件</view>
        <view class="price">
          合计:<text>￥{{ total }} </text>
        </view>
      </view>
      <view class="pay">立即付款</view>
    </view>
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
          price: 399,
          amount: 1,
          capacity: "35ml",
        },
        {
          id: 1,
          img: "../../static/sale.png",
          name: "【香港直邮】shu uemura植村秀 清透持妆小方瓶粉底...",
          price: 399.5,
          amount: 2,
          capacity: "35ml",
        },
        {
          id: 2,
          img: "../../static/sale.png",
          name: "【香港直邮】shu uemura植村秀 清透持妆小方瓶粉底...",
          price: 399,
          amount: 3,
          capacity: "35ml",
        },
      ],
      orderObj: {
        money: "798.00",
        order_id: "#2011043281014542",
        address: "江西省赣州市章贡区江西蓉吟贸易有限公司",
        remark: "暂无",
      },
      totals: 0,
    };
  },
  computed: {
    total() {
      let sum = 0;
      for (var i = 0; i < this.array.length; i++) {
        const item = this.array[i];
        sum += item.price * item.amount;
      }
      return sum;
    },
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
