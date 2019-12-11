import {BaseDevice} from "./base.device";
import {
    YzNavigation,
    YzNavigationBarTitle,
    YzNavigationBarRightItems
} from "../operation/navigation";
import {YzWebCanShare} from "../operation/share";
import {YzToken, YzTokenAsyncParam} from "../operation/token";
import {YzUser, YzUserParam} from "../operation/user";
import {YzMediaCamera, YzMediaCameraParam} from "../operation/media.camera";
import {QRcode, YzQrcode, YzQrcodeParam} from "../operation/media.qrcode";
import {YzContactUser, YzContactUserParam} from "../operation/contact.users";
import {YzConcatUserInfoParam, YzContactUserInfo} from "../operation/contact.userinfo";
import {MediaPhoto, MediaPhotoParam, YzMediaPhoto, YzMediaPhotoParam, YzMediaPhotoType} from "../operation/media.photo";

declare let yz: any;

export class YzMobile extends BaseDevice {
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

    getTokenAsync(param?: YzTokenAsyncParam): Promise<YzToken> {
        return new Promise<YzToken>((resolve, reject) => {
            yz.getToken({
                refresh: param.refresh,
                success: (token: YzToken) => {
                    if (param && param.success) {
                        param.success(token);
                    }
                    resolve(token);
                },
                fail: (msg: any) => {
                    if (param && param.fail) {
                        param.fail(msg);
                    }
                    reject(false)
                },
                complete: (msg: any) => {
                    if (param && param.complete) {
                        param.complete(msg);
                    }
                    reject(false)
                }
            });
        });
    }

    getTokenSync(): YzToken {
        return yz.getTokenSync();
    }

    getUserAsync(param?: YzUserParam): Promise<YzUser> {
        return new Promise<YzUser>((resolve, reject) => {
            yz.getUserInfo({
                success: (user: YzUser) => {
                    if (param && param.success) {
                        param.success(user);
                    }
                    resolve(user);
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
            })
        });
    }

    getUserSync(): YzUser {
        return yz.getUserInfoSync();
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
                },
                complete: (msg: any) => {
                    if (param && param.complete) {
                        param.complete(msg);
                    }
                }
            })
        });
    }

    chooseContactsAsync(param?: YzContactUserParam): Promise<Array<YzContactUser>> {
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
                        param.complete(msg)
                    }
                    reject(false);
                }
            }
            if (param && param.count) {
                temp = Object.defineProperties(temp, {count: {value: param.count}});
            }
            yz.chooseContacts(temp)
        });
    }

    getContactsInfoAsync(param?: YzConcatUserInfoParam): Promise<YzContactUserInfo> {
        return new Promise<YzContactUserInfo>((resolve, reject) => {
            yz.getUserInfo({
                success: function (userInfo: YzContactUserInfo) {
                    if (param && param.success) {
                        param.success(userInfo);
                    }
                    resolve(userInfo);
                },
                fail: function (errMsg: any) {
                    if (param && param.fail) {
                        param.fail(errMsg);
                    }
                    reject(false);
                },
                complete: function (msg: any) {
                    if (param && param.complete) {
                        param.complete(msg);
                    }
                    reject(false);
                }
            });
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
            }

            if (param && param.count) {
                Object.defineProperties(temp, {count: {value: param.count}});
            }
            if (param && param.sourceType) {
                Object.defineProperties(temp, {sourceType: {value: param.sourceType}});
            } else {
                Object.defineProperties(temp, {sourceType: {value: [YzMediaPhotoType.ALBUM, YzMediaPhotoType.CAMERA]}});
            }
            yz.uploadImage(temp);
        });
    }
}
