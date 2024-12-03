var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { BaseDevice } from "./base.device";
import { http } from "../utils/http";
var Dingtalk = /** @class */ (function (_super) {
    __extends(Dingtalk, _super);
    function Dingtalk(option) {
        return _super.call(this, option) || this;
    }
    Dingtalk.prototype.auth = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var authurl = _this.option.GATE_WAY + "/wechat/mp/token?url=" + encodeURIComponent(window.location.href);
            http("GET", authurl, function (token) {
                if (JSON.parse(token).error_code === 500) {
                    window.location.href = JSON.parse(token).path;
                }
                var realToken = { accessToken: JSON.parse(token).message };
                resolve(realToken);
            });
        });
    };
    Dingtalk.prototype.apiRegister = function () {
        http("GET", this.option.GATE_WAY + "/wechat/mp/jssdk?url=" + encodeURIComponent(window.location.href), function (res) {
            var data = JSON.parse(res);
            dd.config({
                agentId: data.agentId,
                corpId: data.corpId,
                timeStamp: data.timestamp,
                nonceStr: data.nonceStr,
                signature: data.signature,
                type: 0,
                jsApiList: [
                    'requestAuthCode',
                    'scan',
                    'getLocation',
                    'device.geolocation.get',
                ] // 必填，需要使用的jsapi列表，注意：不要带dd。
            });
            dd.ready(function () {
                console.log('钉钉jssdk初始化完成.');
            });
            dd.error(function (res) {
                console.error('钉钉jssdk初始化失败:', res);
            });
        }, this.option);
    };
    Dingtalk.prototype.setNavigationBarRightItems = function (param) {
    };
    Dingtalk.prototype.setNavigationBarTitle = function (param) {
        document.getElementsByTagName("title")[0].innerText = param.title;
    };
    Dingtalk.prototype.openWindow = function (param) {
        window.location.href = param.url;
    };
    Dingtalk.prototype.setWebCanShare = function (param) {
    };
    Dingtalk.prototype.getUser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            http("GET", _this.option.GATE_WAY + "/auth/user", function (data) {
                resolve(JSON.parse(data).principal);
            }, _this.option);
        });
    };
    Dingtalk.prototype.openMediaCameraAsync = function (param) {
        return undefined;
    };
    Dingtalk.prototype.scanQrCodeAsync = function (param) {
        return new Promise(function (resolve, reject) {
            dd.scan({
                type: 'qr',
                success: function (res) {
                    resolve(res.text);
                    if (param && param.success) {
                        param.success(res.text);
                    }
                },
                fail: function (err) {
                    console.error('调用扫一扫失败:' + JSON.stringify(err));
                    reject("DingtalkJSSDK Error:error to scan qrcode");
                    if (param && param.fail) {
                        param.fail("DingtalkJSSDK Error:error to scan qrcode");
                    }
                },
            });
        });
    };
    Dingtalk.prototype.chooseContactsAsync = function (param) {
        return undefined;
    };
    Dingtalk.prototype.getContactsInfoAsync = function (param) {
        return undefined;
    };
    Dingtalk.prototype.uploadPhotoAsync = function (param) {
        return undefined;
    };
    Dingtalk.prototype.userLocationAsync = function (param) {
        return new Promise(function (resolve, reject) {
            dd.getLocation({
                type: 1,
                useCache: true,
                coordinate: '0',
                cacheTimeout: 20,
                withReGeocode: true,
                targetAccuracy: '200',
                success: function (res) {
                    var latitude = res.latitude, longitude = res.longitude, address = res.address;
                    resolve({ latitude: latitude, longitude: longitude, address: address });
                    if (param && param.success) {
                        param.success({ latitude: latitude, longitude: longitude, address: address });
                    }
                },
                fail: function (err) {
                    console.error('调用定位失败:' + JSON.stringify(err));
                    reject("DingtalkJSSDK Error:error to get location!");
                    if (param && param.fail) {
                        param.fail("DingtalkJSSDK Error:error to get location!");
                    }
                },
            });
        });
    };
    Dingtalk.prototype.userLocationWifiAsync = function (param) {
        return undefined;
    };
    Dingtalk.prototype.getWifiInfoAsync = function (param) {
        return undefined;
    };
    Dingtalk.prototype.getWifiMacAsync = function (param) {
        return undefined;
    };
    Dingtalk.prototype.faceCollectionAsync = function (param) {
        return undefined;
    };
    Dingtalk.prototype.faceCompareAsync = function (param) {
        return undefined;
    };
    Dingtalk.prototype.wechatPayAsync = function (param) {
        return undefined;
    };
    Dingtalk.prototype.aliPayAsync = function (param) {
        return undefined;
    };
    Dingtalk.prototype.openReadWithTimer = function (param) {
        return undefined;
    };
    Dingtalk.prototype.getDeviceInfo = function (param) {
        return undefined;
    };
    Dingtalk.prototype.fileBrowser = function (param) {
        alert("请在打开页面后,选择右上角选择浏览器打开!");
        return Promise.resolve(true);
    };
    Dingtalk.prototype.downloadByBrowser = function (param) {
        alert("请在打开页面后,选择右上角选择浏览器打开!");
        return Promise.resolve(true);
    };
    return Dingtalk;
}(BaseDevice));
export { Dingtalk };
//# sourceMappingURL=dingtalk.js.map