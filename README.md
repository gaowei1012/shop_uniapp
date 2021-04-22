<!--
 * @Author: your name
 * @Date: 2021-03-09 13:24:30
 * @LastEditTime: 2021-04-12 21:27:13
 * @LastEditors: 一个为高薪头秃的程序猿
 * @Description: In User Settings Edit
 * @FilePath: /shop_uniapp/README.md
-->


# uni-app中使用vant-webapp
去hbuilderx中查找Vant Weapp并安装到项目中即可使用
`https://ext.dcloud.net.cn/plugin?id=100`
<!-- https://blog.csdn.net/it_cgq/article/details/111991644 -->
在Pages.json中配置
# 微信分享功能
1、在生命周期中添加onShareAppMessage（具体使用看官方文档或查资料）  
2、把分享内容数据缓存  
3、无数据读取缓存（具体看discount页面）
# 打包apk
`https://www.geek-share.com/detail/2804377712.html `
ps：生成keyStore命令行
`keytool -genkey -v -keystore test.keystore -alias infore-key-alias -keyalg RSA -keysize 2048 -validity 10000 -keystore /Users/zhinian/Desktop/hb/infore-key-alias.keystore`  
理解: keytool -genkey -v -keystore 名字 -alias 别名 -keyalg RSA -keysize 多大的内存 -validity 有效期多少天 -keystore 位置/别名.keystore


# 打包app  
`https://www.jianshu.com/p/4a2af17033e2`


# sdk下载地址  
`https://nativesupport.dcloud.net.cn/AppDocs/download/ios`


