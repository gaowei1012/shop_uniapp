<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-18 21:04:27
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-21 18:32:16
 * @Description: 添加地址
-->
<template>
  <view class="addAddress-container">
    <!-- <view class="title">添加地址</view> -->
    <input-val
      :form="form"
      :array="array"
      :errMsg="errmsg"
      @changeInput="enterVal"
      @blurInput="blurInput"
    />

    <van-button class="btn" type="primary" @click="submitForm">提交</van-button>
  </view>
</template>

<script>
import inputVal from "../../../components/input";
import validator from "validator";
export default {
  components: {
    inputVal,
  },
  data() {
    return {
      errmsg: "",
      array: [
        {
          id: 0,
          name: "收货人",
          placeholder: "请输入收货人",
          model: "name",
          max: 8,
        },
        {
          id: 1,
          name: "手机号码",
          placeholder: "请输入手机号码",
          model: "mobile",
          max: 11,
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

      if (!e) {
        this.errmsg = `请输入${type}的信息`;
      } else if (type.includes("手机号")) {
        if (e.length < 11) {
          this.errmsg = "请输入11位数手机号";
        } else if (!validator.isMobilePhone(e, "zh-CN")) {
          this.errmsg = "请输入正确格式的手机号";
        }
      } else {
        this.errmsg = "";
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
    // 失去焦点验证
    blurInput(value, name) {
      if (!value) {
        this.errmsg = `请输入${name}的信息`;
      } else if (name.includes("手机号")) {
        if (value.length < 11) {
          this.errmsg = "请输入11位数手机号";
        } else if (!validator.isMobilePhone(value, "zh-CN")) {
          this.errmsg = "请输入正确格式的手机号";
        }
      } else {
        this.errmsg = "";
      }
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
