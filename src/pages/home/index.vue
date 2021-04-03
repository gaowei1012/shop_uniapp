<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-02 10:29:55
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-04-03 09:26:37
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
      <view class="hot-box">
        <view class="title-box">
          <view class="left">
            <van-icon class="iconfont icon-hot" />
            <view class="title">热销榜单</view>
            <view class="desc">看看大家都在买什么</view>
          </view>
          <view class="right">
            <label>更多商品</label>
            <van-icon name="arrow" />
          </view>
        </view>
        <view class="content-box">
          <view class="box flex" v-for="hot in hotArray" :key="hot.id">
            <image class="img" :src="hot.src" />
            <view class="content">
              <view class="name">{{ hot.name }}</view>
              <view class="origin">{{ hot.origin }}</view>
              <view class="price color-f7c659">￥{{ hot.price }}</view>
            </view>
          </view>
        </view>
      </view>
      <!-- 精品推荐 -->
      <view class="recommend-box">
        <view class="title-box">
          <van-icon class="iconfont icon-recommended" />
          <label class="title">精品推荐</label>
          <label class="desc">精挑细选，总有一款适合你</label>
        </view>
        <view class="content-box">
          <view
            class="box"
            v-for="recommend in recommendArray"
            :key="recommend.id"
          >
            <image class="image" :src="recommend.src" />
            <view class="name">{{ recommend.name }}</view>
            <view class="price color-f7c659">￥{{ recommend.price }}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import swiperBox from "components/swiper/index";
import discountBox from "./discount";
import saleBox from "./sales";
export default {
  components: { swiperBox, discountBox, saleBox },
  data() {
    return {
      searchVal: "",
      swiperArray: ["A", "B", "C"],
      introductionArray: ["全球采购", "正品保障", "品质溯源", "假一赔十"],
      sortArray: [
        {
          id: 1,
          category_id: "df314fa4-c91b-4f61-b35b-611714e440b3",
          category_name: "童装",
          category_img: "../../static/sale.png",
          update_at: "2021-03-02T12:58:15+08:00",
          create_at: "2021-03-02T10:22:18+08:00",
        },
        {
          id: 2,
          category_id: "df314fa4-c91b-4f61-b35b-611714e440b3",
          category_name: "童装1",
          category_img: "../../static/sale.png",
          update_at: "2021-03-02T12:58:15+08:00",
          create_at: "2021-03-02T10:22:18+08:00",
        },
        {
          id: 3,
          category_id: "df314fa4-c91b-4f61-b35b-611714e440b3",
          category_name: "童装1",
          category_img: "../../static/sale.png",
          update_at: "2021-03-02T12:58:15+08:00",
          create_at: "2021-03-02T10:22:18+08:00",
        },
        {
          id: 4,
          category_id: "df314fa4-c91b-4f61-b35b-611714e440b3",
          category_name: "童装2",
          category_img: "../../static/sale.png",
          update_at: "2021-03-02T12:58:15+08:00",
          create_at: "2021-03-02T10:22:18+08:00",
        },
        {
          id: 5,
          category_id: "df314fa4-c91b-4f61-b35b-611714e440b3",
          category_name: "童装3",
          category_img: "../../static/sale.png",
          update_at: "2021-03-02T12:58:15+08:00",
          create_at: "2021-03-02T10:22:18+08:00",
        },
        {
          id: 6,
          category_id: "df314fa4-c91b-4f61-b35b-611714e440b3",
          category_name: "童装4",
          category_img: "../../static/sale.png",
          update_at: "2021-03-02T12:58:15+08:00",
          create_at: "2021-03-02T10:22:18+08:00",
        },
        {
          id: 7,
          category_id: "df314fa4-c91b-4f61-b35b-611714e440b3",
          category_name: "童装5",
          category_img: "../../static/sale.png",
          update_at: "2021-03-02T12:58:15+08:00",
          create_at: "2021-03-02T10:22:18+08:00",
        },
        {
          id: 8,
          category_id: "df314fa4-c91b-4f61-b35b-611714e440b3",
          category_name: "童装6",
          category_img: "../../static/sale.png",
          update_at: "2021-03-02T12:58:15+08:00",
          create_at: "2021-03-02T10:22:18+08:00",
        },
      ],
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
    // 获取轮播信息
    getSwiperInfo() {},

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
