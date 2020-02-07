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
import { YzMobile } from "./yzmobile";
import { WechatOffice } from "./wechat.office";
import { Browser } from "./browser";
var PlatForm = /** @class */ (function (_super) {
    __extends(PlatForm, _super);
    function PlatForm(option) {
        var _this = _super.call(this, option) || this;
        _this.proxy = _this.distribute(option);
        return _this;
    }
    PlatForm.prototype.distribute = function (option) {
        var agent = window.navigator.userAgent.toLowerCase();
        if (/iphone/.test(agent) && /mobile/.test(agent) && /yunzai/.test(agent)) {
            return new YzMobile(option);
        }
        else if (/android/.test(agent) &&
            /mobile/.test(agent) &&
            /yunzai/.test(agent)) {
            return new YzMobile(option);
        }
        else if (/linux/.test(agent) && /yunzai/.test(agent)) {
            return new YzMobile(option);
        }
        else if (/micromessenger/.test(agent)) {
            return new WechatOffice(option);
        }
        else {
            return new Browser(option);
        }
    };
    PlatForm.prototype.getUser = function () {
        return this.proxy.getUser();
    };
    PlatForm.prototype.auth = function () {
        return this.proxy.auth();
    };
    PlatForm.prototype.apiRegister = function () {
        this.proxy.apiRegister();
    };
    PlatForm.prototype.openWindow = function (param) {
        this.proxy.openWindow(param);
    };
    PlatForm.prototype.setNavigationBarTitle = function (param) {
        this.proxy.setNavigationBarTitle(param);
    };
    PlatForm.prototype.setNavigationBarRightItems = function (param) {
        this.proxy.setNavigationBarRightItems(param);
    };
    PlatForm.prototype.setWebCanShare = function (param) {
        this.proxy.setWebCanShare(param);
    };
    PlatForm.prototype.openMediaCameraAsync = function (param) {
        return this.proxy.openMediaCameraAsync(param);
    };
    PlatForm.prototype.scanQrCodeAsync = function (param) {
        return this.proxy.scanQrCodeAsync(param);
    };
    PlatForm.prototype.chooseContactsAsync = function (param) {
        return this.proxy.chooseContactsAsync(param);
    };
    PlatForm.prototype.getContactsInfoAsync = function (param) {
        this.proxy.getContactsInfoAsync(param);
    };
    PlatForm.prototype.uploadPhotoAsync = function (param) {
        return this.proxy.uploadPhotoAsync(param);
    };
    PlatForm.prototype.userLocationAsync = function (param) {
        return this.proxy.userLocationAsync(param);
    };
    PlatForm.prototype.userLocationWifiAsync = function (param) {
        return this.proxy.userLocationWifiAsync(param);
    };
    PlatForm.prototype.getWifiInfoAsync = function (param) {
        return this.proxy.getWifiInfoAsync(param);
    };
    PlatForm.prototype.getWifiMacAsync = function (param) {
        return this.proxy.getWifiMacAsync(param);
    };
    PlatForm.prototype.faceCollectionAsync = function (param) {
        return this.proxy.faceCollectionAsync(param);
    };
    PlatForm.prototype.faceCompareAsync = function (param) {
        return this.proxy.faceCompareAsync(param);
    };
    PlatForm.prototype.wechatPayAsync = function (param) {
        return this.proxy.wechatPayAsync(param);
    };
    PlatForm.prototype.aliPayAsync = function (param) {
        return this.proxy.aliPayAsync(param);
    };
    PlatForm.prototype.openReadWithTimer = function (param) {
        return this.proxy.openReadWithTimer(param);
    };
    PlatForm.prototype.getDeviceInfo = function (param) {
        return this.proxy.getDeviceInfo(param);
    };
    return PlatForm;
}(BaseDevice));
export { PlatForm };
//# sourceMappingURL=platform.js.map