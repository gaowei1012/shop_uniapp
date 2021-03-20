<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-18 21:04:27
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-20 13:22:08
 * @Description: 添加地址
-->
<template>
  <view class="addAddress-container">
    <!-- <view class="title">添加地址</view> -->
    <input-val
      :form="form"
      :array="array"
      @changeInput="enterVal"
      @formSubmit="formSubmit"
      @clickInput="clickInput"
    >
      <!-- TODO:省市区选择 -->
      <!-- <van-area :area-list="areaList" value="110101" /> -->
      <van-button type="primary" @click="submitForm">提交</van-button>
      <van-button type="default" @click="resetForm">清空</van-button>
    </input-val>
  </view>
</template>

<script>
import inputVal from "../../../components/input";
export default {
  components: { inputVal },
  data() {
    return {
      areaList: {
        province_list: {
          110000: "北京市",
          120000: "天津市",
        },
        city_list: {
          110100: "北京市",
          110200: "县",
          120100: "天津市",
          120200: "县",
        },
        county_list: {
          110101: "东城区",
          110102: "西城区",
          110105: "朝阳区",
          110106: "丰台区",
          120101: "和平区",
          120102: "河东区",
          120103: "河西区",
          120104: "南开区",
          120105: "河北区",
        },
      },

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
    // 点击input框
    clickInput(e) {},
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
