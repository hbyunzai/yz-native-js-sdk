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
var Browser = /** @class */ (function (_super) {
    __extends(Browser, _super);
    function Browser(option) {
        return _super.call(this, option) || this;
    }
    Browser.prototype.setNavigationBarRightItems = function (param) { };
    Browser.prototype.setNavigationBarTitle = function (param) { };
    Browser.prototype.openWindow = function (param) { };
    Browser.prototype.setWebCanShare = function (param) { };
    Browser.prototype.getTokenAsync = function (param) {
        return undefined;
    };
    Browser.prototype.getTokenSync = function () {
        return undefined;
    };
    Browser.prototype.getUserAsync = function (param) {
        return undefined;
    };
    Browser.prototype.getUserSync = function () {
        return undefined;
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
        return undefined;
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
    return Browser;
}(BaseDevice));
export { Browser };
//# sourceMappingURL=browser.js.map