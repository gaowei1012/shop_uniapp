<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-02 10:57:56
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-07 15:45:45
 * @Description: 分类
-->
<template>
  <view class="sort-container">
    <van-search
      v-model="searchVal"
      placeholder="搜索商品"
      @search="searchInfo"
    />

    <van-tree-select
      class="tree"
      :items="treeData"
      :main-active-index="mainActiveIndex"
      :active-id="activeId"
      @click-nav="onClickNav"
      @click-item="onClickItem"
    >
      <template class="content-box" slot="content">
        <van-image
          class="img"
          :src="introducedImg"
          width="500rpx"
          height="180rpx"
          style="margin-top:18rpx;"
        />
        <view v-for="item in typeArray" :key="item.id">
          <view class="title">{{ item.text }}</view>
          <view class="content flex">
            <view class="box" v-for="child in item.children" :key="child.id">
              <van-image
                :src="child.src"
                width="140rpx"
                height="140rpx"
                fit="contain"
              />
              <view>{{ child.text }}</view>
            </view>
          </view>
        </view>
      </template>
    </van-tree-select>
  </view>
</template>

<script>
export default {
  data() {
    return {
      searchVal: "",
      introducedImg: "https://img.yzcdn.cn/vant/apple-1.jpg",
      treeData: [
        {
          id: 0,
          // 导航名称
          text: "所有城市",
          // 禁用选项
          disabled: false,
          // 该导航下所有的可选项
        },
        {
          id: 1,
          // 导航名称
          text: "所有城市1",
          // 禁用选项
          disabled: false,
          // 该导航下所有的可选项
        },
      ],
      typeArray: [
        {
          id: 0,
          text: "美妆护肤",
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
              id: "33",
              src: "https://img.yzcdn.cn/vant/apple-1.jpg",
              text: "SKII神仙水2",
            },
            // {
            //   id: "33",
            //   src: "https://img.yzcdn.cn/vant/apple-1.jpg",
            //   text: "SKII神仙水2",
            // },
          ],
        },
      ],
      mainActiveIndex: 0,
      activeId: null,
    };
  },
  onLoad() {},
  //方法集合
  methods: {
    onClickNav(e = {}) {
      const { detail } = e;
      this.mainActiveIndex = detail.index || 0;
      this.typeArray.push(...this.typeArray);
    },

    onClickItem(e) {
      const { detail } = e;
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
