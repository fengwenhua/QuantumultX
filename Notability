/******************************

脚本功能：Notability——解锁订阅
软件版本：14.3
更新时间：2023-10-16
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！


*******************************

[rewrite_local]

^https?:\/\/notability\.com\/global url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/notability1.js


[mitm]

hostname = notability.com

*******************************/


var body = JSON.parse($response.body);

body = {
    "data": {
        "processAppleReceipt": {
            "error": 0,
            "subscription": {
                "productId": "com.gingerlabs.Notability.premium_subscription",
                "originalTransactionId": "570001184068302",
                "tier": "premium",
                "refundedDate": null,
                "refundedReason": null,
                "isInBillingRetryPeriod": false,
                "expirationDate": "2099-09-09T09:09:09.000Z",
                "gracePeriodExpiresAt": null,
                "overDeviceLimit": false,
                "expirationIntent": "CUSTOMER_CANCELLED",
                "__typename": "AppStoreSubscription",
                "user": null,
                "status": "canceled",
                "originalPurchaseDate": "2022-09-09T09:09:09.000Z"
            },
            "__typename": "SubscriptionResult"
        }
    }
};

$done({
    body: JSON.stringify(body)
});
