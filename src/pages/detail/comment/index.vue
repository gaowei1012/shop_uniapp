<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-23 10:42:22
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-23 11:32:34
 * @Description: 
-->
<template>
  <view class="box" v-for="comment in commentArray" :key="comment.id">
    <div class="content-box">
      <view class="img">
        <image :src="comment.img" mode="scaleToFill" />
      </view>
      <view class="content">
        <view class="name-box">
          <view class="name">{{ comment.name }}</view>
          <van-rate
            class="rate"
            size="12"
            color="#FFA940"
            :value="comment.rate"
          />
          <view class="level">{{ comment.level }}</view>
        </view>
        <view class="comment">{{ comment.comment }}</view>
        <view class="specification">规格:{{ comment.specification }}</view>
        <view class="img-box" v-if="comment.pic !== undefined">
          <image
            v-for="child in comment.pic"
            :key="child.id"
            :src="child.img"
            mode="scaleToFill"
          />
        </view>
        <div class="deal-box">
          <view class="date">{{ comment.date }}</view>
          <van-icon class="iconfont icon-like" />
        </div>
      </view>
    </div>
  </view>
</template>

<script>
export default {
  computed: {
    commentArray() {
      return this.array;
    },
  },
  data() {
    return {
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
            { id: 0, img: "../../../static/sale.png" },
            { id: 1, img: "../../../static/sale.png" },
            { id: 2, img: "../../../static/sale.png" },
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
        {
          id: 2,
          img: "../../../static/sale.png",
          name: "子墨",
          rate: 5,
          comment: "这款产品口碑非常好，一次性囤了两支，一支已经在用了，很好用",
          level: "强烈推荐",
          date: "2020-11-07",
          specification: "35ml",
        },
        {
          id: 3,
          img: "../../../static/sale.png",
          name: "子墨",
          rate: 4,
          comment: "这款产品口碑非常好，一次性囤了两支，一支已经在用了，很好用",
          level: "强烈推荐",
          date: "2020-11-07",
          specification: "35ml",
        },
        {
          id: 4,
          img: "../../../static/sale.png",
          name: "子墨",
          rate: 5,
          comment: "这款产品口碑非常好，一次性囤了两支，一支已经在用了，很好用",
          level: "强烈推荐",
          date: "2020-11-07",
          specification: "35ml",
        },
        {
          id: 5,
          img: "../../../static/sale.png",
          name: "子墨",
          rate: 5,
          comment: "这款产品口碑非常好，一次性囤了两支，一支已经在用了，很好用",
          level: "强烈推荐",
          date: "2020-11-07",
          specification: "35ml",
        },
        {
          id: 6,
          img: "../../../static/sale.png",
          name: "子墨",
          rate: 5,
          comment: "这款产品口碑非常好，一次性囤了两支，一支已经在用了，很好用",
          level: "强烈推荐",
          date: "2020-11-07",
          specification: "35ml",
        },
        {
          id: 7,
          img: "../../../static/sale.png",
          name: "子墨",
          rate: 5,
          comment: "这款产品口碑非常好，一次性囤了两支，一支已经在用了，很好用",
          level: "强烈推荐",
          date: "2020-11-07",
          specification: "35ml",
        },
        {
          id: 8,
          img: "../../../static/sale.png",
          name: "子墨",
          rate: 5,
          comment: "这款产品口碑非常好，一次性囤了两支，一支已经在用了，很好用",
          level: "强烈推荐",
          date: "2020-11-07",
          specification: "35ml",
        },
        {
          id: 9,
          img: "../../../static/sale.png",
          name: "子墨",
          rate: 5,
          comment: "这款产品口碑非常好，一次性囤了两支，一支已经在用了，很好用",
          level: "强烈推荐",
          date: "2020-11-07",
          specification: "35ml",
        },
      ],
    };
  },
  //方法集合
  methods: {},
};
</script>
<style lang="less">
@import url("./index.less");
</style>
