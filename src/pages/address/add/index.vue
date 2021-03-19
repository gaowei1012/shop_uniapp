<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-18 21:04:27
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-19 10:56:19
 * @Description: 添加地址
-->
<template>
  <view class="addAddress-container">
    <!-- <view class="title">添加地址</view> -->
    <input-val
      v-model="form.name"
      :name="'收货人'"
      :label="'收货人'"
      :placeholder="'请输入收货人'"
      :required="true"
      :border="true"
      @enterVal="enterVal"
    />
    <!-- <input-val
      v-model="form.mobile"
      :name="'手机号'"
      :label="'手机号'"
      :placeholder="'请输入手机号'"
      :required="true"
      :border="true"
      :type="'number'"
      :errorMessage="mobileMsg"
      @enterVal="enterVal"
    /> -->
    <!-- TODO:省市区选择 -->
    <!-- <van-area area-list="{{ areaList }}" value="110101" /> -->
    <!-- <input-val
      v-model="form.addressDetail"
      :name="'详细地址'"
      :label="'详细地址'"
      :placeholder="'请输入详细地址'"
      :required="true"
      :border="true"
      :errorMessage="addressDetailMsg"
      @enterVal="enterVal"
    /> -->
  </view>
</template>

<script>
import inputVal from "../../../components/input";
export default {
  components: { inputVal },
  data() {
    return {
      areaList: {},
      form: {
        name: "",
        mobile: "",
        address: "",
        addressDetail: "",
      },
    };
  },
  //方法集合
  methods: {
    enterVal(type, e) {
      if (type === "收货人") {
        this.form.name = e;
      } else if (type === "手机号码") {
        this.form.mobile = e;
      } else {
        this.form.addressDetail = e;
      }
    },
  },
};
</script>
<style lang="less">
@import url("./index.less");
</style>
