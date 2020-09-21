import {BaseDevice} from "./base.device";
import {YzWebCanShare} from "../operation/share";
import {YzToken} from "../operation/token";
import {YzUser} from "../operation/user";
import {YzMediaCamera, YzMediaCameraParam} from "../operation/media.camera";
import {QRcode, YzQrcode, YzQrcodeParam} from "../operation/media.qrcode";
import {YzContactUser, YzContactUserParam} from "../operation/contact.users";
import {YzConcatUserInfoParam} from "../operation/contact.userinfo";
import {
    YzMediaPhoto,
    YzMediaPhotoParam,
    YzMediaPhotoType
} from "../operation/media.photo";
import {
    YzNavigation,
    YzNavigationBarTitle,
    YzNavigationBarRightItems
} from "../operation/navigation";
import {
    YzMediaLocation,
    YzMediaLocationParam
} from "../operation/media.location";
import {
    YzMediaWifiLocation,
    YzMediaWifiLocationParam
} from "../operation/media.wifi.location";
import {
    YzMediaWifiInfo,
    YzMediaWifiInfoParam
} from "../operation/media.wifi.info";
import {
    YzMediaWifiMac,
    YzMediaWifiMacParam
} from "../operation/media.wifi.mac";
import {
    YzFaceCollection,
    YzFaceCollectionParam
} from "../operation/face.collection";
import {YzFaceCompare, YzFaceCompareParam} from "../operation/face.compare";
import {YzPayWechat, YzPayWechatParam} from "../operation/pay.wechat";
import {YzAlipay, YzAlipayParam} from "../operation/pay.alipay";
import {
    YzReadWithNumber,
    YzReadWithNumberParam
} from "../operation/read.with.number";
import {YzDeviceInfo, YzDeviceInfoParam} from "../operation/device.info";
import {DeviceOption} from "../device/device.option";
import {http} from "../utils/http";
import {YzFileBrowser} from "../operation/fileBrowser";
import {YzDownloadBrowserParam} from "../operation";

declare let yz: any;

export class YzMobile extends BaseDevice {
    constructor(option?: DeviceOption) {
        super(option);
    }

    getUser(): Promise<YzUser> {
        return new Promise<YzUser>((resolve, reject) => {
            return http(
                "GET",
                this.option.GATE_WAY + "/auth/user",
                function (data: any) {
                    resolve(JSON.parse(data).principal);
                },
                this.option
            );
        });
    }

    auth(): Promise<YzToken> {
        return new Promise<YzToken>((resolve, reject) => {
            const token = yz.getTokenSync();
            resolve(token);
        });
    }

    apiRegister(): void {
    }

    setNavigationBarRightItems(param?: YzNavigationBarRightItems): void {
        yz.setNavigationBarRightItems(param);
    }

    setNavigationBarTitle(param?: YzNavigationBarTitle): void {
        yz.setNavigationBarTitle(param);
    }

    openWindow(param?: YzNavigation): void {
        yz.navigationOpenWindow(param);
    }

    setWebCanShare(param?: YzWebCanShare): void {
        yz.setWebCanShare(param);
    }

    openMediaCameraAsync(param?: YzMediaCameraParam): Promise<YzMediaCamera> {
        return new Promise<YzMediaCamera>((resolve, reject) => {
            yz.openCamera({
                success: (data: YzMediaCamera) => {
                    if (param && param.success) {
                        param.success(data);
                    }
                    resolve(data);
                },
                fail: (msg: any) => {
                    if (param && param.fail) {
                        param.fail(msg);
                    }
                    reject(false);
                },
                complete: (msg: any) => {
                    if (param && param.complete) {
                        param.complete(msg);
                    }
                    reject(false);
                }
            });
        });
    }

    scanQrCodeAsync(param?: YzQrcodeParam): Promise<QRcode> {
        return new Promise<YzQrcode>((resolve, reject) => {
            yz.scanCode({
                success: (data: YzQrcode) => {
                    if (param && param.success) {
                        param.success(data);
                    }
                    resolve(data);
                },
                fail: (errMsg: any) => {
                    if (param && param.fail) {
                        param.fail(errMsg);
                    }
                    reject(errMsg)
                },
                complete: (msg: any) => {
                    if (param && param.complete) {
                        param.complete(msg);
                    }
                }
            });
        });
    }

    chooseContactsAsync(
        param?: YzContactUserParam
    ): Promise<Array<YzContactUser>> {
        return new Promise<Array<YzContactUser>>((resolve, reject) => {
            let temp = {
                success: (contacts: Array<YzContactUser>) => {
                    if (param && param.success) {
                        param.success(contacts);
                    }
                    resolve(contacts);
                },
                fail: (error: any) => {
                    if (param && param.fail) {
                        param.fail(error);
                    }
                    reject(false);
                },
                complete: (msg: any) => {
                    if (param && param.complete) {
                        param.complete(msg);
                    }
                    reject(false);
                }
            };
            if (param && param.count) {
                temp = Object.defineProperties(temp, {count: {value: param.count}});
            }
            yz.chooseContacts(temp);
        });
    }

