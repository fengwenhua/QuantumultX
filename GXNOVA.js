/*
 *
 *
脚本功能：GXNOVA游戏手柄无限制下载
脚本作者：江南小虫虫
更新时间：2022-7-2
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > GXNOVA游戏手柄无限制下载
^http:\/\/gameadmin\.vhieg\.com\/manager\/activationCode\/queryUserACStatus\?wechat=[a-zA-Z0-9_]{28} url script-response-body https://raw.githubusercontent.com/fengwenhua/QuantumultX/main/GXNOVA.js
^http:\/\/gameadmin\.vhieg\.com\/manager\/activationCode\/queryUserACStatus\?wechat=[a-zA-Z0-9_]{28} url response-body state":\d response-body state":2
[mitm] 
hostname = gameadmin.vhieg.com
*
*
*/


var body = $response.body;
var hack = /"state":\d/g;
body = body.replace(hack,'"state":2');
$done({
    body
});
