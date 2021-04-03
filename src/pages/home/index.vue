<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-02 10:29:55
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-04-03 17:01:04
 * @Description: 首页
-->

<template>
  <view class="hone-container">
    <view class="search-box">
      <van-search
        v-model="searchVal"
        placeholder="请输入搜索关键词"
        @search="searchInfo"
        style="background:#f7c659"
      />
    </view>
    <view class="content-container">
      <swiper-box
        class="swiper"
        :options="options"
        :swiperArray="swiperArray"
      />
      <view class="img-box">
        <view class="img" v-for="(items, key) in introductionArray" :key="key">
          <van-icon class="iconfont icon-world" />
          <view>
            {{ items }}
          </view>
        </view>
      </view>
      <!-- 分类 -->
      <view class="sort-box">
        <view class="sort" v-for="sort in sortArray" :key="sort.id">
          <image style="width:120rpx;height:120rpx" :src="sort.category_img" />
          <view>{{ sort.category_name }}</view>
        </view>
      </view>
      <!-- 特卖 -->
      <saleBox />
      <!-- 今日折扣 -->
      <discount-box />
      <!-- 热销榜单 -->
      <hot-box />
      <!-- 精品推荐 -->
      <recommend-box />
    </view>
  </view>
</template>

<script>
import swiperBox from "components/swiper/index";
import discountBox from "./discount";
import saleBox from "./sales";
import hotBox from "./hot";
import recommendBox from "./recommend";
export default {
  components: { swiperBox, discountBox, saleBox, hotBox, recommendBox },
  data() {
    return {
      searchVal: "",
      swiperArray: ["A", "B", "C"],
      introductionArray: ["全球采购", "正品保障", "品质溯源", "假一赔十"],
      sortArray: [],
      hotArray: [
        {
          id: 0,
          src: "../../static/sale.png",
          name: "SK-II微肌因赋活修护精华霜试用装 35ml装",
          origin: "[日本] SK-II",
          price: "29.9",
        },
        {
          id: 1,
          src: "../../static/sale.png",
          name: "SK-II微肌因赋活修护精华霜试用装 35ml装",
          origin: "[日本] SK-II",
          price: "29.9",
        },
        {
          id: 2,
          src: "../../static/sale.png",
          name: "SK-II微肌因赋活修护精华霜试用装 35ml装",
          origin: "[日本] SK-II",
          price: "29.9",
        },
      ],
      recommendArray: [
        {
          id: 0,
          src: "../../static/sale.png",
          name: "修复精华水",
          price: "68.9",
        },
        {
          id: 1,
          src: "../../static/sale.png",
          name: "修复精华水0",
          price: "68.9",
        },
        {
          id: 2,
          src: "../../static/sale.png",
          name: "修复精华水1",
          price: "68.9",
        },
        {
          id: 3,
          src: "../../static/sale.png",
          name: "修复精华水2",
          price: "68.9",
        },
        {
          id: 4,
          src: "../../static/sale.png",
          name: "修复精华水3",
          price: "68.9",
        },
        {
          id: 5,
          src: "../../static/sale.png",
          name: "修复精华水4",
          price: "68.9",
        },
      ],
      options: {
        dots: true,
        color: "rgba(255,255,255,1)",
        activeColor: "#F759AA",
        autoplay: true,
        interval: "2000",
        duration: "500",
      },
    };
  },
  onLoad() {
    this.getSort();
  },
  //方法集合
  methods: {
    searchInfo(e) {
      const { detail } = e;
      console.log("searchInfo==>", detail);
    },
    // 获取分类
    getSort() {
      this.$api.home.getCategoryList().then((res) => {
        this.sortArray = res.data;
      });
    },
  },
};
</script>
<style lang="less">
@import url("./index.less");
</style>