    getContactsInfoAsync(param?: YzConcatUserInfoParam): void {
        yz.ContactDetails({
            targetUserId: param.targetUserId,
            success: function (userInfo: any) {
                if (param && param.success) {
                    param.success(userInfo);
                }
            },
            fail: function (errMsg: any) {
                if (param && param.fail) {
                    param.fail(errMsg);
                }
            },
            complete: function (msg: any) {
                if (param && param.complete) {
                    param.complete(msg);
                }
            }
        });
    }

    uploadPhotoAsync(param?: YzMediaPhotoParam): Promise<YzMediaPhoto> {
        return new Promise<YzMediaPhoto>((resolve, reject) => {
            let temp = {
                success: function (photo: YzMediaPhoto) {
                    if (param && param.success) {
                        param.success(photo);
                    }
                    resolve(photo);
                },
                fail: function (errMsg: any) {
                    if (param && param.fail) {
                        param.fail(errMsg);
                    }
                },
                complete: function (msg: any) {
                    if (param && param.complete) {
                        param.complete(msg);
                    }
                }
            };

            if (param && param.count) {
                Object.defineProperties(temp, {count: {value: param.count}});
            }
            if (param && param.sourceType) {
                Object.defineProperties(temp, {
                    sourceType: {value: param.sourceType}
                });
            } else {
                Object.defineProperties(temp, {
                    sourceType: {
                        value: [YzMediaPhotoType.ALBUM, YzMediaPhotoType.CAMERA]
                    }
                });
            }
            yz.uploadImage(temp);
        });
    }

    userLocationAsync(param?: YzMediaLocationParam): Promise<YzMediaLocation> {
        return new Promise<YzMediaLocation>((resolve, reject) => {
            yz.userLocation({
                success: (data: YzMediaLocation) => {
                    if (param && param.success) {
                        param.success(data);
                    }
                    resolve(data);
                },
                fail: (error: any) => {
                    if (param && param.fail) {
                        param.fail(error);
                    }
                    reject(false);
                },
                complete: (msg: any) => {
                    if (param && param.complete) {
                        param.complete(msg);
                    }
                    reject(false);
                }
            });
        });
    }

    userLocationWifiAsync(
        param?: YzMediaWifiLocationParam
    ): Promise<YzMediaWifiLocation> {
        return new Promise<YzMediaWifiLocation>((resolve, reject) => {
            yz.userLocationContainAp({
                bssids: param.bssids,
                success: function (data: YzMediaWifiLocation) {
                    if (param && param.success) {
                        param.success(data);
                    }
                    resolve(data);
                },
                fail: (error: any) => {
                    if (param && param.fail) {
                        param.fail(error);
                    }
                    reject(false);
                },
                complete: (msg: any) => {
                    if (param && param.complete) {
                        param.complete(msg);
                    }
                    reject(false);
                }
            });
        });
    }

    getWifiInfoAsync(param?: YzMediaWifiInfoParam): Promise<YzMediaWifiInfo> {
        return new Promise<YzMediaWifiInfo>((resolve, reject) => {
            yz.getWifiInfo({
                success: function (data: YzMediaWifiInfo) {
                    if (param && param.success) {
                        param.success(data);
                    }
                    resolve(data);
                },
                fail: (error: any) => {
                    if (param && param.fail) {
                        param.fail(error);
                    }
                    reject(false);
                },
                complete: (msg: any) => {
                    if (param && param.complete) {
                        param.complete(msg);
                    }
                    reject(false);
                }
            });
        });
    }

    getWifiMacAsync(param?: YzMediaWifiMacParam): Promise<YzMediaWifiMac> {
        return new Promise<YzMediaWifiMac>((resolve, reject) => {
            yz.getMac({
                success: function (data: YzMediaWifiMac) {
                    if (param && param.success) {
                        param.success(data);
                    }
                    resolve(data);
                },
                fail: (error: any) => {
                    if (param && param.fail) {
                        param.fail(error);
                    }
                    reject(false);
                },
                complete: (msg: any) => {
                    if (param && param.complete) {
                        param.complete(msg);
                    }
                    reject(false);
                }
            });
        });
    }

