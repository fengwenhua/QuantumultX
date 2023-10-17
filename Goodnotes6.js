/******************************

脚本功能：Goodnotes6——解锁订阅
软件版本：6.2.1
更新时间：2023-10-17
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！


*******************************

[rewrite_local]

^https:\/\/isi\..*\.g.*\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/fengwenhua/QuantumultX/main/Goodnotes6.js
^https:\/\/isi\..*\.g.*\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/fengwenhua/QuantumultX/main/Goodnotes6.js

[mitm]

hostname = isi.*.g*.com


*******************************/

const res = {};
const body = JSON.parse(typeof $response != "undefined" && $response.body || null);

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  res.headers = $request.headers;
} else if (body && body.subscriber) {
  data = {
    "purchase_date": "2023-10-17T02:42:20Z",
    "product_identifier": "com.goodnotes.gn6_one_time_unlock_3999",
  };
  body.subscriber.subscriptions["com.goodnotes.gn6_one_time_unlock_3999"] = {
    "original_purchase_date": "2023-10-17T02:42:21Z",
    "purchase_date": "2023-10-17T02:42:20Z",
    "store": "app_store",
    "ownership_type": "PURCHASED"
  };
  body.subscriber.entitlements["apple_access"] = JSON.parse(JSON.stringify(data));
  body.subscriber.entitlements["crossplatform_access"] = JSON.parse(JSON.stringify(data));
  res.body = JSON.stringify(body);
}

$done(res);
