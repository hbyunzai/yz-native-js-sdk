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
var WechatOffice = /** @class */ (function (_super) {
    __extends(WechatOffice, _super);
    function WechatOffice(option) {
        var _this = _super.call(this, option) || this;
        _this.registerWechat();
        _this.validateWechat();
        return _this;
    }
    WechatOffice.prototype.registerWechat = function () {
        http("GET", this.option.WECHAT_URI + "?url=" + window.location.href.split("#")[0], function (data) {
            var wechatOfficeInfo = JSON.parse(data);
            wechatOfficeInfo.debug = false;
            wechatOfficeInfo.jsApiList = WECHAT_JSSDK_LIST;
            wx.config(__assign({}, wechatOfficeInfo));
        }, this.option);
    };
    WechatOffice.prototype.validateWechat = function () {
        wx.ready(function () {
            wx.checkJsApi({
                jsApiList: WECHAT_JSSDK_LIST,
                success: function (res) {
                    if (!res.errMsg.includes("ok")) {
                        alert("微信JSSDK可用性检测失败!");
                    }
                    else {
                        sessionStorage.setItem("JssdkCheckResult", JSON.stringify(res.checkResult));
                    }
                }
            });
        });
    };
    WechatOffice.prototype.validateWechatSdkByFuncName = function (name) {
        var JssdkCheckResult = JSON.parse(sessionStorage.getItem("JssdkCheckResult"));
        return JssdkCheckResult[name];
    };
    WechatOffice.prototype.setNavigationBarRightItems = function (param) { };
    WechatOffice.prototype.setNavigationBarTitle = function (param) { };
    WechatOffice.prototype.openWindow = function (param) {
        window.location.href = param.url;
    };
    WechatOffice.prototype.setWebCanShare = function (param) { };
    WechatOffice.prototype.getTokenAsync = function (param) {
        return undefined;
    };
    WechatOffice.prototype.getTokenSync = function () {
        return undefined;
    };
    WechatOffice.prototype.getUserAsync = function (param) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            http("GET", _this.option.GATE_WAY + '/auth/user', function (data) {
                resolve(data.principal);
            }, _this.option);
        });
    };
    WechatOffice.prototype.getUserSync = function () {
        console.error("Native Error: Wechat can't getUserBySync");
        return undefined;
    };
    WechatOffice.prototype.openMediaCameraAsync = function (param) {
        return undefined;
    };
    WechatOffice.prototype.scanQrCodeAsync = function (param) {
        var _this = this;
        return new Promise(function (resovle, reject) {
            wx.ready(function () {
                if (_this.validateWechatSdkByFuncName("scanQRCode")) {
                    if (param && param.success) {
                        wx.scanQRCode({
                            needResult: 1,
                            scanType: ["qrCode", "barCode"],
                            success: function (res) {
                                if (res.errMsg === "scanQRCode:ok") {
                                    resovle(res.resultStr);
                                }
                                else {
                                    reject("NativeJSSDK Error:error to scan qrcode");
                                }
                            }
                        });
                    }
                }
                else {
                    if (param && param.fail) {
                        param.fail("JSSDK Error:checked api error named scanQRCode");
                    }
                    reject("JSSDK Error:checked api error named scanQRCode");
                }
            });
        });
    };
    WechatOffice.prototype.chooseContactsAsync = function (param) {
        return undefined;
    };
    WechatOffice.prototype.getContactsInfoAsync = function (param) {
        return undefined;
    };
    WechatOffice.prototype.uploadPhotoAsync = function (param) {
        return undefined;
    };
    WechatOffice.prototype.userLocationAsync = function (param) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            wx.ready(function () {
                if (_this.validateWechatSdkByFuncName("getLocation")) {
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
                        }
                    });
                }
                else {
                    if (param && param.fail) {
                        param.fail("JSSDK Error:checked api error named getLocation!");
                    }
                    reject("JSSDK Error:checked api error named getLocation!");
                }
            });
        });
    };
    WechatOffice.prototype.userLocationWifiAsync = function (param) {
        return undefined;
    };
    WechatOffice.prototype.getWifiInfoAsync = function (param) {
        return undefined;
    };
    WechatOffice.prototype.getWifiMacAsync = function (param) {
        return undefined;
    };
    WechatOffice.prototype.faceCollectionAsync = function (param) {
        return undefined;
    };
    WechatOffice.prototype.faceCompareAsync = function (param) {
        return undefined;
    };
    WechatOffice.prototype.wechatPayAsync = function (param) {
        return undefined;
    };
    WechatOffice.prototype.aliPayAsync = function (param) {
        return undefined;
    };
    WechatOffice.prototype.openReadWithTimer = function (param) {
        return undefined;
    };
    WechatOffice.prototype.getDeviceInfo = function (param) {
        return undefined;
    };
    return WechatOffice;
}(BaseDevice));
export { WechatOffice };
//# sourceMappingURL=wechat.office.js.map