    faceCollectionAsync(
        param?: YzFaceCollectionParam
    ): Promise<YzFaceCollection> {
        return new Promise<YzFaceCollection>((resolve, reject) => {
            yz.faceLiveCollection({
                live: param.live,
                userId: param.userId,
                success: function (data: YzFaceCollection) {
                    if (param && param.success) {
                        param.success(data);
                    }
                    resolve(data);
                },
                fail: (error: any) => {
                    if (param && param.fail) {
                        param.fail(error);
                    }
                    reject(false);
                },
                complete: (msg: any) => {
                    if (param && param.complete) {
                        param.complete(msg);
                    }
                    reject(false);
                }
            });
        });
    }

    faceCompareAsync(param?: YzFaceCompareParam): Promise<YzFaceCompare> {
        return new Promise<YzFaceCompare>((resolve, reject) => {
            yz.faceCompare({
                userId: param.userId,
                success: function (data: YzFaceCompare) {
                    if (param && param.success) {
                        param.success(data);
                    }
                    resolve(data);
                },
                fail: (error: any) => {
                    if (param && param.fail) {
                        param.fail(error);
                    }
                    reject(false);
                },
                complete: (msg: any) => {
                    if (param && param.complete) {
                        param.complete(msg);
                    }
                    reject(false);
                }
            });
        });
    }

    wechatPayAsync(param?: YzPayWechatParam): Promise<YzPayWechat> {
        return new Promise<YzPayWechat>((resolve, reject) => {
            yz.wechatPay({
                payInfo: {
                    appid: param.appid,
                    partnerid: param.partnerid,
                    prepayid: param.prepayid,
                    package: param.package,
                    noncestr: param.noncestr,
                    timestamp: param.timestamp,
                    sign: param.sign
                },
                success: function (data: YzPayWechat) {
                    if (param && param.success) {
                        param.success(data);
                    }
                    resolve(data);
                },
                fail: (error: any) => {
                    if (param && param.fail) {
                        param.fail(error);
                    }
                    reject(false);
                },
                complete: (msg: any) => {
                    if (param && param.complete) {
                        param.complete(msg);
                    }
                    reject(false);
                }
            });
        });
    }

    aliPayAsync(param?: YzAlipayParam): Promise<YzAlipay> {
        return new Promise<YzAlipay>((resolve, reject) => {
            yz.aliPay({
                payInfo: param,
                success: function (data: YzAlipay) {
                    if (param && param.success) {
                        param.success(data);
                    }
                    resolve(data);
                },
                fail: (error: any) => {
                    if (param && param.fail) {
                        param.fail(error);
                    }
                    reject(false);
                },
                complete: (msg: any) => {
                    if (param && param.complete) {
                        param.complete(msg);
                    }
                    reject(false);
                }
            });
        });
    }

    openReadWithTimer(param?: YzReadWithNumberParam): Promise<YzReadWithNumber> {
        return new Promise<YzReadWithNumber>((resolve, reject) => {
            yz.openReadWithTimer({
                url: param.url,
                openType: param.openType,
                title: param.title,
                id: param.id,
                type: param.type,
                success: function (data: YzReadWithNumber) {
                    if (param && param.success) {
                        param.success(data);
                    }
                    resolve(data);
                },
                fail: (error: any) => {
                    if (param && param.fail) {
                        param.fail(error);
                    }
                    reject(false);
                },
                complete: (msg: any) => {
                    if (param && param.complete) {
                        param.complete(msg);
                    }
                    reject(false);
                }
            });
        });
    }

    getDeviceInfo(param?: YzDeviceInfoParam): Promise<YzDeviceInfo> {
        return new Promise<YzDeviceInfo>((resolve, reject) => {
            yz.getDeviceInfo({
                success: function (data: YzDeviceInfo) {
                    if (param && param.success) {
                        param.success(data);
                    }
                    resolve(data);
                },
                fail: (error: any) => {
                    if (param && param.fail) {
                        param.fail(error);
                    }
                    reject(false);
                },
                complete: (msg: any) => {
                    if (param && param.complete) {
                        param.complete(msg);
                    }
                    reject(false);
                }
            });
        });
    }

    fileBrowser(param?: YzFileBrowser): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            yz.fileBrowser({
                url: param.url,
                title: param.title,
                success: function (data: any) {
                    param.success(data);
                    resolve(data);
                },
                fail: function (error: any) {
                    param.fail(error)
                    reject(error);
                },
                complete: function () {
                    param.complete();
                    resolve("complete");
                }
            })
        });
    }

    downloadByBrowser(param?: YzDownloadBrowserParam): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            yz.downloadByBrowser({
                url: param.url,
                success: function () {
                    param.success();
                    resolve(true);
                },
                fail: function (error: any) {
                    param.fail(error);
                    reject(error);
                },
                complete: function () {
                    param.complete();
                    resolve("complete");
                }
            })
        });
    }
}
