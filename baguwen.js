/*
 *
 *
脚本功能：校招八股文无限阅读
脚本作者：江南小虫虫
更新时间：2024-3-13
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > 校招八股文无限阅读
^https:\/\/study-api\.playoffer\.cn\/wxUser\/payOneQuestion url script-response-body https://raw.githubusercontent.com/fengwenhua/QuantumultX/main/baguwen.js
^https:\/\/study-api\.playoffer\.cn\/wxUser\/payOneQuestion url response-body code":\d\d\d response-body code":200
[mitm] 
hostname = study-api.playoffer.cn
*
*
*/


var body = $response.body;
var hack = /"code":\d\d\d/g;
body = body.replace(hack,'"code":200');
$done({
    body
});
