/*
 *
 *
脚本功能：羊了过羊
脚本描述：删除小程序，开启规则，打开小程序
脚本作者：江南小虫虫
更新时间：2022-9-17
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]

^https:\/\/cat-match-static\.easygame2021\.com\/catMatch\/sheep_wx_1_1_4\/remote\/resources\/import\/cb\/cb6bb31d-ff5f-4cb9-b0a5-64018e70a0ca\.c0636\.json url script-response-body https://raw.githubusercontent.com/fengwenhua/QuantumultX/main/ylgy.js
^https:\/\/cat-match\.easygame2021\.com\/sheep\/v1\/game\/map_info url script-response-body https://raw.githubusercontent.com/fengwenhua/QuantumultX/main/ylgy.js

[mitm] 

hostname = cat-match-static.easygame2021.com, cat-match.easygame2021.com
*
*
*/


var body = $response.body.replace(/90017/g, "80001").replace(/10017/g, "80001").replace(/100015/g, "80001");
$done({
  "body": body
});
