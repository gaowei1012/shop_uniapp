<!--
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-03-21 08:46:38
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-03-21 08:47:06
 * @Description: 
-->
## validator校验
|  验证器 | 说明 |
|  ----  | ----  |
| contains(str, seed) | 检查包含 |
| equals(str, comparison) | 检查相等 |
| isAfter(str [, date]) | 验证给出的时间字符串是否在指定日期之后 |
| isAlpha(str [, locale]) | 检查字符串是否只是由Alpha字符组成 |
| isAlphanumeric(str [, locale]) | 检查字符串是否只包含字母和数字 |
| isAscii(str) | 检查字符串是否只包含ASCII字符 |
| isBase64(str) | 检查是否是一个Base64字符串 |
| isBefore(str [, date]) | 验证给出的时间字符串是否在指定日期之前 |
| isBoolean(str) | 检查字符串是否是Boolean值 |
| isByteLength(str, options) | 检查字符串长度是否在 options 给出的区间 ，options默认为 {min:0, max: undefined}. |
| isCreditCard(str) | 检查字符串是否是一个信用卡卡号 |
| isCurrency(str, options) | 检查字符串是否是一个有效的货币数值 |
| isDataURI(str) | 检查字符串是否是 Data URI |
| isDecimal(str, options) | 检查是否是小数 |
| isDivisibleBy(str, number) | 检查一个数字是否能被另一个分隔 |
| isEmail(str [, options]) | 检查是否是Email |
| isEmpty(str) | 检查字符串是否为空 |
| isFQDN(str [, options]) | 检查字符串是否是一个合法域名 |
| isFloat(str [, options]) | 检查字符串是否是一个小数 |
| isFullWidth(str) | 检查字符串是否包含Unicode全形字符 |
| isHalfWidth(str) | 检查字符串是否包含Unicode半形字符 |
| isHash(str, algorithm) | 检查字符串是否是一个指定算法的HASH摘要，算法包括['md4', 'md5', 'sha1', 'sha256', 'sha384', 'sha512', 'ripemd128', 'ripemd160', 'tiger128', 'tiger160', 'tiger192', 'crc32', 'crc32b'] |
| isHexColor(str) | 是否是一个十六进制颜色值 |
| isHexadecimal(str) | 是否是一个十六进制数字 |
| isIP(str [, version]) | 检查字符串是否是一个IP |
| isISBN(str [, version]) | 检查字符串是否是ISBN图书书号 |
| isISSN(str [, options]) | 检查字符串是否是ISSN杂志编号 |
| isISIN(str) | 检查字符串是否是ISIN证券编码 |
| isISO8601(str) | 检查字符串是否是ISO8601格式时间 |
| isISO31661Alpha2(str) | 检查字符串是否是ISO 3166-1 alpha-2国家编码 |
| isISRC(str) | 检查字符串是否是ISRC音像制品编码 |
| isIn(str, values) | 检查字符串是否是数组中允许的值 |
| isInt(str [, options]) | 检查字符串是否是一个整数 |
| isJSON(str) | 检查字符串是否是JSON字符串 |
| isLatLong(str) | 检查字符串是否是经纬度 |
| isLength(str, options) | 检查字符串长度 |
| isLowercase(str) | 检查字符串是否是小写 |
| isMACAddress(str) | 检查字符串是否是MAC地址 |
| isMD5(str) | 检查字符串是否是MD5 HASH |
| isMimeType(str) | 检查字符串是否是一个MIME |
| isMobilePhone(str, locale) | 检查字符串是否是合法的移动手机号 |
| isMongoId(str) | 检查字符串是否是MongoDB ObjectID |
| isMultibyte(str) | 检查字符串是否包含一个多字节字符 |
| isNumeric(str) | 检查字符串是否是数字 |
| isPort(str) | 检查字符串是否是合法端口号 |
| isPostalCode(str, locale) | 检查字符串是否是邮政编码 |
| isSurrogatePair(str) | 检查字符串是否包含UTF-16扩展编码字符 |
| isURL(str [, options]) | 检查字符串是否是一个URL地址 |
| isUUID(str [, version]) | 检查字符串是否是一个UUID |
| isUppercase(str) | 检查字符串是否是大写 |
| isVariableWidth(str) | 检查字符串是否同时包含了全形和半形字符 |
| isWhitelisted(str, chars) | 检查字符串是否是白名单允许的字符
| matches(str, pattern [, modifiers]) | 检查字符串是否匹配指定正则 | 