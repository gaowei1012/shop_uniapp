<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-23 10:42:22
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-24 10:29:24
 * @Description: 
-->
<template>
  <view class="box">
    <template v-for="comment in commentArray">
      <view class="content-box" :key="comment.id">
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
              v-for="(child, index) in comment.pic"
              :key="index"
              :src="child"
              mode="scaleToFill"
              @click="clickImg(index)"
            />
          </view>
          <view class="deal-box">
            <view class="date">{{ comment.date }}</view>
            <van-icon class="iconfont icon-like" />
          </view>
        </view>
      </view>
    </template>

  </view>
</template>

<script>
export default {
  computed: {
    commentArray() {
      return this.carray;
    },
  },
  props: {
    carray: {
      type: Array,
      default: () => [],
    },
  },
  //方法集合
  methods: {
    // 预览图片
    clickImg(index) {
      //准备一个装图片路径的  数组imgs
      let urls = [];
      this.commentArray.forEach((value) => {
        if (value.pic !== undefined) {
          value.pic.forEach((item) => {
            urls.push(item);
          });
        }
      });
      //调用预览图片的方法
      uni.previewImage({
        urls,
        current: index,
      });
    },
  },
};
</script>
<style lang="less">
@import url("./index.less");
</style>
