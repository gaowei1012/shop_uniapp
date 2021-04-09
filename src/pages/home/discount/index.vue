<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-04-02 17:17:22
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-04-03 09:11:36
 * @Description: 今日折扣
-->
<template>
  <view class="discount-box ">
    <view class="title-box">
      <view class="left">
        <tui-icon class="iconfont icon-discount" />
        <view class="title">今日折扣</view>
        <view class="desc">拼手速的时候到了</view>
      </view>
      <view class="right" @click="handleDiscount('')">立即抢购</view>
    </view>
    <view class="content-box">
      <view
        class="box"
        v-for="discount in discountArray"
        :key="discount.discount_id"
        @click="handleDiscount(discount)"
      >
        <image
          style="width:140rpx;height:140rpx"
          :src="discount.discount_url"
        />
        <view class="new-price color-f7c659"
          >￥{{ discount.discounted_price }}</view
        >
        <view class="old-price color-bfbfbf"
          >￥{{ discount.original_price }}</view
        >
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      discountArray: [],
    };
  },
  created() {
    this.getDiscount();
  },
  //方法集合
  methods: {
    //获取今日折扣
    getDiscount() {
      this.$api.home.getDiscount().then((res) => {
        this.discountArray = res.splice(0, 4);
      });
    },
    // 点击单个折扣项
    handleDiscount(e) {
      e = e ? e : this.discountArray[0];
      uni.navigateTo({
        url: `/pages/discount/index?list=${JSON.stringify(e)}`,
      });
    },
  },
};
</script>
