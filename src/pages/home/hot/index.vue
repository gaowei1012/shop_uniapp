<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-04-03 10:02:04
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-04-03 17:17:59
 * @Description: 热销榜单
-->
<template>
  <view class="hot-box">
    <view class="title-box">
      <view class="left">
        <tui-icon class="iconfont icon-hot" />
        <view class="title">热销榜单</view>
        <view class="desc">看看大家都在买什么</view>
      </view>
      <view class="right">
        <label>更多商品</label>
        <tui-icon name="arrow" />
      </view>
    </view>
    <view class="content-box">
      <view class="box flex" v-for="hot in hotArray" :key="hot.hot_cakes_id">
        <image class="img" :src="hot.hot_cakes_url" />
        <view class="content">
          <view class="name">{{ hot.hot_cakes_name }}</view>
          <!-- TODO:品牌名字 -->
          <view class="origin"
            >[{{ hot.origin }}] {{ hot.hot_cakes_detail }}</view
          >
          <view class=" price">
            <view class="old_price text-decoration-through">
              ￥{{ hot.original_price }}
            </view>
            <view class="new_price  color-f7c659"
              >￥{{ hot.discounted_price }}</view
            >
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
      hotArray: [],
    };
  },
  //页面加载,上一个页面传值的options
  created() {
    this.getHot();
  },

  //方法集合
  methods: {
    getHot() {
      this.$api.home.getHotList().then((res) => {
        this.hotArray = res;
      });
    },
  },
};
</script>
