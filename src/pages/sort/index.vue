<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-02 10:57:56
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-17 22:06:38
 * @Description: 分类
-->
<template>
  <view class="sort-container">
    <van-search
      v-model="searchVal"
      placeholder="搜索商品"
      @search="searchInfo"
    />

    <view class="container">
      <!-- 
      main-active-index	左侧选中项的索引 ==> number
      active-id	右侧选中项的索引，支持传入数组 ==> string | number | Array
     -->
      <!-- #ifdef MP-WEIXIN -->
      <van-tree-select
        class="tree"
        :items="items"
        :main-active-index="mainActiveIndex"
        :active-id="activeId"
        @click-nav="onClickNav"
        @click-item="onClickItem"
      >
        <template slot="content">
          <image
            :src="introducedImg"
            mode="scaleToFill"
            style="width:500rpx;height:180rpx;"
          />
          <view class="content-box" v-for="item in typeArray" :key="item.id">
            <view class="title">{{ item.text }}</view>
            <view class="content flex flex-warp">
              <view class="box" v-for="child in item.children" :key="child.id">
                <image :src="child.src" mode="scaleToFill" />
                <view>{{ child.text }}</view>
              </view>
            </view>
          </view>
        </template>
      </van-tree-select>
      <!-- #endif -->
      <!-- #ifdef APP-PLUS -->
      <view class="flex">
        <view class="left-box">
          <template v-for="(items, index) in items">
            <view class="box" :class="" :key="index" @click="clickNav(items)">{{
              items.text
            }}</view>
          </template>
        </view>
        <view class="right-box">
          <image
            :src="introducedImg"
            mode="scaleToFill"
            style="width:500rpx;height:180rpx;"
          />
          <view class="content-box" v-for="item in typeArray" :key="item.id">
            <view class="title">{{ item.text }}</view>
            <view class="content flex flex-warp">
              <view class="box" v-for="child in item.children" :key="child.id">
                <image :src="child.src" mode="scaleToFill" />
                <view>{{ child.text }}</view>
              </view>
            </view>
          </view>
        </view>
      </view>
      <!-- #endif -->
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      searchVal: "",
      mainActiveIndex: 0,
      activeId: 1,
      activeKey: 0,
      introducedImg: "https://img.yzcdn.cn/vant/apple-1.jpg",
      items: [
        {
          text: "所有城市",
        },
        {
          text: "所有城市1",
        },
        {
          text: "所有城市2",
        },
        {
          text: "所有城市3",
        },
        {
          text: "所有城市4",
        },
        {
          text: "所有城市5",
        },
      ],

      typeArray: [
        {
          id: 0,
          text: "美妆护肤1",
          children: [
            {
              id: "11",
              src: "https://img.yzcdn.cn/vant/apple-1.jpg",
              text: "SKII神仙水",
            },
            {
              id: "22",
              src: "https://img.yzcdn.cn/vant/apple-1.jpg",
              text: "SKII神仙水1",
            },
            {
              id: "33",
              src: "https://img.yzcdn.cn/vant/apple-1.jpg",
              text: "SKII神仙水2",
            },
            {
              id: "44",
              src: "https://img.yzcdn.cn/vant/apple-1.jpg",
              text: "SKII神仙水2",
            },
            {
              id: "55",
              src: "https://img.yzcdn.cn/vant/apple-1.jpg",
              text: "SKII神仙水2",
            },
            {
              id: "66",
              src: "https://img.yzcdn.cn/vant/apple-1.jpg",
              text: "SKII神仙水2",
            },
            {
              id: "77",
              src: "https://img.yzcdn.cn/vant/apple-1.jpg",
              text: "SKII神仙水2",
            },
            {
              id: "88",
              src: "https://img.yzcdn.cn/vant/apple-1.jpg",
              text: "SKII神仙水2",
            },
            {
              id: "99",
              src: "https://img.yzcdn.cn/vant/apple-1.jpg",
              text: "SKII神仙水2",
            },
            {
              id: "100",
              src: "https://img.yzcdn.cn/vant/apple-1.jpg",
              text: "SKII神仙水2",
            },
            {
              id: "110",
              src: "https://img.yzcdn.cn/vant/apple-1.jpg",
              text: "SKII神仙水2",
            },
          ],
        },
        {
          id: 1,
          text: "美妆护肤1",
          children: [
            {
              id: "111",
              src: "https://img.yzcdn.cn/vant/apple-1.jpg",
              text: "SKII神仙水",
            },
            {
              id: "222",
              src: "https://img.yzcdn.cn/vant/apple-1.jpg",
              text: "SKII神仙水1",
            },
            {
              id: "333",
              src: "https://img.yzcdn.cn/vant/apple-1.jpg",
              text: "SKII神仙水2",
            },
            {
              id: "444",
              src: "https://img.yzcdn.cn/vant/apple-1.jpg",
              text: "SKII神仙水2",
            },
            {
              id: "555",
              src: "https://img.yzcdn.cn/vant/apple-1.jpg",
              text: "SKII神仙水2",
            },
            {
              id: "666",
              src: "https://img.yzcdn.cn/vant/apple-1.jpg",
              text: "SKII神仙水2",
            },
            {
              id: "777",
              src: "https://img.yzcdn.cn/vant/apple-1.jpg",
              text: "SKII神仙水2",
            },
            {
              id: "888",
              src: "https://img.yzcdn.cn/vant/apple-1.jpg",
              text: "SKII神仙水2",
            },
            {
              id: "999",
              src: "https://img.yzcdn.cn/vant/apple-1.jpg",
              text: "SKII神仙水2",
            },
            {
              id: "1000",
              src: "https://img.yzcdn.cn/vant/apple-1.jpg",
              text: "SKII神仙水2",
            },
            {
              id: "1010",
              src: "https://img.yzcdn.cn/vant/apple-1.jpg",
              text: "SKII神仙水2",
            },
          ],
        },
      ],
      mainActiveIndex: 0,
      activeId: null,
    };
  },
  created() {
    // this.getData();
    console.log(
      "treeData==>",
      this.items,
      Object.prototype.toString.call(this.items)
    );
  },
  mounted() {
    // const element = document.getElementsByClassName("right-box");
    // console.log("element==>", element);
  },
  //方法集合
  methods: {
    onClickNav(e = {}) {
      const { detail } = e;
      console.log("onClickNav==>detail", detail);
      this.mainActiveIndex = detail.index || 0;
      // this.typeArray.push(...this.typeArray);
    },

    clickNav(e) {
      const { text } = e;
      console.log("点击到左侧栏了:", text);
    },

    onClickItem(e) {
      const { detail } = e;
      console.log("onClickItem==>detail", detail);
      this.activeId = detail.id;
    },

    searchInfo(e) {
      const { detail } = e;
      console.log("searchInfo==>", detail);
    },
  },
};
</script>
<style lang="less">
@import url("./index.less");
</style>
