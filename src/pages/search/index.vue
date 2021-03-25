<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-25 17:07:53
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-25 22:01:29
 * @Description: 搜索
-->
<template>
  <view class="search-container">
    <searchVal
      v-model="searchVal"
      :placeholder="'请输入搜索关键词'"
      @changeSearch="changeSearch"
      @onSearch="onSearch"
    />
    <view class="hot-box">
      <view class="title">热搜</view>
      <view class="content-box">
        <view class="box" v-for="(hot, index) in hotArray" :key="index">
          {{ hot }}
        </view>
      </view>
    </view>
    <view class="history-box">
      <view class="title-box">
        <view class="title">历史搜索</view>
        <view class="clear">
          <van-icon class="iconfont icon-delete" />
          清空</view
        >
      </view>
      <view class="content-box">
        <view class="box" v-for="(hot, index) in hotArray" :key="index">
          {{ hot }}
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import searchVal from "components/search/index";
export default {
  components: {
    searchVal,
  },
  data() {
    return {
      searchVal: "",
      hotArray: [
        "迪奥",
        "阿玛尼",
        "SK2神仙水",
        "圣罗兰小金条",
        "雅诗兰黛小棕瓶",
        "香水",
        "海蓝之谜",
        "法国兰蔻雅诗兰黛小棕瓶",
      ],
      historyArray: [
        "迪奥",
        "阿玛尼",
        "SK2神仙水",
        "圣罗兰小金条",
        "雅诗兰黛小棕瓶",
        "香水",
        "海蓝之谜",
        "法国兰蔻雅诗兰黛小棕瓶",
      ],
    };
  },
  //方法集合
  methods: {
    changeSearch(e) {
      this.searchVal = e;
      // console.log("searchVal==>", this.searchVal);
    },
    onSearch() {
      console.log(this.searchVal);
    },
  },
};
</script>
<style lang="less">
@import url("./index.less");
</style>
