# 0.1.18 2020-05-08
## fix
1.修复微信和手机APP返回值结构不同问题
# 0.1.17 2020-04-13
## feature
1.加入浏览器下载函数
```javascript
  device.downloadByBrowser({
            url: 'http://www.baidu.com',
            title: '谷歌',
            success: function () {
                alert("成功");
            },
            fail: function (error) {
                alert(error);
            },
            complete: function () {
                alert("函数完成后回调")
            }
        }).then((data) => {
            console.log(data);
        });
```

# 0.1.16 2020-04-13
## fix
1.修复user获取为字符串,现在直接返回对象  
2.修复token获取为字符串,现在直接返回token对象

## feature
1.加入 浏览器打开函数

```javascript
 function openBrowser() {
        device.fileBrowser({
            url: 'http://www.baidu.com',
            title: '谷歌',
            success: function (data) {
                alert(data);
            },
            fail: function (data) {
                alert(data);
            },
            complete: function () {
                alert("函数完成后回调")
            }
        }).then((data) => {
            console.log(data);
        });
    }
```

# 0.1.15 2020-04-7
1.修复http请求后不返回Promise问题
# 0.1.14 2020-04-7
1.修复user不是Object问题
# 0.1.13 2020-02-14
## fix
1.跨域请求许可
# 0.1.12 2020-02-14
## fix
1.用户认证
# 0.1.5 2020-02-05
## feature
1.加入微信支持
2.加入微信User/Location/Qrcode
# 0.1.4 2019-12-25
## fix
1.修复查看联系人详情function
# 0.1.2 2019-12-17
## fix
1.修复index.html调用函数webCanshare 为 webCanShare,解决调用不到函数的问题
# 0.1.1 2019-12-11
## feature
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
