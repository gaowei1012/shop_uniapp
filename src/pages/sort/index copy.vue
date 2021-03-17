<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-02 10:57:56
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-17 15:02:13
 * @Description: 分类
-->
<template>
  <view class="sort-container">
    <van-search
      v-model="searchVal"
      placeholder="搜索商品"
      @search="searchInfo"
    />
    <!-- 
      main-active-index	左侧选中项的索引 ==> number
      active-id	右侧选中项的索引，支持传入数组 ==> string | number | Array
     -->
    <!-- <van-tree-select
      :items="items"
      :main-active-index="mainActiveIndex"
      :active-id="activeId"
      @click-nav="onClickNav"
      @click-item="onClickItem"
      v-if="items.length > 0"
    >
      <template slot="content">
        {{ JSON.stringify(items) }}
      </template>
    </van-tree-select> -->

    <!-- <van-sidebar :active-key="activeKey">
      <van-sidebar-item title="标签名" />
      <van-sidebar-item title="标签名" />
      <van-sidebar-item title="标签名" />
    </van-sidebar> -->
  </view>
</template>

<script>
// import vanTreeSelect from "../../wxcomponents/vant-weapp/tree-select/index";
export default {
  components: {
    // "van-tree-select": vanTreeSelect,
  },
  data() {
    return {
      searchVal: "",
      mainActiveIndex: 0,
      activeId: 1,
      activeKey: 0,
      introducedImg: "https://img.yzcdn.cn/vant/apple-1.jpg",
      items: [
        {
          // 导航名称
          text: "所有城市",
          // 导航名称右上角徽标，1.5.0 版本开始支持
          badge: 3,
          // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
          dot: true,
          // 禁用选项
          disabled: false,
          // 该导航下所有的可选项
          children: [
            {
              // 名称
              text: "温州",
              // id，作为匹配选中状态的标识
              id: 1,
              // 禁用选项
              disabled: true,
            },
            {
              text: "杭州",
              id: 2,
            },
          ],
        },
      ],

      typeArray: [
        {
          id: 0,
          text: "美妆护肤1",
          children: [
            {
              id: "11",
              src: "https://img.yzcdn.cn/vant/apple-1.jpg",
              text: "SKII神仙水",
            },
            {
              id: "22",
              src: "https://img.yzcdn.cn/vant/apple-1.jpg",
              text: "SKII神仙水1",
            },
            {
              id: "33",
              src: "https://img.yzcdn.cn/vant/apple-1.jpg",
              text: "SKII神仙水2",
            },
            {
              id: "44",
              src: "https://img.yzcdn.cn/vant/apple-1.jpg",
              text: "SKII神仙水2",
            },
            {
              id: "55",
              src: "https://img.yzcdn.cn/vant/apple-1.jpg",
              text: "SKII神仙水2",
            },
            {
              id: "66",
              src: "https://img.yzcdn.cn/vant/apple-1.jpg",
              text: "SKII神仙水2",
            },
            {
              id: "77",
              src: "https://img.yzcdn.cn/vant/apple-1.jpg",
              text: "SKII神仙水2",
            },
            {
              id: "88",
              src: "https://img.yzcdn.cn/vant/apple-1.jpg",
              text: "SKII神仙水2",
            },
            {
              id: "99",
              src: "https://img.yzcdn.cn/vant/apple-1.jpg",
              text: "SKII神仙水2",
            },
            {
              id: "100",
              src: "https://img.yzcdn.cn/vant/apple-1.jpg",
              text: "SKII神仙水2",
            },
            {
              id: "110",
              src: "https://img.yzcdn.cn/vant/apple-1.jpg",
              text: "SKII神仙水2",
            },
          ],
        },
      ],
      mainActiveIndex: 0,
      activeId: null,
    };
  },
  created() {
    // this.getData();
    console.log(
      "treeData==>",
      this.items,
      Object.prototype.toString.call(this.items)
    );
  },
  onLoad() {},
  //方法集合
  methods: {
    getData() {
      this.items = [];

      const data = [
        {
          substationCode: "1101010000",
          substationName: "东城区分局",
        },
        {
          substationCode: "100002",
          substationName: "昌平区分局",
        },
        {
          substationCode: "100003",
          substationName: "海淀区分局",
        },
        {
          substationCode: "100001003",
          substationName: "海淀区分局",
        },
        {
          substationCode: "1010101",
          substationName: "昌平区分局",
        },
        {
          substationCode: "1010101\t",
          substationName: "111",
        },
        {
          substationCode: "1000021",
          substationName: "测试重复分局",
        },
        {
          substationCode: "12223",
          substationName: "河北分局",
        },
      ];
      this.items.length = 0;
      data.forEach((element) => {
        this.items.push({
          id: element.substationCode,
          text: element.substationName,
        });
      });
      console.log(
        "items==>",
        this.items,
        Object.prototype.toString.call(this.items)
      );
    },

    onClickNav(e = {}) {
      const { detail } = e;
      console.log("onClickNav==>detail", detail);
      this.mainActiveIndex = detail.index || 0;
      // this.typeArray.push(...this.typeArray);
    },

    onClickItem(e) {
      const { detail } = e;
      console.log("onClickItem==>detail", detail);
      this.activeId = detail.id;
    },

    searchInfo(e) {
      const { detail } = e;
      console.log("searchInfo==>", detail);
    },
  },
};
</script>
<style lang="less">
@import url("./index.less");
</style>
