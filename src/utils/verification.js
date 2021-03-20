/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-19 10:43:19
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-20 11:17:56
 * @Description: 封装验证
 */

export const is_empty = (val) => {
  if (!val) {
    return false;
  }
  return true;
};

export const is_chinese = (val) => {
  console.log("val==>", val);
  return;
  const reg = /^[\u2E80-\u9FFF]+$/;
  if (!reg.test(val)) {
    return "请输入纯中文";
  }
  return true;
};

export const is_phone = (val) => {
  const reg = /^1[3456789]\d{9}$/;
  if (val.length < 11) {
    return "请输入11-13位的手机号码";
  }
  if (!reg.test(val)) {
    return "请输入正确的手机格式";
  }
  return true;
};

export const removeQuotes = (val) => {
  return (val = val.replace(/^["|'](.*)["|']$/g, ""));
};
