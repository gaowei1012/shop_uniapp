<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-04-09 09:38:41
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-04-09 09:45:42
 * @Description: 倒计时组件
-->
<template>
  <tui-countdown
    :time="time"
    :days="is_show_days"
    :hours="is_show_hours"
    :minutes="is_show_minutes"
    :seconds="is_show_seconds"
    :isMs="is_show_isMs"
    :isColon="isColon"
    :borderColor="borderColor"
  />
</template>

<script>
export default {
  props: {
    time: {
      // 返回以秒结束的时间
      type: Object,
      default: {
        hours: 0,
        minute: 0,
        second: 0,
      },
    },
    is_show_days: {
      // 是否包含天
      type: Boolean,
      default: true,
    },
    is_show_hours: {
      // 是否包含小时
      type: Boolean,
      default: true,
    },
    is_show_minutes: {
      // 是否包含分钟
      type: Boolean,
      default: true,
    },
    is_show_seconds: {
      // 是否包含秒
      type: Boolean,
      default: true,
    },
    is_show_isMs: {
      // 是否包含毫秒
      type: Boolean,
      default: false,
    },
    isColon: {
      // 是否展示为冒号,false为文字
      type: Boolean,
      default: false,
    },
    borderColor: {
      // 边框颜色
      type: String,
      default: "#fff",
    },
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
