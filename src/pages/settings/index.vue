<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-25 15:19:45
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-25 15:48:07
 * @Description: 设置
-->
<template>
  <view class="settings-container">
    <view class="info-box">
      <view class="box">
        <view>头像</view>
        <image class="avatar" src="../../static/sale.png" mode="scaleToFill" />
      </view>
      <view class="box">
        <text>昵称</text>
        <view class="flex">
          <text>子墨</text>
          <van-icon class="iconfont icon-right" />
        </view>
      </view>
    </view>
    <view class="btn">退出登录</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      infoArray: [],
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
  methods: {},
};
</script>
<style lang="less">
@import url("./index.less");
</style>
