<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-27 17:55:11
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-04-04 17:29:02
 * @Description: 登录
-->
<template>
  <view class="login-box">
    <!-- TODO: -->
    <template
      v-if="
        Object.keys(info).length > 0 || Object.keys(this.userInfo).length > 0
      "
    >
      <image class="avatar" fit="cover" :src="userInfo.avatarUrl" />
      <view class="name">{{ userInfo.nickName }}</view>
    </template>
    <template v-else>
      <image src="../../static/img/no-login.png" mode="scaleToFill" />
      <tui-button
        class="btn"
        type="default"
        open-type="getUserInfo"
        @getuserinfo="wxGetUserInfo"
      >
        登录/注册
      </tui-button>
    </template>
  </view>
</template>

<script>
import tool from "@/utils/tool";
export default {
  data() {
    return {
      canIUseGetUserProfile: true,
      userInfo: {},
    };
  },
  computed: {
    token() {
      return tool.getItem("token");
    },
    info() {
      let info = {};
      if (tool.getItem("userInfo")) {
        info = JSON.parse(tool.getItem("userInfo"));
      }
      return info;
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
            const { open_id, token, user_id } = res;
            tool.setItem("open_id", open_id);
            tool.setItem("token", token);
            tool.setItem("user_id", user_id);
          });
        },
      });
    },
    // 获取用户信息
    wxGetUserInfo() {
      wx.getUserProfile({
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
