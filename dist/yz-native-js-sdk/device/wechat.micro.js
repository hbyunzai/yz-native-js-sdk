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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { BaseDevice } from "./base.device";
import { http } from "../utils/http";
import { WECHAT_JSSDK_LIST } from "./wechat.office.info";
import { DeviceType } from "./device.type";
var WechatMicro = /** @class */ (function (_super) {
    __extends(WechatMicro, _super);
    function WechatMicro(option) {
        return _super.call(this, option) || this;
    }
    WechatMicro.prototype.getType = function () {
        return DeviceType.WECHAT_MICRO;
    };
    WechatMicro.prototype.auth = function () {
        var accessToken = window.location.href
            .split("accessToken=")[1]
            .split("&")[0];
        var token = { accessToken: accessToken };
        return Promise.resolve(token);
    };
    WechatMicro.prototype.apiRegister = function () {
        http("GET", this.option.GATE_WAY +
            "/wechat/mp/jssdk" +
            "?url=" +
            window.location.href.split("#")[0], function (data) {
            var wechatOfficeInfo = JSON.parse(data);
            wechatOfficeInfo.debug = false;
            wechatOfficeInfo.jsApiList = WECHAT_JSSDK_LIST;
            wx.config(__assign({}, wechatOfficeInfo));
        }, this.option);
    };
    WechatMicro.prototype.getUser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            http("GET", _this.option.GATE_WAY + "/auth/user", function (data) {
                resolve(data.principal);
            }, _this.option);
        });
    };
    WechatMicro.prototype.setNavigationBarRightItems = function (param) {
    };
    WechatMicro.prototype.setNavigationBarTitle = function (param) {
        document.getElementsByTagName("title")[0].innerText = param.title;
    };
    WechatMicro.prototype.openWindow = function (param) {
    };
    WechatMicro.prototype.setWebCanShare = function (param) {
    };
    WechatMicro.prototype.openMediaCameraAsync = function (param) {
        return undefined;
    };
    WechatMicro.prototype.scanQrCodeAsync = function (param) {
        return new Promise(function (resovle, reject) {
            wx.ready(function () {
                wx.scanQRCode({
                    needResult: 1,
                    scanType: ["qrCode", "barCode"],
                    success: function (res) {
                        if (res.errMsg === "scanQRCode:ok") {
                            if (param && param.success) {
                                param.success(res.resultStr);
                            }
                            resovle(res.resultStr);
                        }
                        else {
                            if (param && param.fail) {
                                param.fail("NativeJSSDK Error:error to scan qrcode");
                            }
                            reject("NativeJSSDK Error:error to scan qrcode");
                        }
                    },
                });
            });
        });
    };
    WechatMicro.prototype.chooseContactsAsync = function (param) {
        return undefined;
    };
    WechatMicro.prototype.getContactsInfoAsync = function (param) {
    };
    WechatMicro.prototype.uploadPhotoAsync = function (param) {
        return undefined;
    };
    WechatMicro.prototype.userLocationAsync = function (param) {
        return new Promise(function (resolve, reject) {
            wx.ready(function () {
                wx.getLocation({
                    type: "wgs84",
                    success: function (res) {
                        if (res.errMsg === "getLocation:ok") {
                            var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                            var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                            var address = "微信无address";
                            resolve({ latitude: latitude, longitude: longitude, address: address });
                            if (param && param.success) {
                                param.success({ latitude: latitude, longitude: longitude, address: address });
                            }
                        }
                        else {
                            if (param && param.fail) {
                                param.fail("NativeJSSDK Error:error to get location!");
                            }
                            reject("NativeJSSDK Error:error to get location!");
                        }
                    },
                });
            });
        });
    };
    WechatMicro.prototype.userLocationWifiAsync = function (param) {
        return undefined;
    };
    WechatMicro.prototype.getWifiInfoAsync = function (param) {
        return undefined;
    };
    WechatMicro.prototype.getWifiMacAsync = function (param) {
        return undefined;
    };
    WechatMicro.prototype.faceCollectionAsync = function (param) {
        return undefined;
    };
    WechatMicro.prototype.faceCompareAsync = function (param) {
        return undefined;
    };
    WechatMicro.prototype.wechatPayAsync = function (param) {
        return undefined;
    };
    WechatMicro.prototype.aliPayAsync = function (param) {
        return undefined;
    };
    WechatMicro.prototype.openReadWithTimer = function (param) {
        return undefined;
    };
    WechatMicro.prototype.getDeviceInfo = function (param) {
        return undefined;
    };
    WechatMicro.prototype.fileBrowser = function (param) {
        alert("微信请在右上角选择浏览器打开!");
        return Promise.resolve(true);
    };
    WechatMicro.prototype.downloadByBrowser = function (param) {
        alert("微信请在右上角选择浏览器打开!");
        return Promise.resolve(true);
    };
    return WechatMicro;
}(BaseDevice));
export { WechatMicro };
//# sourceMappingURL=wechat.micro.js.map