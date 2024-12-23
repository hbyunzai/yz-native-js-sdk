# native-js-sdk
provide the native function call API of yunzai mobile platform for the third party


# How to use

## IN HTML

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <title>NativePage</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport"/>
    <script type="text/javascript" src="sdk.js"></script>
</head>
<body>
<ol>
    <li>
        <button onclick="openWindow()">跳页面</button>
    </li>
    <li>
        <button onclick="setNavigationBarTitle()">设置标题</button>
    </li>
    <li>
        <button onclick="setNavigationBarRightItems()">设置按钮们</button>
    </li>
    <li>
        <button onclick="webShare()">设置分享</button>
    </li>
    <li>
        <button onclick="webCantShare()">设置不能分享</button>
    </li>
    <li>
        <div id="tokenasync"></div>
        <button onclick="getTokenAsync()">异步获取Token</button>
    </li>

    <li>
        <div id="tokensync"></div>
        <button onclick="getTokenSync()">同步获取Token</button>
    </li>

    <li>
        <div id="userAsync"></div>
        <button onclick="getUserAsync()">异步获取User</button>
    </li>

    <li>
        <div id="userSync"></div>
        <button onclick="getUserSync()">同步获取User</button>
    </li>

    <li>
        <div id="mediaCamera"></div>
        <button onclick="openMediaCamera()">开启你的摄像头</button>
    </li>

    <li>
        <div id="qrcode"></div>
        <button onclick="scanQrCodeAsync()">扫个二维码</button>
    </li>

    <li>
        <div id="userList"></div>
        <button onclick="chooseUser()">调用联系人</button>
    </li>

    <li>
        <div id="contactUserInfo"></div>
        <button onclick="getContactsInfoAsync()">获取联系人详细信息</button>
    </li>

    <li>
        <div id="photos"></div>
        <button onclick="uploadPhotoAsync()">上传图像们</button>
    </li>

    <li>
        <div id="deflocation"></div>
        <button onclick="userLocationAsync()">获取位置</button>
    </li>

    <li>
        <div id="wifimaclocation"></div>
        <button onclick="userLocationWifiAsync()">WIFI MAC地址验证</button>
    </li>

    <li>
        <div id="wifiinfo"></div>
        <button onclick="getWifiInfoAsync()">获取WIFI信息</button>
    </li>

    <li>
        <div id="wifimac"></div>
        <button onclick="getWifiMacAsync()">获取WIFIMAC地址</button>
    </li>
    <li>
        <div id="caiji"></div>
        <button onclick="faceLiveCollection()">人脸采集</button>
    </li>

    <li>
        <div id="duibi"></div>
        <button onclick="faceCompareAsync()">人脸对比</button>
    </li>

    <li>
        <div id="paywechat"></div>
        <button onclick="wechatPayAsync()">微信支付</button>
    </li>

    <li>
        <div id="payali"></div>
        <button onclick="aliPayAsync()">支付宝支付</button>
    </li>

    <li>
        <div id="readnumber"></div>
        <button onclick="openReadWithTimer()">计时阅读</button>
    </li>

    <li>
        <div id="deviceinfo"></div>
        <button onclick="getDeviceInfo()">设备信息</button>
    </li>


