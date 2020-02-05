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
var Alipay = /** @class */ (function (_super) {
    __extends(Alipay, _super);
    function Alipay(option) {
        return _super.call(this, option) || this;
    }
    Alipay.prototype.setNavigationBarRightItems = function (param) { };
    Alipay.prototype.setNavigationBarTitle = function (param) { };
    Alipay.prototype.openWindow = function (param) { };
    Alipay.prototype.setWebCanShare = function (param) { };
    Alipay.prototype.getTokenAsync = function (param) {
        return undefined;
    };
    Alipay.prototype.getTokenSync = function () {
        return undefined;
    };
    Alipay.prototype.getUserAsync = function (param) {
        return undefined;
    };
    Alipay.prototype.getUserSync = function () {
        return undefined;
    };
    Alipay.prototype.openMediaCameraAsync = function (param) {
        return undefined;
    };
    Alipay.prototype.scanQrCodeAsync = function (param) {
        return undefined;
    };
    Alipay.prototype.chooseContactsAsync = function (param) {
        return undefined;
    };
    Alipay.prototype.getContactsInfoAsync = function (param) {
        return undefined;
    };
    Alipay.prototype.uploadPhotoAsync = function (param) {
        return undefined;
    };
    Alipay.prototype.userLocationAsync = function (param) {
        return undefined;
    };
    Alipay.prototype.userLocationWifiAsync = function (param) {
        return undefined;
    };
    Alipay.prototype.getWifiInfoAsync = function (param) {
        return undefined;
    };
    Alipay.prototype.getWifiMacAsync = function (param) {
        return undefined;
    };
    Alipay.prototype.faceCollectionAsync = function (param) {
        return undefined;
    };
    Alipay.prototype.faceCompareAsync = function (param) {
        return undefined;
    };
    Alipay.prototype.wechatPayAsync = function (param) {
        return undefined;
    };
    Alipay.prototype.aliPayAsync = function (param) {
        return undefined;
    };
    Alipay.prototype.openReadWithTimer = function (param) {
        return undefined;
    };
    Alipay.prototype.getDeviceInfo = function (param) {
        return undefined;
    };
    return Alipay;
}(BaseDevice));
export { Alipay };
//# sourceMappingURL=alipay.js.map