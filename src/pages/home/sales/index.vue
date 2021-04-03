<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-04-03 09:24:08
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-04-03 09:50:06
 * @Description: 品牌特卖
-->
<template>
  <view class="sale-box">
    <view class="title-box">
      <van-icon class="iconfont icon-sale" />
      <label class="title">品牌特卖</label>
      <label class="desc">一手活动信息在这里</label>
    </view>
    <view class="box" @click="goSales">
      <view class="sale-img">
        <image :src="saleObj.img" />
      </view>
      <view class="desc">{{ saleObj.desc }}</view>
      <view class="time">活动时间：{{ saleObj.time }}</view>
    </view>
  </view>
</template>

<script>
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
    // 获取品牌特卖S
    getBrandList() {
      this.$api.home.getBrandList().then((res) => {
        this.array = res.data;
        console.log("getBrandList==>", res.data[0]);
        const { brand_name, brand_url, activity_time } = res.data[0];
        const obj = {
          desc: brand_name,
          img: brand_url,
          time: activity_time,
        };
        this.saleObj = obj;
      });
    },
    // 跳转到详情页
    goSales() {
      console.log("array==>", this.array);
      let obj = { ...this.array };
      obj.length = this.array.length;
      obj = encodeURIComponent(JSON.stringify(obj));
      uni.navigateTo({
        url: `/pages/sales/index?list=${obj}`,
      });
      //  let list = decodeURIComponent(options.list);
      // this.commentArray = Array.from(JSON.parse(list));
    },
  },
};
</script>
