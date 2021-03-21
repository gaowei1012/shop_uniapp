<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-18 21:04:27
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-21 07:58:39
 * @Description: 添加地址
-->
<template>
  <view class="addAddress-container">
    <!-- <view class="title">添加地址</view> -->
    <input-val :form="form" :array="array" @changeInput="enterVal" />

    <van-button class="btn" type="primary" @click="submitForm">提交</van-button>
  </view>
</template>

<script>
import inputVal from "../../../components/input";

export default {
  components: {
    inputVal,
  },
  data() {
    return {
      txt: "选择地址",
      array: [
        {
          id: 0,
          name: "收货人",
          placeholder: "请输入收货人",
          model: "name",
        },
        {
          id: 1,
          name: "手机号码",
          placeholder: "请输入手机号码",
          model: "mobile",
        },
        {
          id: 2,
          name: "所在地区",
          placeholder: "请输入所在地区",
          model: "address",
        },
        {
          id: 3,
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
.btn {
  button {
    width: 80%;
    margin: 0 42rpx;
    position: fixed;
    left: 5%;
    bottom: 10%;
    background-color: #f759ab;
    border: none;
  }
}
</style>
