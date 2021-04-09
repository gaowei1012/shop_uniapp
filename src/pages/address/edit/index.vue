<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-18 21:04:27
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-04-09 14:39:16
 * @Description: 添加地址
-->
<template>
  <view class="editAddress-container">
    <input-val
      :form="form"
      :array="array"
      :errMsg="errmsg"
      @changeInput="enterVal"
      @blurInput="blurInput"
    />

    <view class="btn-box">
      <van-button class="btn" type="primary" @click="submitForm"
        >提交</van-button
      >
      <van-button class="btn" type="primary" @click="deleteForm"
        >删除</van-button
      >
    </view>
    <van-toast id="van-toast" />
    <van-dialog id="van-dialog" />
  </view>
</template>

<script>
import inputVal from "components/input/index";
import validator from "validator";
import tool from "@/utils/tool";
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
          model: "receiver",
          max: 8,
        },
        {
          id: 1,
          name: "手机号码",
          placeholder: "请输入手机号码",
          model: "phone",
          max: 11,
        },
        {
          id: 2,
          name: "所在地区",
          placeholder: "请输入所在地区",
          model: "province_city",
        },
        {
          id: 3,
          name: "详细地址",
          placeholder: "请输入详细地址",
          model: "address_details",
        },
      ],
      form: {
        receiver: "",
        phone: "",
        province_city: "",
        address_details: "",
      },
    };
  },
  //页面加载,上一个页面传值的options
  onLoad(options) {
    const { key } = options;
    this.form = Object.assign(this.form, JSON.parse(key));
  },
  //方法集合
  methods: {
    enterVal(type, e) {
      if (type === "收货人") {
        this.form.receiver = e;
      } else if (type === "手机号码") {
        this.form.phone = e;
      } else if (type === "所在地区") {
        this.form.province_city = e;
      } else {
        this.form.address_details = e;
      }
    },
    // 提交表单
    submitForm() {
      if (!this.form.receiver) {
        this.errmsg = "请输入用户名";
        return;
      }
      if (!this.form.phone) {
        this.errmsg = "请输入手机号";
        return;
      }
      if (!validator.isMobilePhone(this.form.phone, "zh-CN")) {
        this.errmsg = "请输入正确格式的手机号";
        return;
      }
      if (!this.form.province_city) {
        this.errmsg = "请输入所在地区";
        return;
      }
      if (!this.form.address_details) {
        this.errmsg = "请输入详细地址";
        return;
      }
      this.errmsg = "";
      this.form.user_id = tool.getItem("user_id");
      console.log("submitForm==>", this.form);

      this.$api.user.editAddress(this.form).then(() => {
        this.$toast("编辑成功", "success");
      });
    },
    // 删除信息
    deleteForm() {
      this.$confirm("是否准备删除").then(() => {
        this.$api.user.deleteAddress(tool.getItem("user_id")).then(() => {
          this.$toast("删除成功", "success");
        });
      });
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
<style lang="less" scoped>
@import url("./index.less");
/deep/ .form-item {
  display: flex;
  .title {
    flex: 3;
  }
  .input {
    flex: 7;
  }
}

/deep/ .btn-box {
  width: 80%;
  position: fixed;
  left: 5%;
  bottom: 10%;
  .btn {
    button {
      width: 100%;
      margin: 0 42rpx !important;
      border: none;
      border-radius: 20rpx;
    }
  }
  .btn:first-child {
    button {
      margin-bottom: 20rpx !important;
      background-color: #f759ab !important;
    }
  }
  .btn:last-child {
    button {
      background-color: #bfbfbf !important;
    }
  }
}
</style>
