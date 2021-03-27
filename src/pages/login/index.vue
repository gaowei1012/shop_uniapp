<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-27 17:55:11
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-27 20:20:29
 * @Description: 登录
-->
<template>
  <view class="login-box">
    <!-- TODO: -->
    <template v-if="token || Object.keys(userInfo).length > 0">
      <image class="avatar" fit="cover" :src="userInfo.avatarUrl" />
      <view class="name">{{ userInfo.nickName }}</view>
    </template>
    <template v-else>
      <image src="../../static/img/no-login.png" mode="scaleToFill" />
      <van-button
        class="btn"
        type="default"
        open-type="getUserInfo"
        @getuserinfo="wxGetUserInfo"
      >
        登录/注册
      </van-button>
    </template>
  </view>
</template>

<script>
import tool from "@/utils/tool";
export default {
  data() {
    return {
      userInfo: {},
    };
  },
  computed: {
    token() {
      return tool.getItem("token");
    },
  },
  //监听页面初次渲染完成
  onReady() {
    if (!tool.getItem("token")) {
      this.goLogin();
    } else {
      if (tool.getItem("userInfo")) {
        this.userInfo = JSON.parse(tool.getItem("userInfo"));
      }
    }
  },

  //方法集合
  methods: {
    // 登录
    goLogin() {
      uni.login({
        provider: "weixin",
        success: (res) => {
          const { code } = res;
          this.$api.user.goLogin(code).then((res) => {
            const { open_id, token } = res;
            tool.setItem("open_id", open_id);
            tool.setItem("token", token);
          });
        },
      });
    },
    // 获取用户信息
    wxGetUserInfo() {
      uni.getUserInfo({
        success: (res) => {
          const { userInfo } = res;
          this.userInfo = userInfo;
          tool.setItem("userInfo", JSON.stringify(userInfo));
        },
        fail: () => {
          console.log("未授权");
        },
      });
    },
  },
};
</script>
<style lang="less">
@import url("./index.less");
</style>
