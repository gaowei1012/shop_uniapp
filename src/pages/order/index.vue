<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-26 10:48:33
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-26 12:08:25
 * @Description: 订单中心
-->
<template>
  <view class="order-container">
    <van-tabs :active="active" @change="changeTabs">
      <van-tab v-for="(tabs, index) in tabsArray" :key="tabs" :title="tabs">
        <all v-show="active === 0" />
        <pay v-show="active === 1" />
        <ship v-show="active === 2" />
        <receipt v-show="active === 3" />
        <evaluation v-show="active === 4" />
      </van-tab>
    </van-tabs>
  </view>
</template>

<script>
import all from "./all/index";
import pay from "./pay/index";
import ship from "./ship/index";
import receipt from "./receipt/index";
import evaluation from "./evaluation/index";
export default {
  components: { all, pay, ship, receipt, evaluation },
  data() {
    return {
      active: 0,
      tabsArray: ["全部", "待付款", "待发货", "待收货", "待评价"],
    };
  },
  //页面加载,上一个页面传值的options
  onLoad(options) {},
  //监听页面显示
  onShow() {},
  //监听页面初次渲染完成
  onReady() {},
  //监听页面隐藏
  onHide() {},
  //监听页面卸载
  onUnload() {},
  //方法集合
  methods: {
    changeTabs(e) {
      const { name } = e.detail;
      this.active = name;
    },
  },
};
</script>
<style lang="less">
@import url("./index.less");
</style>
