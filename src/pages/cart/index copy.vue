<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-02 10:59:36
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-04-09 16:45:51
 * @Description: 购物车
-->
<template>
  <view class="cart-container">
    <view class="bgc-f7c659 header-title">
      <view class="title">购物车</view>
      <view class="edit" @click="editShop" v-show="editText === true"
        >编辑</view
      >
      <view class="edit" @click="editShop" v-show="editText === false"
        >完成</view
      >
    </view>

    <view class="content-box">
      <checkbox-group @change="onChange">
        <view class="box flex" v-for="cart in cartArray" :key="cart.id">
          <checkbox
            :checked="cart.id === is_checked || checkedAll"
            color="#F759AB"
            class="checkbox"
            @click.native="clickCheckBox(cart)"
          />
          <image
            class="cart-img"
            style="width:120rpx;height:120rpx"
            :src="cart.img"
          />
          <view class="content">
            <view class="name">{{ cart.title }}</view>
            <view class="capacity">{{ cart.capacity }}</view>
            <view
              class="price-box flex justify-content-between align-items-center"
            >
              <view class="price">￥{{ cart.price }}</view>
              <van-stepper
                :value="cart.number"
                :max="10"
                :name="cart.id"
                :long-press="false"
                integer
                @plus="changeStepper(cart, 'plus')"
                @minus="changeStepper(cart, 'minus')"
              />
            </view>
          </view>
        </view>
      </checkbox-group>
    </view>

    <template>
      <view class="deal" v-if="editText === false">
        <checkbox color="#F759AB" :checked="checkedAll" @click="allChecked">
          全选
        </checkbox>
        <view class="flex">
          <view class="collect">转入收藏夹</view>
          <view class="delete" @click="deleteShop">删除</view>
        </view>
      </view>
      <van-submit-bar
        class="submit-bar"
        :price="total"
        :button-text="shopNum"
        @submit="submitOrder"
        v-else
      >
        <checkbox color="#F759AB" :checked="checkedAll" @click="allChecked">
          全选
        </checkbox>
      </van-submit-bar>
    </template>
  </view>
</template>

<script>
export default {
  data() {
    return {
      editText: true,
      is_checked: [],
      checkedAll: false,
      stepperVal: 1,
      cartArray: [
        {
          id: 0,
          img: "../../static/sale.png",
          title:
            "【香港直邮】shu uemura植村秀 清透持妆小方瓶粉底液 35ml 674#...",
          price: "500.00",
          capacity: "35ml",
          number: 1,
        },
        {
          id: 1,
          img: "../../static/sale.png",
          title:
            "【香港直邮】shu uemura植村秀 清透持妆小方瓶粉底液 35ml 674#...",
          price: "510.00",
          capacity: "35ml",
          number: 1,
        },
        {
          id: 2,
          img: "../../static/sale.png",
          title:
            "【香港直邮】shu uemura植村秀 清透持妆小方瓶粉底液 35ml 674#...",
          price: "520.00",
          capacity: "35ml",
          number: 1,
        },
        {
          id: 3,
          img: "../../static/sale.png",
          title:
            "【香港直邮】shu uemura植村秀 清透持妆小方瓶粉底液 35ml 674#...",
          price: "530.00",
          capacity: "35ml",
          number: 1,
        },
      ],
      array: [],
    };
  },
  computed: {
    shopNum() {
      return "结算(" + this.is_checked.length + ")";
    },
    total() {
      let sum = 0;
      console.log("哈哈哈==>", this.is_checked.length);
      if (this.is_checked.length > 0) {
        for (var i = 0; i < this.array.length; i++) {
          const item = this.array[i];
          sum += parseFloat(item.price) * item.number;
        }
        return sum * 100;
      } else {
        return sum;
      }
    },
  },
  watch: {
    cartArray() {
      console.log("cartArray==>", this.cartArray.length);
    },
  },
  //方法集合
  methods: {
    // 单选
    onChange(event) {
      const { value } = event.detail;
      this.is_checked = value;
      this.array = [];
      this.array.push(e);
      this.is_checked.length === this.cartArray.length
        ? (this.checkedAll = true)
        : (this.checkedAll = false);
    },
    clickCheckBox(e) {
      this.array = [];
      this.array.push(e);
    },
    // 全选
    allChecked() {
      this.checkedAll === false
        ? (this.is_checked = [])
        : (this.is_checked = this.cartArray.map((item) => {
            return item.id.toString();
          }));
      this.checkedAll = !this.checkedAll;
    },
    // 更改商品数量
    // TODO: 后期改成Toast
    changeStepper(e, deal) {
      deal === "plus" ? (e.number = e.number + 1) : (e.number = e.number - 1);
      if (e.number > 10 && deal === "plus") {
        console.log("不能在增加了");
      } else if (e.number === 1 && deal === "minus") {
        console.log("不能在减少了");
      }
      this.array.push(e);
      this.array = Array.from(new Set(this.array));
    },
    // 提交订单
    submitOrder() {
      console.log("点击到了");
    },
    // 编辑商品
    editShop() {
      this.editText = !this.editText;
    },
    // 删除视频
    deleteShop() {
      if (this.is_checked.length > 0) {
        // 删除所有商品
        if (
          this.cartArray.length == this.is_checked.length ||
          this.checkedAll === true
        ) {
          this.cartArray = [];
        } else {
          const id = parseInt(this.is_checked.join());
          // 删除多个商品
          this.cartArray.splice(
            this.cartArray.findIndex((item) => item.id == id),
            this.is_checked.length
          );
          this.is_checked = [];
        }
      } else {
      }
    },
  },
};
</script>
<style lang="less">
@import url("./index.less");
</style>
