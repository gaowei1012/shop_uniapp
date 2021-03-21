<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-18 21:58:58
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-21 08:06:46
 * @Description: 封装input
-->
<template>
  <view class="input-container">
    <form>
      <view class="form-item" v-for="item in array" :key="item.id">
        <view class="title">{{ item.name }}</view>
        <view class="input">
          <input
            v-model="form[item.model]"
            :type="item.inputType ? item.inputType : 'text'"
            :placeholder="item.placeholder ? item.placeholder : ''"
            :disabled="item.disabled ? item.disabled : false"
            placeholder-class="placeholderClass"
            @input="changeInput($event, item.name)"
            @click="clickInput(item.name)"
            @blur="blurInput($event, item.name)"
          />
        </view>

        <slot />
      </view>
      <label class="msg color-ED2324">{{ errmsg }}</label>
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
  data() {
    return {
      errmsg: "",
    };
  },
  //方法集合
  methods: {
    clickInput(e) {
      this.$emit("clickInput", e);
    },
    changeInput(e, name) {
      const { value } = e.detail;
      this.$emit("changeInput", name, value);
    },
    blurInput(e, name) {
      const { value } = e.detail;
      if (!value) {
        this.errmsg = "请输入" + name + "的值";
      }
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
