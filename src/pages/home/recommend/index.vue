<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-04-03 17:00:15
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-04-03 17:07:23
 * @Description: 精品推荐
-->
<template>
  <view class="recommend-box">
    <view class="title-box">
      <tui-icon class="iconfont icon-recommended" />
      <label class="title">精品推荐</label>
      <label class="desc">精挑细选，总有一款适合你</label>
    </view>
    <view class="content-box">
      <view
        class="box"
        v-for="recommend in recommendArray"
        :key="recommend.selection_recommend_id"
      >
        <image class="image" :src="recommend.selection_recommend_url" />
        <view class="name">{{ recommend.selection_recommend_name }}</view>
        <view class="price color-f7c659">￥{{ recommend.original_price }}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      recommendArray: [],
    };
  },
  created() {
    this.getRecommendList();
  },
  //方法集合
  methods: {
    getRecommendList() {
      this.$api.home.getRecommend().then((res) => {
        this.recommendArray = res;
      });
    },
  },
};
</script>
