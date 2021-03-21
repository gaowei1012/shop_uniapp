<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-21 23:00:13
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-21 23:10:02
 * @Description: 封装轮播组件
-->
<template>
  <view class="swiper-container">
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
      :indicator-dots="options.doots"
      :indicator-color="options.color"
      :indicator-active-color="options.actioveColor"
      :autoplay="options.autoplay"
      :interval="options.interval"
      :duration="options.duration"
    >
      <swiper-item v-for="(item, index) in swiperArray" :key="index">
        <view class="swiper-item">{{ item }}</view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: () => {},
    },
    swiperArray: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
