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
var YunzaiIm = /** @class */ (function (_super) {
    __extends(YunzaiIm, _super);
    function YunzaiIm(option) {
        return _super.call(this, option) || this;
    }
    YunzaiIm.prototype.auth = function () {
        return new Promise(function (resolve, reject) {
            UniJsBridge.callHandler("getToken", {}, function (res) {
                // res:就是上面的callbackFunction的参数
                // 注意：如果uni-app不调用callbackFunction,那么这个回调函数是不会执行
                console.log('getToken response:', JSON.stringify(res));
                var token = {};
                token.tokenType = res.data.token_type;
                token.accessToken = res.data.access_token;
                token.scope = res.data.scope;
                token.tokenDateLine = res.data.expires_in;
                // 设置token
                var realToken = { accessToken: token.accessToken };
                resolve(realToken);
            });
        });
    };
    YunzaiIm.prototype.apiRegister = function () {
    };
    YunzaiIm.prototype.setNavigationBarRightItems = function (param) {
    };
    YunzaiIm.prototype.setNavigationBarTitle = function (param) {
        document.getElementsByTagName("title")[0].innerText = param.title;
    };
    YunzaiIm.prototype.openWindow = function (param) {
        window.location.href = param.url;
    };
    YunzaiIm.prototype.setWebCanShare = function (param) {
    };
    YunzaiIm.prototype.getUser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            http("GET", _this.option.GATE_WAY + "/auth/user", function (data) {
                resolve(JSON.parse(data).principal);
            }, _this.option);
        });
    };
    YunzaiIm.prototype.openMediaCameraAsync = function (param) {
        return undefined;
    };
    YunzaiIm.prototype.scanQrCodeAsync = function (param) {
        return new Promise(function (resovle, reject) {
            UniJsBridge.callHandler("clickScan", {}, function (res) {
                console.log('clickScan response:', JSON.stringify(res));
                var result = res.data.result;
                resovle(result);
            });
        });
    };
    YunzaiIm.prototype.chooseContactsAsync = function (param) {
        return undefined;
    };
    YunzaiIm.prototype.getContactsInfoAsync = function (param) {
        return undefined;
    };
    YunzaiIm.prototype.uploadPhotoAsync = function (param) {
        return undefined;
    };
    YunzaiIm.prototype.userLocationAsync = function (param) {
        return new Promise(function (resolve, reject) {
            // type参数支持 wgs84和 gcj02
            UniJsBridge.callHandler("userLocation", { type: 'wgs84', }, function (res) {
                console.log('userLocation response:', JSON.stringify(res));
                var _a = res.data, latitude = _a.latitude, longitude = _a.longitude;
                var address = '暂无address';
                resolve({ latitude: latitude, longitude: longitude, address: address });
            });
        });
    };
    YunzaiIm.prototype.userLocationWifiAsync = function (param) {
        return undefined;
    };
    YunzaiIm.prototype.getWifiInfoAsync = function (param) {
        return undefined;
    };
    YunzaiIm.prototype.getWifiMacAsync = function (param) {
        return undefined;
    };
    YunzaiIm.prototype.faceCollectionAsync = function (param) {
        return undefined;
    };
    YunzaiIm.prototype.faceCompareAsync = function (param) {
        return undefined;
    };
    YunzaiIm.prototype.wechatPayAsync = function (param) {
        return undefined;
    };
    YunzaiIm.prototype.aliPayAsync = function (param) {
        return undefined;
    };
    YunzaiIm.prototype.openReadWithTimer = function (param) {
        return undefined;
    };
    YunzaiIm.prototype.getDeviceInfo = function (param) {
        return undefined;
    };
    YunzaiIm.prototype.fileBrowser = function (param) {
        alert("请在打开页面后,选择右上角选择浏览器打开!");
        return Promise.resolve(true);
    };
    YunzaiIm.prototype.downloadByBrowser = function (param) {
        alert("请在打开页面后,选择右上角选择浏览器打开!");
        return Promise.resolve(true);
    };
    return YunzaiIm;
}(BaseDevice));
export { YunzaiIm };
//# sourceMappingURL=yunzai.im.js.map