<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-26 11:54:52
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-26 11:57:16
 * @Description: 待评价
-->
<template>
  <view class="evaluation-container">
    <view class="order_num">
      <view class="num">订单号：2011045938048707</view>
      <view class="status color-f759ab">待评价</view>
    </view>
    <view class="content-box">
      <view class="img">
        <image src="../../../static/sale.png" mode="scaleToFill" />
      </view>
      <view class="info-box">
        <view class="name"
          >3件装 | MEDIHEAL 美迪惠尔 N.M.F针剂水库保湿面膜 10片/盒...</view
        >
        <view class="rl">35ml</view>
      </view>
      <view class="price-box">
        <view class="price">￥169.00</view>
        <view class="num">x2</view>
      </view>
    </view>
    <view class="price-box1">
      <view class="total">商品总价:￥169.00</view>
      <view class="taxes">税费:￥00.00</view>
      <view class="pay">
        需付款
        <view class="color-f759ab">￥169.00</view>
      </view>
    </view>

    <view class="btn-box">
      <view class="detail">订单详情</view>
      <view class="pay">付款</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
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
<style lang="less"></style>
