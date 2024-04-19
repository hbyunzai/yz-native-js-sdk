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
import { http } from "../utils";
var Browser = /** @class */ (function (_super) {
    __extends(Browser, _super);
    function Browser(option) {
        return _super.call(this, option) || this;
    }
    Browser.prototype.auth = function () {
        var _this = this;
        var url = encodeURIComponent(window.location.href.toString());
        return new Promise(function (resolve, reject) {
            http("GET", _this.option.GATE_WAY +
                "/cas-proxy/app/validate_full?callback=" +
                url +
                "&timestamp=" +
                new Date().getTime(), function (response) {
                var res = JSON.parse(response);
                switch (res.errcode) {
                    case 2000:
                        resolve({
                            accessToken: res.data.access_token,
                            tokenType: res.data.token_type,
                            scope: res.data.scope,
                            tokenDateLine: res.data.expires_in
                        });
                        break;
                    case 2001:
                        window.location.href = res.msg;
                        break;
                    case 2002:
                        alert(res.data);
                        break;
                    case 2003:
                    case 5000:
                    case 5001:
                        alert(res.msg);
                        break;
                    default:
                        break;
                }
            });
        });
    };
    Browser.prototype.getUser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            http("GET", _this.option.GATE_WAY + "/auth/user", function (data) {
                resolve(data.principal);
            }, _this.option);
        });
    };
    Browser.prototype.apiRegister = function () {
        console.warn("browser hasn't api register");
    };
    Browser.prototype.setNavigationBarRightItems = function (param) {
    };
    Browser.prototype.setNavigationBarTitle = function (param) {
    };
    Browser.prototype.openWindow = function (param) {
    };
    Browser.prototype.setWebCanShare = function (param) {
    };
    Browser.prototype.openMediaCameraAsync = function (param) {
        return undefined;
    };
    Browser.prototype.scanQrCodeAsync = function (param) {
        return undefined;
    };
    Browser.prototype.chooseContactsAsync = function (param) {
        return undefined;
    };
    Browser.prototype.getContactsInfoAsync = function (param) {
        return undefined;
    };
    Browser.prototype.uploadPhotoAsync = function (param) {
        return undefined;
    };
    Browser.prototype.userLocationAsync = function (param) {
        return new Promise(function (reslove, reject) {
            reslove({
                address: "brwoser hasn't location",
                latitude: 0,
                longitude: 0
            });
        });
    };
    Browser.prototype.userLocationWifiAsync = function (param) {
        return undefined;
    };
    Browser.prototype.getWifiInfoAsync = function (param) {
        return undefined;
    };
    Browser.prototype.getWifiMacAsync = function (param) {
        return undefined;
    };
    Browser.prototype.faceCollectionAsync = function (param) {
        return undefined;
    };
    Browser.prototype.faceCompareAsync = function (param) {
        return undefined;
    };
    Browser.prototype.wechatPayAsync = function (param) {
        return undefined;
    };
    Browser.prototype.aliPayAsync = function (param) {
        return undefined;
    };
    Browser.prototype.openReadWithTimer = function (param) {
        return undefined;
    };
    Browser.prototype.getDeviceInfo = function (param) {
        return undefined;
    };
    Browser.prototype.fileBrowser = function (param) {
        window.open(param.url);
        return Promise.resolve(true);
    };
    Browser.prototype.downloadByBrowser = function (param) {
        window.open(param.url);
        return Promise.resolve(true);
    };
    return Browser;
}(BaseDevice));
export { Browser };
//# sourceMappingURL=browser.js.map