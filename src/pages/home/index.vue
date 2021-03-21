<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-02 10:29:55
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-21 23:12:12
 * @Description: 首页
-->

<template>
  <view class="hone-container">
    <view class="search-box">
      <van-search
        v-model="searchVal"
        placeholder="请输入搜索关键词"
        @search="searchInfo"
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
      <view class="sale-box">
        <view class="title-box">
          <van-icon class="iconfont icon-sale" />
          <label class="title">品牌特卖</label>
          <label class="desc">一手活动信息在这里</label>
        </view>
        <view class="sale-img">
          <image src="../../static/sale.png" />
        </view>
        <view class="desc">{{ saleObj.desc }}</view>
        <view class="time">活动时间：{{ saleObj.time }}</view>
      </view>
      <!-- 今日折扣 -->
      <view class="discount-box ">
        <view class="title-box">
          <view class="left">
            <van-icon class="iconfont icon-discount" />
            <view class="title">今日折扣</view>
            <view class="desc">拼手速的时候到了</view>
          </view>
          <view class="right">立即抢购</view>
        </view>
        <view class="content-box">
          <view
            class="box"
            v-for="discount in discountArray"
            :key="discount.id"
          >
            <image style="width:140rpx;height:140rpx" :src="discount.src" />
            <view class="new-price color-f7c659"
              >￥{{ discount.new_price }}</view
            >
            <view class="old-price color-bfbfbf"
              >￥{{ discount.old_price }}</view
            >
          </view>
        </view>
      </view>
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
import request from "../../api/index";
import swiperBox from "@c/swiper/index";
export default {
  components: { swiperBox },
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
      saleObj: {
        desc: "阿玛尼品牌专场",
        time: "2020/11/16 - 2020/11/20",
      },
      discountArray: [
        {
          id: 0,
          old_price: "29.9",
          new_price: "58",
          src: "../../static/sale.png",
        },
        {
          id: 1,
          old_price: "29.9",
          new_price: "58",
          src: "../../static/sale.png",
        },
        {
          id: 2,
          old_price: "29.9",
          new_price: "58",
          src: "../../static/sale.png",
        },
        {
          id: 3,
          old_price: "29.9",
          new_price: "58",
          src: "../../static/sale.png",
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
    // this.getSort();
  },
  //方法集合
  methods: {
    searchInfo(e) {
      const { detail } = e;
      console.log("searchInfo==>", detail);
    },

    getSort() {
      request.getCategoryList().then((res) => {
        this.sortArray = res.data;
      });
    },
  },
};
</script>
<style lang="less">
@import url("./index.less");
</style>
