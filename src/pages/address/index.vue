<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-11 21:02:02
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-04-04 18:29:52
 * @Description: 地址列表
-->

<template>
  <view class="address-container">
    <view class="content-box">
      <template v-if="addressArray.length > 0">
        <view class="box" v-for="item in addressArray" :key="item.address_id">
          <view>
            <text class="name">{{ item.receiver }}</text>
            <text class="mobile">{{ item.phone }}</text>
            <text class="default" v-if="checked == item.address_id">默认</text>
          </view>
          <view class="address">{{ item.address_details }}</view>
          <view class="edit-box flex justify-content-between">
            <van-radio
              :value="checked"
              :name="item.address_id"
              checked-color="#f759ab"
              @click.native="clickRadio(item.address_id)"
              >设置为默认地址</van-radio
            >
            <view class="edit" @click="editAddaddress(item)">
              <van-icon class="iconfont icon-edit" />
              <text>编辑</text>
            </view>
          </view>
        </view>
      </template>
      <template v-else>
        <image class="margin-top-107" src="../../static/img/no-address.png" />
        <view class="no-info">暂无任何地址</view>
      </template>
    </view>
    <van-button class="btn" @click="goAddaddress">添加地址</van-button>
    <van-toast id="van-toast" />
  </view>
</template>

<script>
import tool from "@/utils/tool";
export default {
  data() {
    return {
      checked: undefined,
      addressArray: [
        {
          id: 0,
          name: "子墨",
          mobile: "15919698695",
          address: "江西省赣州市章贡区",
          addressDetail: "江西省赣州市章贡区江西蓉吟贸易有限公司",
        },
        {
          id: 1,
          name: "子墨1",
          mobile: "15919698695",
          address: "江西省赣州市章贡区",
          addressDetail: "江西省赣州市章贡区江西蓉吟贸易有限公司",
        },
        {
          id: 2,
          name: "子墨2",
          mobile: "15919698695",
          address: "江西省赣州市章贡区",
          addressDetail: "江西省赣州市章贡区江西蓉吟贸易有限公司",
        },
        {
          id: 3,
          name: "子墨3",
          mobile: "15919698695",
          address: "江西省赣州市章贡区",
          addressDetail: "江西省赣州市章贡区江西蓉吟贸易有限公司",
        },
        {
          id: 4,
          name: "子墨4",
          mobile: "15919698695",
          address: "江西省赣州市章贡区",
          addressDetail: "江西省赣州市章贡区江西蓉吟贸易有限公司",
        },
        {
          id: 5,
          name: "子墨5",
          mobile: "15919698695",
          address: "江西省赣州市章贡区",
          addressDetail: "江西省赣州市章贡区江西蓉吟贸易有限公司",
        },
        {
          id: 6,
          name: "子墨6",
          mobile: "15919698695",
          address: "江西省赣州市章贡区",
          addressDetail: "江西省赣州市章贡区江西蓉吟贸易有限公司",
        },
        {
          id: 7,
          name: "子墨7",
          mobile: "15919698695",
          address: "江西省赣州市章贡区",
          addressDetail: "江西省赣州市章贡区江西蓉吟贸易有限公司",
        },
      ],
    };
  },
  created() {
    this.checked = 0;
    this.getAddress();
  },
  //方法集合
  methods: {
    // 获取地址列表
    getAddress() {
      const user_id = tool.getItem("user_id");
      if (!user_id) {
        this.$toast("请先去登录", "fail");
        return;
      }
      this.$api.user.getAddressList(user_id).then((res) => {
        this.addressArray.length = 0;
        this.addressArray = res.data;
      });
    },

    // 切换点击radio
    clickRadio(e) {
      this.checked = e;
    },
    // 跳转添加收货地址
    goAddaddress() {
      uni.navigateTo({ url: "/pages/address/add/index" });
    },
    // 跳转编辑收货地址
    editAddaddress(e) {
      e = JSON.stringify(e);
      uni.navigateTo({ url: `/pages/address/edit/index?key=${e}` });
    },
  },
};
</script>
<style lang="less" scoped>
@import url("./index.less");
</style>
