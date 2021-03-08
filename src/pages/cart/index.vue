<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-02 10:59:36
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-08 17:34:10
 * @Description: 购物车
-->
<template>
  <view class="cart-container">
    <view class="bgc-f7c659 header-title">
      <view class="title">购物车</view>
      <view class="edit">编辑</view>
    </view>
    <view class="content-box">
      <van-checkbox-group :value="checked" @change="onChange">
        <view class="box flex" v-for="cart in cartArray" :key="cart.id">
          <van-checkbox :name="cart.id" class="checkbox" />
          <van-image
            class="cart-img"
            width="120rpx"
            height="120rpx"
            :src="cart.img"
          />
          <view class="content">
            <view class="name">{{ cart.title }}</view>
            <view class="capacity">{{ cart.capacity }}</view>
            <view class="price">￥{{ cart.price }}</view>
          </view>
        </view>
      </van-checkbox-group>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      checked: [],
      checkedAll: false,
      cartArray: [
        {
          id: 0,
          img: "../../static/sale.png",
          title:
            "【香港直邮】shu uemura植村秀 清透持妆小方瓶粉底液 35ml 674#...",
          price: "530.00",
          capacity: "35ml",
        },
        {
          id: 1,
          img: "../../static/sale.png",
          title:
            "【香港直邮】shu uemura植村秀 清透持妆小方瓶粉底液 35ml 674#...",
          price: "530.00",
          capacity: "35ml",
        },
        {
          id: 2,
          img: "../../static/sale.png",
          title:
            "【香港直邮】shu uemura植村秀 清透持妆小方瓶粉底液 35ml 674#...",
          price: "530.00",
          capacity: "35ml",
        },
        {
          id: 3,
          img: "../../static/sale.png",
          title:
            "【香港直邮】shu uemura植村秀 清透持妆小方瓶粉底液 35ml 674#...",
          price: "530.00",
          capacity: "35ml",
        },
      ],
    };
  },
  onLoad() {},
  //方法集合
  methods: {
    // 单选
    onChange(event) {
      this.checked = event.detail;
      this.checked.length === this.cartArray.length
        ? (this.checkedAll = true)
        : (this.allChecked = false);
    },
    // 全选
    allChecked(event) {
      this.checked = this.cartArray.map((item) => {
        return item.id.toString();
      });
      this.checkedAll = event.detail;
      if (this.checkedAll === false) this.checked = [];
    },
  },
};
</script>
<style lang="less">
@import url("./index.less");
</style>
