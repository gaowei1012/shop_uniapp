<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-21 23:17:07
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-22 10:08:40
 * @Description: 商品收藏
-->
<template>
  <view class="collect-container">
    <view class="content-box">
      <view class="box" v-for="item in array" :key="item.id">
        <image :src="item.img" mode="scaleToFill" />
        <view class="title">{{ item.title }}</view>
        <view class="name">{{ item.name }}</view>
        <view class="new">new</view>
        <view class="price-box">
          <view class="new-price">￥{{ item.new_price }}</view>
          <view class="old-price">￥{{ item.old_price }}</view>
        </view>
      </view>
    </view>
    <view class="edit-deal">
      <view class="edit">编辑</view>
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
          title: "[法国] LANCOME",
          name: "法国兰蔻LANCOME小黑瓶眼霜 15ml",
          img: "../../static/sale.png",
          new_price: "299",
          old_price: "369",
        },
        {
          id: 1,
          title: "[法国] LANCOME",
          name: "法国兰蔻LANCOME小黑瓶眼霜 15ml",
          img: "../../static/sale.png",
          new_price: "299",
          old_price: "369",
        },
        {
          id: 2,
          title: "[法国] LANCOME",
          name: "法国兰蔻LANCOME小黑瓶眼霜 15ml",
          img: "../../static/sale.png",
          new_price: "299",
          old_price: "369",
        },
        {
          id: 3,
          title: "[法国] LANCOME",
          name: "法国兰蔻LANCOME小黑瓶眼霜 15ml",
          img: "../../static/sale.png",
          new_price: "299",
          old_price: "369",
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
