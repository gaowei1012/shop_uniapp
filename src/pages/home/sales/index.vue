<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-04-03 09:24:08
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-04-03 14:10:08
 * @Description: 品牌特卖
-->
<template>
  <view class="sale-box">
    <view class="title-box">
      <van-icon class="iconfont icon-sale" />
      <label class="title">品牌特卖</label>
      <label class="end_activity_time">一手活动信息在这里</label>
    </view>
    <view class="box" @click="goSales">
      <view class="sale-img">
        <image :src="saleObj.img" />
      </view>
      <view class="desc">{{ saleObj.desc }}</view>
      <view class="time"
        >活动时间：{{ saleObj.start_activity_time }}~{{
          saleObj.end_activity_time
        }}</view
      >
    </view>
  </view>
</template>

<script>
import tool from "@/utils/tool";
export default {
  data() {
    return {
      saleObj: {},
      array: [],
    };
  },
  //页面加载,上一个页面传值的options
  created() {
    this.getBrandList();
  },
  //方法集合
  methods: {
    // 获取品牌特卖
    getBrandList() {
      this.$api.home.getBrandList().then((res) => {
        this.array = res.data;
        const {
          brand_name,
          brand_url,
          start_activity_time,
          end_activity_time,
        } = res.data[0];

        this.saleObj.desc = brand_name;
        this.saleObj.img = brand_url;
        this.saleObj.start_activity_time = tool.strSegmentation(
          start_activity_time,
          " "
        )[0];
        this.saleObj.end_activity_time = tool.strSegmentation(
          end_activity_time,
          " "
        )[0];
      });
    },
    // 跳转到详情页
    goSales() {
      let obj = { ...this.array };
      obj.length = this.array.length;
      obj = encodeURIComponent(JSON.stringify(obj));
      uni.navigateTo({
        url: `/pages/sales/index?list=${obj}`,
      });
    },
  },
};
</script>