</ol>
<script type="text/javascript" src="main.bundle.js"></script></body>
<script>
    const device = new YzDevice();

    function getDeviceInfo() {
        device.getDeviceInfo().then((info) => {
            document.getElementById('deviceinfo').innerHTML = JSON.stringify(info);
        });
    }

    function openReadWithTimer() {
        device.openReadWithTimer({
            url: 'http://www.baidu.com',
            openType: "web",
            title: '百度',
            id: 'baidu',
            type: 'web'
        }).then((info) => {
            alert(info);
            document.getElementById('readnumber').innerHTML = JSON.stringify(info);
        })
    }

    function aliPayAsync() {
        device.aliPayAsync().then((info) => {
            document.getElementById('payali').innerHTML = JSON.stringify(info);
        })
    }

    function wechatPayAsync() {
        device.wechatPayAsync({
            "appid": "wx105c666575c89f9a",
            "partnerid": "1439124702",
            "prepayid": "wx04111944463057cc6b7954d61634639200",
            "package": "Sign=WXPay",
            "noncestr": "1cbfb3efb1de4fd186d85367f893d233",
            "timestamp": "1567567183",
            "sign": "FF993B12EE67DF76FD1E34FD26471454"
        }).then((info) => {
            document.getElementById('paywechat').innerHTML = JSON.stringify(info);
        })
    }

    function faceCompareAsync() {
        device.getUserAsync().then((user) => {
            device.faceCompareAsync({live: true, userId: user.userId}).then((data) => {
                document.getElementById("duibi").innerHTML = JSON.stringify(data);
            })
        });

    }

    function faceLiveCollection() {
        device.getUserAsync().then((user) => {
            device.faceCollectionAsync({live: true, userId: user.userId}).then((data) => {
                document.getElementById("caiji").innerHTML = JSON.stringify(data);
            })
        });
    }

    function getWifiMacAsync() {
        device.getWifiMacAsync().then((mac) => {
            document.getElementById("wifimac").innerHTML = mac;
        })
    }

    function getWifiInfoAsync() {
        device.getWifiInfoAsync().then((info) => {
            document.getElementById('wifiinfo').innerHTML = JSON.stringify(info);
        })
    }

    function userLocationWifiAsync() {
        device.userLocationWifiAsync({bssids: ['111.111.111.111', '222.222.222.222']}).then((status) => {
            document.getElementById('wifimaclocation').innerHTML = status;
        })
    }

    function userLocationAsync() {
        device.userLocationAsync().then((location) => {
            document.getElementById('deflocation').innerHTML = JSON.stringify(location);
        })
    }

    function uploadPhotoAsync() {
        device.uploadPhotoAsync({count: 100}).then((images) => {
            document.getElementById('photos').innerHTML = JSON.stringify(images);
        })
    }

    function chooseUser() {
        device.chooseContactsAsync({count: 1}).then((users) => {
            document.getElementById("userList").innerHTML = JSON.stringify(users);
        })
    }

    function getContactsInfoAsync() {
        device.chooseContactsAsync({count: 1}).then((users) => {
            device.getContactsInfoAsync({targetUserId: users[0].id}).then((userInfo) => {
                document.getElementById('contactUserInfo').innerHTML = JSON.stringify(userInfo);
            })
        })
    }

    function scanQrCodeAsync() {
        device.scanQrCodeAsync().then((code) => {
            document.getElementById("qrcode").innerHTML = code;
        });
    }


    function openMediaCamera() {
        device.openMediaCameraAsync().then((camera) => {
            document.getElementById("mediaCamera").innerHTML = camera;
        })
    }

    function getUserAsync() {
        device.getUserAsync().then((user) => {
            document.getElementById('userAsync').innerHTML = JSON.stringify(user);
        })
    }

    function getUserSync() {
        let user = device.getUserSync();
        document.getElementById('userSync').innerHTML = JSON.stringify(user);
    }

    function getTokenSync() {
        let token = device.getTokenSync();
        document.getElementById('tokensync').innerHTML = JSON.stringify(token);
    }

    function getTokenAsync() {
        device.getTokenAsync({refresh: true}).then((token) => {
            document.getElementById('tokenasync').innerHTML = JSON.stringify(token);
        });
    };

    function webCantShare() {
        device.setWebCanshare({shareFlag: false});
    }

    function webShare() {
        device.setWebCanshare({shareFlag: true});
    }

    function openWindow() {
        device.openWindow({
            type: "url",
            url: "http://www.baidu.com",
            shareFlag: true,
            success: function (msg) {
                alert(JSON.stringify(msg));
            },
            fail: function (msg) {
                alert(JSON.stringify(msg));
            },
            complete: function (msg) {
                alert(JSON.stringify(msg));
            }
        });
    }

    function setNavigationBarTitle() {
        device.setNavigationBarTitle({
            title: "哈哈哈哈哈",
            success: function (msg) {
                alert(JSON.stringify(msg));
            },
            fail: function (msg) {
                alert(JSON.stringify(msg));
            },
            complete: function (msg) {
                alert(JSON.stringify(msg));
            }
        });
    }

    function setNavigationBarRightItems() {
        device.setNavigationBarRightItems({
            showMenu: true,
            shareFlag: true,
            items: [
                {
                    type: "icon", //显示类型：图标，文字
                    title: "",
                    icon: "edit", // 目前支持图标按钮：add添加, edit编辑, delete删除, search搜索, done完成, send发送
                    clickId: "edit" //点击Id
                },
                {
                    type: "icon", //显示类型：图标，文字
                    title: "",
                    icon: "delete", // 目前支持图标按钮：add添加, edit编辑, delete删除, search搜索, done完成, send发送
                    clickId: "123123" //点击Id
                },
                {
                    type: "icon", //显示类型：图标，文字
                    title: "",
                    icon: "search", // 目前支持图标按钮：add添加, edit编辑, delete删除, search搜索, done完成, send发送
                    clickId: "hahah" //点击Id
                },
                {
                    type: "icon", //显示类型：图标，文字
                    title: "",
                    icon: "done", // 目前支持图标按钮：add添加, edit编辑, delete删除, search搜索, done完成, send发送
                    clickId: "hahah" //点击Id
                },
                {
                    type: "icon", //显示类型：图标，文字
                    title: "",
                    icon: "send", // 目前支持图标按钮：add添加, edit编辑, delete删除, search搜索, done完成, send发送
                    clickId: "hahah" //点击Id
                }
            ],
            onClick: function (clickId) {
                alert(clickId + "按钮1被点击了");
            }
        });
    }
