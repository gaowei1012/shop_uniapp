<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-22 15:59:15
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-24 15:07:09
 * @Description: 商品详情页
-->
<template>
  <view class="detail-container">
    <swiper-box :options="options" :swiperArray="swiperArray" />
    <view class="introduce-box">
      <view class="price-box ">
        <text class="new_price">￥{{ introduceObj.new_price }}</text>
        <text class="old_price text-decoration-through"
          >￥{{ introduceObj.old_price }}</text
        >
      </view>
      <view class="name">{{ introduceObj.name }}</view>
      <view class="info">
        <view class="origin">{{ introduceObj.origin }}品牌</view>
        <view class="flex">
          <view class="taxes">税费:{{ introduceObj.taxes }}</view>
          <view class="sale">销量:{{ introduceObj.sale }}</view>
        </view>
      </view>
    </view>
    <view class="comment-box">
      <view class="title-box">
        <view class="title">商品评价({{ array.length }})</view>
        <view class="iconfont icon-right" @click="goCommentList" />
      </view>
      <comment-box :carray="array" />
    </view>
    <view class="product-box"></view>

    <van-goods-action>
      <van-goods-action-icon
        v-for="(item, index) in iconArray"
        :key="item.id"
        :icon="item.icon"
        :text="item.text"
        @click="onClickIcon(item)"
      />

      <van-goods-action-button
        v-for="deal in dealArray"
        :key="deal.id"
        :text="deal.text"
        :color="deal.color"
        :plain="deal.plan ? deal.plan : false"
        @click="onClickButton(deal)"
      />
    </van-goods-action>
  </view>
</template>

<script>
import swiperBox from "components/swiper/index";
import commentBox from "./comment/index";
export default {
  components: { swiperBox, commentBox },

  data() {
    return {
      options: {
        doots: true,
        color: "#ddd",
        activeColor: "#F65AAB",
        autoplay: true,
        interval: "2000",
        duration: "500",
      },
      swiperArray: ["SA", "SB"],
      introduceObj: {
        new_price: 318,
        old_price: 419.0,
        name:
          "【香港直邮】SHU UEMURA/植村秀 轻透持妆小方瓶粉底液 35ml 674# 中调偏白",
        origin: "日本",
        taxes: "免税",
        sale: 23,
      },
      array: [
        {
          id: 0,
          img: "../../../static/sale.png",
          name: "子墨",
          rate: 5,
          comment: "这款产品口碑非常好，一次性囤了两支，一支已经在用了，很好用",
          level: "强烈推荐",
          date: "2020-11-07",
          pic: [
            "https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF",
            "https://t7.baidu.com/it/u=4198287529,2774471735&fm=193&f=GIF",
            "https://t7.baidu.com/it/u=1956604245,3662848045&fm=193&f=GIF",
          ],
          specification: "35ml",
        },
        {
          id: 1,
          img: "../../../static/sale.png",
          name: "子墨",
          rate: 5,
          comment: "这款产品口碑非常好，一次性囤了两支，一支已经在用了，很好用",
          level: "强烈推荐",
          date: "2020-11-07",
          specification: "35ml",
        },
        // {
        //   id: 2,
        //   img: "../../../static/sale.png",
        //   name: "子墨",
        //   rate: 5,
        //   comment: "这款产品口碑非常好，一次性囤了两支，一支已经在用了，很好用",
        //   level: "强烈推荐",
        //   date: "2020-11-07",
        //   specification: "35ml",
        // },
        // {
        //   id: 3,
        //   img: "../../../static/sale.png",
        //   name: "子墨",
        //   rate: 4,
        //   comment: "这款产品口碑非常好，一次性囤了两支，一支已经在用了，很好用",
        //   level: "强烈推荐",
        //   date: "2020-11-07",
        //   specification: "35ml",
        // },
        // {
        //   id: 4,
        //   img: "../../../static/sale.png",
        //   name: "子墨",
        //   rate: 5,
        //   comment: "这款产品口碑非常好，一次性囤了两支，一支已经在用了，很好用",
        //   level: "强烈推荐",
        //   date: "2020-11-07",
        //   specification: "35ml",
        // },
        // {
        //   id: 5,
        //   img: "../../../static/sale.png",
        //   name: "子墨",
        //   rate: 5,
        //   comment: "这款产品口碑非常好，一次性囤了两支，一支已经在用了，很好用",
        //   level: "强烈推荐",
        //   date: "2020-11-07",
        //   specification: "35ml",
        // },
        // {
        //   id: 6,
        //   img: "../../../static/sale.png",
        //   name: "子墨",
        //   rate: 5,
        //   comment: "这款产品口碑非常好，一次性囤了两支，一支已经在用了，很好用",
        //   level: "强烈推荐",
        //   date: "2020-11-07",
        //   specification: "35ml",
        // },
        // {
        //   id: 7,
        //   img: "../../../static/sale.png",
        //   name: "子墨",
        //   rate: 5,
        //   comment: "这款产品口碑非常好，一次性囤了两支，一支已经在用了，很好用",
        //   level: "强烈推荐",
        //   date: "2020-11-07",
        //   specification: "35ml",
        // },
        // {
        //   id: 8,
        //   img: "../../../static/sale.png",
        //   name: "子墨",
        //   rate: 5,
        //   comment: "这款产品口碑非常好，一次性囤了两支，一支已经在用了，很好用",
        //   level: "强烈推荐",
        //   date: "2020-11-07",
        //   specification: "35ml",
        // },
        // {
        //   id: 9,
        //   img: "../../../static/sale.png",
        //   name: "子墨",
        //   rate: 5,
        //   comment: "这款产品口碑非常好，一次性囤了两支，一支已经在用了，很好用",
        //   level: "强烈推荐",
        //   date: "2020-11-07",
        //   specification: "35ml",
        // },
      ],
      iconArray: [
        { id: 0, icon: "chat-o", text: "客服" },
        { id: 1, icon: "like-o", text: "收藏" },
        { id: 2, icon: "shopping-cart-o", text: "购物单" },
      ],
      dealArray: [
        { id: 0, text: "加入购物袋", color: "#F759AB", plan: true },
        { id: 1, text: "立即购买", color: "#F759AB" },
      ],
    };
  },
  //方法集合
  methods: {
    onClickIcon(e) {
      console.log("点击图标", e);
    },
    onClickButton(e) {
      console.log("点击按钮", e);
    },
    goCommentList() {
      let obj = { ...this.array };
      console.log("obj==>", obj);
      obj.length = this.array.length;
      obj = encodeURIComponent(JSON.stringify(obj));
      uni.navigateTo({
        url: `/pages/detail/list/index?list=${obj}`,
      });
    },
  },
};
</script>
<style lang="less">
@import url("./index.less");
</style>
