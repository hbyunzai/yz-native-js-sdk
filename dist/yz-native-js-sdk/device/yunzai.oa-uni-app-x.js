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
import { DeviceType } from "./device.type";
import { WebViewAppCommService } from "./webview-uniappx.service";
var YunzaiOaUniAppX = /** @class */ (function (_super) {
    __extends(YunzaiOaUniAppX, _super);
    function YunzaiOaUniAppX(option) {
        var _this = _super.call(this, option) || this;
        _this.webViewAppCommService = new WebViewAppCommService();
        return _this;
    }
    YunzaiOaUniAppX.prototype.getType = function () {
        return DeviceType.YUNZAI_OA_UNI_APP_X;
    };
    YunzaiOaUniAppX.prototype.auth = function () {
        var _this = this;
        console.log('uni-app-x auth:');
        return new Promise(function (resolve, reject) {
            _this.webViewAppCommService.getUserInfo().then(function (res) {
                console.log(res);
                // 设置token
                var realToken = { accessToken: res.token };
                resolve(realToken);
            });
        });
    };
    YunzaiOaUniAppX.prototype.apiRegister = function (url) {
    };
    YunzaiOaUniAppX.prototype.setNavigationBarRightItems = function (param) {
    };
    YunzaiOaUniAppX.prototype.setNavigationBarTitle = function (param) {
        document.getElementsByTagName("title")[0].innerText = param.title;
    };
    YunzaiOaUniAppX.prototype.openWindow = function (param) {
        window.location.href = param.url;
    };
    YunzaiOaUniAppX.prototype.setWebCanShare = function (param) {
    };
    YunzaiOaUniAppX.prototype.getUser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            http("GET", _this.option.GATE_WAY + "/auth/user", function (data) {
                resolve(JSON.parse(data).principal);
            }, _this.option);
        });
    };
    YunzaiOaUniAppX.prototype.openMediaCameraAsync = function (param) {
        return undefined;
    };
    YunzaiOaUniAppX.prototype.scanQrCodeAsync = function (param) {
        return undefined;
    };
    YunzaiOaUniAppX.prototype.chooseContactsAsync = function (param) {
        return undefined;
    };
    YunzaiOaUniAppX.prototype.getContactsInfoAsync = function (param) {
        return undefined;
    };
    YunzaiOaUniAppX.prototype.uploadPhotoAsync = function (param) {
        return undefined;
    };
    YunzaiOaUniAppX.prototype.userLocationAsync = function (param) {
        return undefined;
    };
    YunzaiOaUniAppX.prototype.userLocationWifiAsync = function (param) {
        return undefined;
    };
    YunzaiOaUniAppX.prototype.getWifiInfoAsync = function (param) {
        return undefined;
    };
    YunzaiOaUniAppX.prototype.getWifiMacAsync = function (param) {
        return undefined;
    };
    YunzaiOaUniAppX.prototype.faceCollectionAsync = function (param) {
        return undefined;
    };
    YunzaiOaUniAppX.prototype.faceCompareAsync = function (param) {
        return undefined;
    };
    YunzaiOaUniAppX.prototype.wechatPayAsync = function (param) {
        return undefined;
    };
    YunzaiOaUniAppX.prototype.aliPayAsync = function (param) {
        return undefined;
    };
    YunzaiOaUniAppX.prototype.openReadWithTimer = function (param) {
        return undefined;
    };
    YunzaiOaUniAppX.prototype.getDeviceInfo = function (param) {
        return undefined;
    };
    YunzaiOaUniAppX.prototype.fileBrowser = function (param) {
        alert("请在打开页面后,选择右上角选择浏览器打开!");
        return Promise.resolve(true);
    };
    YunzaiOaUniAppX.prototype.downloadByBrowser = function (param) {
        alert("请在打开页面后,选择右上角选择浏览器打开!");
        return Promise.resolve(true);
    };
    return YunzaiOaUniAppX;
}(BaseDevice));
export { YunzaiOaUniAppX };
//# sourceMappingURL=yunzai.oa-uni-app-x.js.map