</script>
</html>
```

## IN ANGULAR

### Install
```bash
npm install yz-native-js-sdk@latest
```

### index.html
clear your html to this

```html
<!--
 * @Createdby: Microsoft Visual Code
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @LastEditors: ferried
 * @Version: 1.0.0-SNAPSHOT
 * @Description: none
 * @Date: 2019-05-06 14:43:40
 * @LastEditTime: 2019-05-11 10:16:13
 -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>AngularYuznaiMobile</title>
    <base href="./" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
    <script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.6.0.js" ></script>
    <script type="text/javascript" src="https://g.alicdn.com/dingding/dingtalk-jsapi/3.0.41/dingtalk.open.js"></script>
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <style type="text/css">
      .preloader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: #49a9ee;
        z-index: 9999;
        transition: opacity 0.65s;
      }

      .preloader-hidden-add {
        opacity: 1;
        display: block;
      }

      .preloader-hidden-add-active {
        opacity: 0;
      }

      .preloader-hidden {
        display: none;
      }

      .cs-loader {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
      }

      .cs-loader-inner {
        transform: translateY(-50%);
        top: 50%;
        position: absolute;
        width: 100%;
        color: #fff;
        text-align: center;
      }

      .cs-loader-inner label {
        font-size: 20px;
        opacity: 0;
        display: inline-block;
      }

      @keyframes lol {
        0% {
          opacity: 0;
          transform: translateX(-300px);
        }

        33% {
          opacity: 1;
          transform: translateX(0);
        }

        66% {
          opacity: 1;
          transform: translateX(0);
        }

        100% {
          opacity: 0;
          transform: translateX(300px);
        }
      }

      .cs-loader-inner label:nth-child(6) {
        animation: lol 3s infinite ease-in-out;
      }

      .cs-loader-inner label:nth-child(5) {
        animation: lol 3s 0.1s infinite ease-in-out;
      }

      .cs-loader-inner label:nth-child(4) {
        animation: lol 3s 0.2s infinite ease-in-out;
      }

      .cs-loader-inner label:nth-child(3) {
        animation: lol 3s 0.3s infinite ease-in-out;
      }

      .cs-loader-inner label:nth-child(2) {
        animation: lol 3s 0.4s infinite ease-in-out;
      }

      .cs-loader-inner label:nth-child(1) {
        animation: lol 3s 0.5s infinite ease-in-out;
      }
    </style>
  </head>

  <body>
    <app-root></app-root>
    <div class="preloader">
      <div class="cs-loader">
        <div class="cs-loader-inner">
          <label> ●</label>
          <label> ●</label>
          <label> ●</label>
          <label> ●</label>
          <label> ●</label>
          <label> ●</label>
        </div>
      </div>
    </div>
  </body>

</html>
```

### Angular.json
```json
            "scripts": [
              "node_modules/yz-native-js-sdk/sdk.js"
            ],
```

### Now To Use

```typescript
import { Component, OnInit } from "@angular/core";
import { PlatForm } from "yz-native-js-sdk";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent implements OnInit {
  // new a device to use
  device: PlatForm = new PlatForm();

  ngOnInit(): void {
    this.device.openWindow({ type: "url", url: "http://www.baidu.com" });
    this.device
      .getUserAsync()
      .then(user => {
        alert(JSON.stringify(user));
      })
      .catch(error => {
        alert(JSON.stringify(error));
      });
  }

  constructor() {}
}

```


