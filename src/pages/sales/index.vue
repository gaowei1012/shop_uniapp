<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-26 16:34:37
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-04-03 09:53:18
 * @Description: 品牌特卖
-->
<template>
  <view class="sales-container">
    <van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
    <view class="content-box">
      <view class="box" v-for="item in array" :key="item.brand_id">
        <image :src="item.brand_url" mode="scaleToFill" />
        <view class="name">{{ item.brand_name }}</view>
        <view class="deal-box">
          <view class="price-box">
            <view class="new-price">￥{{ item.discounted_price }}</view>
            <view class="old-price text-decoration-through"
              >市场均价:￥{{ item.original_price }}</view
            >
          </view>
          <view class="detail">查看详情</view>
        </view>
      </view>
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
          name: "【香港直邮】迪奥粉漾魅惑变色润唇膏口红变色润唇膏口红",
          new_price: "342.00",
          old_price: "415.00",
        },
        {
          id: 1,
          img: "../../static/sale.png",
          name: "【香港直邮】迪奥粉漾魅惑变色润唇膏口红变色润唇膏口红",
          new_price: "342.00",
          old_price: "415.00",
        },
        {
          id: 2,
          img: "../../static/sale.png",
          name: "【香港直邮】迪奥粉漾魅惑变色润唇膏口红变色润唇膏口红",
          new_price: "342.00",
          old_price: "415.00",
        },
        {
          id: 3,
          img: "../../static/sale.png",
          name: "【香港直邮】迪奥粉漾魅惑变色润唇膏口红变色润唇膏口红",
          new_price: "342.00",
          old_price: "415.00",
        },
        {
          id: 4,
          img: "../../static/sale.png",
          name: "【香港直邮】迪奥粉漾魅惑变色润唇膏口红变色润唇膏口红",
          new_price: "342.00",
          old_price: "415.00",
        },
        {
          id: 5,
          img: "../../static/sale.png",
          name: "【香港直邮】迪奥粉漾魅惑变色润唇膏口红变色润唇膏口红",
          new_price: "342.00",
          old_price: "415.00",
        },
      ],
    };
  },
  //页面加载,上一个页面传值的options
  onLoad(options) {
    // console.log(decodeURIComponent(options.list));
    this.array = Array.from(JSON.parse(decodeURIComponent(options.list)));
    console.log("sales==>array==>", this.array);
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
