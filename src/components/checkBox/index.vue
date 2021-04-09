<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-04-09 22:03:01
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-04-09 22:03:01
 * @Description: 
-->
<template>
  <van-checkbox-group :value="is_checked">
    <slot />
    <van-checkbox :name='item.id'>{{ text }}</van-checkbox>
  </van-checkbox-group>
  <!-- <view class='-container'></view> -->
</template>

<script>
export default {
  data() {
    return {};
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
<style lang="less"></style>
