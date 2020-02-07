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
var WechatMicro = /** @class */ (function (_super) {
    __extends(WechatMicro, _super);
    function WechatMicro(option) {
        return _super.call(this, option) || this;
    }
    WechatMicro.prototype.auth = function () {
        return Promise.resolve(null);
    };
    WechatMicro.prototype.apiRegister = function () { };
    WechatMicro.prototype.getUser = function () {
        return Promise.resolve(null);
    };
    WechatMicro.prototype.setNavigationBarRightItems = function (param) { };
    WechatMicro.prototype.setNavigationBarTitle = function (param) { };
    WechatMicro.prototype.openWindow = function (param) { };
    WechatMicro.prototype.setWebCanShare = function (param) { };
    WechatMicro.prototype.openMediaCameraAsync = function (param) {
        return undefined;
    };
    WechatMicro.prototype.scanQrCodeAsync = function (param) {
        return undefined;
    };
    WechatMicro.prototype.chooseContactsAsync = function (param) {
        return undefined;
    };
    WechatMicro.prototype.getContactsInfoAsync = function (param) { };
    WechatMicro.prototype.uploadPhotoAsync = function (param) {
        return undefined;
    };
    WechatMicro.prototype.userLocationAsync = function (param) {
        return undefined;
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
    return WechatMicro;
}(BaseDevice));
export { WechatMicro };
//# sourceMappingURL=wechat.micro.js.map