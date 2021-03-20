<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-18 21:04:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-20 22:07:41
 * @Description: 添加地址
-->
<template>
  <view class="addAddress-container" id="app">
    <!-- <view class="title">添加地址</view> -->
    <input-val
      :form="form"
      :array="array"
      @changeInput="enterVal"
      @formSubmit="formSubmit"
      @clickInput="clickInput"
    >
      <!-- TODO:省市区选择 -->
      <!-- -->
      <van-button type="primary" @click="submitForm">提交</van-button>
      <van-button type="default" @click="resetForm">清空</van-button>
    </input-val>
    <!-- 选择地区 -->
    <address-selector @change="addressSelector">{{txt}}</address-selector>
  </view>
</template>

<script>
import inputVal from "../../../components/input";
import addressSelector from "../../../components/address";
export default {
  components: { 
    inputVal,
    addressSelector,
    },
  data() {
    return {
       txt: '选择地址',
      array: [
        {
          name: "收货人",
          placeholder: "请输入收货人",
          model: "name",
        },
        {
          name: "手机号码",
          placeholder: "请输入手机号码",
          model: "mobile",
        },
        {
          name: "所在地区",
          placeholder: "请输入所在地区",
          model: "address",
          disabled: true,
        },
        {
          name: "详细地址",
          placeholder: "请输入详细地址",
          model: "addressDetail",
        },
      ],

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
      } else if (type === "所在地区") {
        this.form.address = e;
      } else {
        this.form.addressDetail = e;
      }
    },
    // 提交表单
    submitForm() {
      console.log("submitForm==>", this.form);
    },
    // 重置form表单
    resetForm() {
      this.form = {
        name: "",
        mobile: "",
        address: "",
        addressDetail: "",
      };
    },
    // 获取选择地址data
    addressSelector(data) {
      console.log('data ===>>>', data)
    },
  },
};
</script>
<style lang="less">
@import url("./index.less");
.form-item {
  display: flex;
  .title {
    flex: 3;
  }
  .input {
    flex: 7;
  }
}
</style>
