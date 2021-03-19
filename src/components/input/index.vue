<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-18 21:58:58
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-19 10:53:48
 * @Description: 封装input
-->

<template>
  <!-- 
    name       在表单内提交时的标识符
    label      输入框左侧文本	
    value      当前输入的值	
    type       可设置为任意原生类型, 如 number idcard textarea digit	
    clickable  是否开启点击反馈	
    clearable	 是否启用清除控件
    readonly   是否只读	
    disabled   是否禁用输入框	
    border     是否显示内边框	
    required   是否显示表单必填星号
    focus      是否获取焦点	
    center     是否使内容垂直居中	
    password   是否是密码类型	
    placeholder	输入框为空时占位符
    placeholder-style	指定 placeholder 的样式	

   -->
  <van-field
    :name="name"
    :label="label"
    :type="type"
    :clearable="clearable"
    :readonly="readonly"
    :disabled="disabled"
    :placeholder="placeholder"
    :border="border"
    :required="required"
    :error-message="errorMessage"
    @change="onChange"
    @blur="onBlur"
  />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: () => "",
    },
    label: {
      type: String,
      default: () => "",
    },
    value: {
      type: String,
      default: () => "",
    },
    type: {
      type: String,
      default: () => "text",
    },
    clearable: {
      type: Boolean,
      default: () => true,
    },
    readonly: {
      type: Boolean,
      default: () => false,
    },
    disabled: {
      type: Boolean,
      default: () => false,
    },
    placeholder: {
      type: String,
      default: () => "",
    },
    required: {
      type: Boolean,
      default: () => false,
    },
    border: {
      type: Boolean,
      default: () => false,
    },
    reg: {
      type: String,
      default: () => "",
    },
  },
  data() {
    return {
      errorMessage: "",
    };
  },

  //方法集合
  methods: {
    onChange(e) {
      const { detail } = e;
      this.$emit("enterVal", this.name, detail);
    },
    onBlur(e) {
      const { value } = e.detail;
      if (!value) {
        this.errorMessage = `请输入${this.name}的信息`;
      }else {
        this.errorMessage = "";
      }

      console.log("onBlur==>", value);
    },
  },
};
</script>
