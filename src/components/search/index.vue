<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-25 17:25:14
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-25 18:23:40
 * @Description: 搜索组件
-->
<template>
  <van-search
    class="search-box"
    :disabled="disabled ? disabled : false"
    :background="background ? background : ''"
    :placeholder="placeholder ? placeholder : ''"
    @change="onChange"
    @search="onSearch"
  />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: () => "",
    },
  },
  data() {
    return {
      searchVal: "",
    };
  },
  //方法集合
  methods: {
    onChange(e) {
      const { detail } = e;
      this.$emit("changeSearch", detail);
    },
    onSearch() {
      this.$emit("onSearch");
    },
  },
};
</script>
<style lang="less"></style>
