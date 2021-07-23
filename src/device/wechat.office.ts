import { BaseDevice } from "./base.device";
import {
    WechatOfficeNavigation,
    NavigationBarTitle,
    NavigationBarRightItems
} from "../operation/navigation";
import { WebCanShare } from "../operation/share";
import { Token, TokenParam } from "../operation/token";
import { User, UserParam, YzUser } from "../operation/user";
import { MediaCamera, MediaCameraParam } from "../operation/media.camera";
import { QRcode, YzQrcode, YzQrcodeParam } from "../operation/media.qrcode";
import { ContactUser, ContactUserParam } from "../operation/contact.users";
import { ContactUserInfoParam } from "../operation/contact.userinfo";
import { MediaPhoto, MediaPhotoParam } from "../operation/media.photo";
import {
    YzMediaLocationParam,
    YzMediaLocation
} from "../operation/media.location";
import {
    MediaWifiLocation,
    MediaWifiLocationParam
} from "../operation/media.wifi.location";
import {
    MediaWifiInfo,
    MediaWifiInfoParam
} from "../operation/media.wifi.info";
import { MediaWifiMac, MediaWifiMacParam } from "../operation/media.wifi.mac";
import {
    FaceCollection,
    FaceCollectionParam
} from "../operation/face.collection";
import { FaceCompare, FaceCompareParam } from "../operation/face.compare";
import { PayWechat, PayWechatParam } from "../operation/pay.wechat";
import { PayAlipay, PayAlipayParam } from "../operation/pay.alipay";
import {
    ReadWithNumber,
    ReadWithNumberParam
} from "../operation/read.with.number";
import { DeviceInfo, DeviceInfoParam } from "../operation/device.info";
import { DeviceOption } from "./device.option";
import { http } from "../utils/http";
import { WechatOfficeInfo, WECHAT_JSSDK_LIST } from "./wechat.office.info";
import { FileBrowser } from "../operation/fileBrowser";
import { DownloadBrowserParam } from "../operation";

declare let wx: any;

export class WechatOffice extends BaseDevice {
    constructor(option?: DeviceOption) {
        super(option);
    }

    auth(): Promise<Token> {
        return new Promise<Token>((resolve, reject) => {
            let authurl = this.option.GATE_WAY + "/wechat/mp/token";
            http("GET", authurl, token => {
                const realToken = { accessToken: JSON.parse(token).message };
                resolve(realToken);
            });
        });
    }

    apiRegister(): void {
        http(
            "GET",
            this.option.GATE_WAY +
            "/wechat/mp/jssdk" +
            "?url=" +
            window.location.href.split("#")[0],
            function (data: string) {
                const wechatOfficeInfo: WechatOfficeInfo = JSON.parse(data);
                wechatOfficeInfo.debug = false;
                wechatOfficeInfo.jsApiList = WECHAT_JSSDK_LIST;
                wx.config({ ...wechatOfficeInfo });
            },
            this.option
        );
    }

    setNavigationBarRightItems(param?: NavigationBarRightItems): void {
    }

    setNavigationBarTitle(param?: NavigationBarTitle): void {
        document.getElementsByTagName("title")[0].innerText = param.title;
    }

    openWindow(param?: WechatOfficeNavigation): void {
        window.location.href = param.url;
    }

    setWebCanShare(param?: WebCanShare): void {
    }

    getUser(): Promise<YzUser> {
        return new Promise<YzUser>((resolve, reject) => {
            http(
                "GET",
                this.option.GATE_WAY + "/auth/user",
                function (data: any) {
                    resolve(JSON.parse(data).principal);
                },
                this.option
            );
        });
    }

    openMediaCameraAsync(param?: MediaCameraParam): Promise<MediaCamera> {
        return undefined;
    }

    scanQrCodeAsync(param?: YzQrcodeParam): Promise<QRcode> {
        return new Promise<YzQrcode>((resovle, reject) => {
            wx.ready(() => {
                wx.scanQRCode({
                    needResult: 1,
                    scanType: ["qrCode", "barCode"],
                    success: (res: any) => {
                        if (res.errMsg === "scanQRCode:ok") {
                            if (param && param.success) {
                                param.success(res.resultStr)
                            }
                            resovle(res.resultStr);
                        } else {
                            if (param && param.fail) {
                                param.fail("NativeJSSDK Error:error to scan qrcode")
                            }
                            reject("NativeJSSDK Error:error to scan qrcode");
                        }
                    }
                });
            });
        });
    }

    chooseContactsAsync(param?: ContactUserParam): Promise<Array<ContactUser>> {
        return undefined;
    }

    getContactsInfoAsync(param?: ContactUserInfoParam): void {
        return undefined;
    }

    uploadPhotoAsync(param?: MediaPhotoParam): Promise<MediaPhoto> {
        return undefined;
    }

    userLocationAsync(param?: YzMediaLocationParam): Promise<YzMediaLocation> {
        return new Promise<YzMediaLocation>((resolve, reject) => {
            wx.ready(() => {
                wx.getLocation({
                    type: "wgs84", // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                    success: function (res: any) {
                        if (res.errMsg === "getLocation:ok") {
                            var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                            var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                            var address = "微信无address";
                            resolve({ latitude, longitude, address });
                            if (param && param.success) {
                                param.success({ latitude, longitude, address });
                                resolve({ latitude, longitude, address });
                            }
                        } else {
                            if (param && param.fail) {
                                param.fail("NativeJSSDK Error:error to get location!");
                            }
                            reject("NativeJSSDK Error:error to get location!");
                        }
                    }
                });
            });
        });
    }

    userLocationWifiAsync(
        param?: MediaWifiLocationParam
    ): Promise<MediaWifiLocation> {
        return undefined;
    }

    getWifiInfoAsync(param?: MediaWifiInfoParam): Promise<MediaWifiInfo> {
        return undefined;
    }

    getWifiMacAsync(param?: MediaWifiMacParam): Promise<MediaWifiMac> {
        return undefined;
    }

    faceCollectionAsync(param?: FaceCollectionParam): Promise<FaceCollection> {
        return undefined;
    }

    faceCompareAsync(param?: FaceCompareParam): Promise<FaceCompare> {
        return undefined;
    }

    wechatPayAsync(param?: PayWechatParam): Promise<PayWechat> {
        return undefined;
    }

    aliPayAsync(param?: PayAlipayParam): Promise<PayAlipay> {
        return undefined;
    }

    openReadWithTimer(param?: ReadWithNumberParam): Promise<ReadWithNumber> {
        return undefined;
    }

    getDeviceInfo(param?: DeviceInfoParam): Promise<DeviceInfo> {
        return undefined;
    }

    fileBrowser(param?: FileBrowser): Promise<any> {
        alert("微信请在打开页面后,选择右上角选择浏览器打开!")
        return Promise.resolve(true);
    }

    downloadByBrowser(param?: DownloadBrowserParam): Promise<any> {
        alert("微信请在打开页面后,选择右上角选择浏览器打开!")
        return Promise.resolve(true);
    }
}
