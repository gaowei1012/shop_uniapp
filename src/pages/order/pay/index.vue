<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-26 11:46:49
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-26 16:18:23
 * @Description: 待付款
-->
<template>
  <view class="pay-container">
    <view class="box" v-for="item in array" :key="item.id">
      <view class="order_num">
        <view class="num">订单号：{{ item.order_num }}</view>
        <view class="status color-f759ab">待付款</view>
      </view>
      <view class="content-box">
        <view class="img">
          <image :src="item.shop_pic" mode="scaleToFill" />
        </view>
        <view class="info-box">
          <view class="name">{{ item.name }}</view>
          <view class="capacity">{{ item.capacity }}</view>
        </view>
        <view class="price-box">
          <view class="price">￥{{ item.price }}</view>
          <view class="num">x{{ item.amount }}</view>
        </view>
      </view>
      <view class="price-box1">
        <view class="total">商品总价:￥{{ item.total }}</view>
        <view class="taxes">税费:￥{{ item.taxes }}</view>
        <view class="pay">
          需付款
          <view class="color-f759ab">￥{{ item.pay }}</view>
        </view>
      </view>

      <view class="btn-box">
        <view class="detail">订单详情</view>
        <view class="pay">付款</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      array: [
        {
          id: 0,
          order_num: "2011045938048707",
          shop_pic: "../../../static/sale.png",
          name: "3件装 | MEDIHEAL 美迪惠尔 N.M.F针剂水库保湿面膜 10片/盒",
          capacity: "35ml",
          price: "169.00",
          amount: 2,
          total: "169.00",
          taxes: "0.00",
          pay: "169.00",
        },
        {
          id: 1,
          order_num: "2011045938048707",
          shop_pic: "../../../static/sale.png",
          name: "3件装 | MEDIHEAL 美迪惠尔 N.M.F针剂水库保湿面膜 10片/盒",
          capacity: "35ml",
          price: "169.00",
          amount: 2,
          total: "169.00",
          taxes: "0.00",
          pay: "169.00",
        },
        {
          id: 2,
          order_num: "2011045938048707",
          shop_pic: "../../../static/sale.png",
          name: "3件装 | MEDIHEAL 美迪惠尔 N.M.F针剂水库保湿面膜 10片/盒",
          capacity: "35ml",
          price: "169.00",
          amount: 2,
          total: "169.00",
          taxes: "0.00",
          pay: "169.00",
        },
        {
          id: 3,
          order_num: "2011045938048707",
          shop_pic: "../../../static/sale.png",
          name: "3件装 | MEDIHEAL 美迪惠尔 N.M.F针剂水库保湿面膜 10片/盒",
          capacity: "35ml",
          price: "169.00",
          amount: 2,
          total: "169.00",
          taxes: "0.00",
          pay: "169.00",
        },
        {
          id: 4,
          order_num: "2011045938048707",
          shop_pic: "../../../static/sale.png",
          name: "3件装 | MEDIHEAL 美迪惠尔 N.M.F针剂水库保湿面膜 10片/盒",
          capacity: "35ml",
          price: "169.00",
          amount: 2,
          total: "169.00",
          taxes: "0.00",
          pay: "169.00",
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
