<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-02 10:29:55
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-06 17:40:44
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
      <!-- 
      indicator-dots 是否展示面板指示点
      indicator-color	指示点颜色
      indicator-active-color 指示点当前选中颜色
      autoplay 是否自动切换
      interval 自动切换时间间隔
      duration 滑动动画时长
    -->
      <swiper
        class="swiper"
        :indicator-dots="true"
        indicator-color="rgba(255,255,255,1)"
        indicator-active-color="#F759AA"
        :autoplay="true"
        :interval="2000"
        :duration="500"
      >
        <swiper-item v-for="(item, index) in swiperArray" :key="index">
          <view class="swiper-item">{{ item }}</view>
        </swiper-item>
      </swiper>

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
          <van-image width="120rpx" height="120rpx" :src="sort.category_img" />
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
          <van-image width="100%" height="100%" src="../../static/sale.png" />
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
            <van-image width="140rpx" height="140rpx" :src="discount.src" />
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
            <van-image
              class="img"
              :src="hot.src"
              width="180rpx"
              height="180rpx"
              fit="fill"
            />
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
            <van-image
              class="image"
              :src="recommend.src"
              width="180rpx"
              height="180rpx"
            />
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
export default {
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
          category_img:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa0.att.hudong.com%2F30%2F29%2F01300000201438121627296084016.jpg&refer=http%3A%2F%2Fa0.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617367474&t=bb9858f82790be0b4775b40473b85dd4",
          update_at: "2021-03-02T12:58:15+08:00",
          create_at: "2021-03-02T10:22:18+08:00",
        },
        {
          id: 2,
          category_id: "df314fa4-c91b-4f61-b35b-611714e440b3",
          category_name: "童装1",
          category_img:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa0.att.hudong.com%2F30%2F29%2F01300000201438121627296084016.jpg&refer=http%3A%2F%2Fa0.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617367474&t=bb9858f82790be0b4775b40473b85dd4",
          update_at: "2021-03-02T12:58:15+08:00",
          create_at: "2021-03-02T10:22:18+08:00",
        },
        {
          id: 2,
          category_id: "df314fa4-c91b-4f61-b35b-611714e440b3",
          category_name: "童装1",
          category_img:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa0.att.hudong.com%2F30%2F29%2F01300000201438121627296084016.jpg&refer=http%3A%2F%2Fa0.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617367474&t=bb9858f82790be0b4775b40473b85dd4",
          update_at: "2021-03-02T12:58:15+08:00",
          create_at: "2021-03-02T10:22:18+08:00",
        },
        {
          id: 2,
          category_id: "df314fa4-c91b-4f61-b35b-611714e440b3",
          category_name: "童装2",
          category_img:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa0.att.hudong.com%2F30%2F29%2F01300000201438121627296084016.jpg&refer=http%3A%2F%2Fa0.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617367474&t=bb9858f82790be0b4775b40473b85dd4",
          update_at: "2021-03-02T12:58:15+08:00",
          create_at: "2021-03-02T10:22:18+08:00",
        },
        {
          id: 3,
          category_id: "df314fa4-c91b-4f61-b35b-611714e440b3",
          category_name: "童装3",
          category_img:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa0.att.hudong.com%2F30%2F29%2F01300000201438121627296084016.jpg&refer=http%3A%2F%2Fa0.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617367474&t=bb9858f82790be0b4775b40473b85dd4",
          update_at: "2021-03-02T12:58:15+08:00",
          create_at: "2021-03-02T10:22:18+08:00",
        },
        {
          id: 4,
          category_id: "df314fa4-c91b-4f61-b35b-611714e440b3",
          category_name: "童装4",
          category_img:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa0.att.hudong.com%2F30%2F29%2F01300000201438121627296084016.jpg&refer=http%3A%2F%2Fa0.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617367474&t=bb9858f82790be0b4775b40473b85dd4",
          update_at: "2021-03-02T12:58:15+08:00",
          create_at: "2021-03-02T10:22:18+08:00",
        },
        {
          id: 5,
          category_id: "df314fa4-c91b-4f61-b35b-611714e440b3",
          category_name: "童装5",
          category_img:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa0.att.hudong.com%2F30%2F29%2F01300000201438121627296084016.jpg&refer=http%3A%2F%2Fa0.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617367474&t=bb9858f82790be0b4775b40473b85dd4",
          update_at: "2021-03-02T12:58:15+08:00",
          create_at: "2021-03-02T10:22:18+08:00",
        },
        {
          id: 6,
          category_id: "df314fa4-c91b-4f61-b35b-611714e440b3",
          category_name: "童装6",
          category_img:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa0.att.hudong.com%2F30%2F29%2F01300000201438121627296084016.jpg&refer=http%3A%2F%2Fa0.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617367474&t=bb9858f82790be0b4775b40473b85dd4",
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
          id: 0,
          src: "../../static/sale.png",
          name: "修复精华水0",
          price: "68.9",
        },
        {
          id: 1,
          src: "../../static/sale.png",
          name: "修复精华水1",
          price: "68.9",
        },
        {
          id: 2,
          src: "../../static/sale.png",
          name: "修复精华水2",
          price: "68.9",
        },
        {
          id: 3,
          src: "../../static/sale.png",
          name: "修复精华水3",
          price: "68.9",
        },
        {
          id: 4,
          src: "../../static/sale.png",
          name: "修复精华水4",
          price: "68.9",
        },
      ],
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

    getSort() {
      request.getCategoryList().then((res) => {
        console.log(res);
        this.sortArray = res.data;
      });
    },
  },
};
</script>
<style lang="less" scoped>
@import url("./index.less");
</style>
