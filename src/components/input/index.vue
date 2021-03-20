<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-18 21:58:58
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-20 13:21:30
 * @Description: 封装input
-->
<template>
  <view class="input-container">
    <form>
      <view class="form-item" v-for="(item, index) in array" :key="index">
        <view class="title">{{ item.name }}</view>
        <view class="input">
          <input
            v-model="form[item.model]"
            :type="item.inputType ? item.inputType : 'text'"
            :placeholder="item.placeholder ? item.placeholder : ''"
            :readonly="item.readonly ? item.readonly : false"
            :disabled="item.disabled ? item.disabled : false"
            placeholder-class="placeholderClass"
            @input="changeInput"
            @click="clickInput(item.name)"
          />
          <label class="msg color-ED2324">{{ errMsg }}</label>
        </view>
      </view>
      <view class="form-item">
        <slot />
      </view>
    </form>
  </view>
</template>

<script>
export default {
  props: {
    array: {
      type: Array,
      default: () => [],
    },
    form: {
      type: Object,
      default: () => {},
    },
  },

  //方法集合
  methods: {
    clickInput(e) {
      console.log("e==>", e);
      this.$emit("clickInput", e);
    },
    changeInput(e) {
      const { value } = e.detail;
      this.$emit("changeInput", this.name, value);
    },
  },
};
</script>
<style lang="less">
.msg {
  padding-top: 24rpx;
  font-size: 24rpx;
}
</style>
