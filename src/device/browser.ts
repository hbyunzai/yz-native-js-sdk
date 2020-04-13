import {BaseDevice} from "./base.device";
import {
    BrowserNavigation,
    NavigationBarTitle,
    NavigationBarRightItems
} from "../operation/navigation";

import {WebCanShare} from "../operation/share";
import {Token} from "../operation/token";
import {YzUser} from "../operation/user";
import {MediaCamera, MediaCameraParam} from "../operation/media.camera";
import {QRcode, QRcodeParam} from "../operation/media.qrcode";
import {ContactUser, ContactUserParam} from "../operation/contact.users";
import {ContactUserInfoParam} from "../operation/contact.userinfo";
import {MediaPhoto, MediaPhotoParam} from "../operation/media.photo";
import {MediaLocation, MediaLocationParam} from "../operation/media.location";
import {
    MediaWifiLocation,
    MediaWifiLocationParam
} from "../operation/media.wifi.location";
import {
    MediaWifiInfo,
    MediaWifiInfoParam
} from "../operation/media.wifi.info";
import {MediaWifiMac, MediaWifiMacParam} from "../operation/media.wifi.mac";
import {
    FaceCollection,
    FaceCollectionParam
} from "../operation/face.collection";
import {FaceCompare, FaceCompareParam} from "../operation/face.compare";
import {PayWechat, PayWechatParam} from "../operation/pay.wechat";
import {PayAlipay, PayAlipayParam} from "../operation/pay.alipay";
import {
    ReadWithNumber,
    ReadWithNumberParam
} from "../operation/read.with.number";
import {DeviceInfo, DeviceInfoParam} from "../operation/device.info";
import {DeviceOption} from "./device.option";
import {http} from "../utils";
import {FileBrowser} from "../operation/fileBrowser";

export class Browser extends BaseDevice {
    constructor(option?: DeviceOption) {
        super(option);
    }

    auth(): Promise<Token> {
        const url = encodeURIComponent(window.location.href.toString());
        return new Promise<Token>((resolve, reject) => {
            http(
                "GET",
                this.option.GATE_WAY +
                "/cas-proxy/app/validate_full?callback=" +
                url +
                "&timestamp=" +
                new Date().getTime(),
                response => {
                    const res = JSON.parse(response);
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
                }
            );
        });
    }

    getUser(): Promise<YzUser> {
        return new Promise<YzUser>((resolve, reject) => {
            http(
                "GET",
                this.option.GATE_WAY + "/auth/user",
                function (data: any) {
                    resolve(data.principal);
                },
                this.option
            );
        });
    }

    apiRegister(): void {
        console.warn("browser hasn't api register");
    }

    setNavigationBarRightItems(param?: NavigationBarRightItems): void {
    }

    setNavigationBarTitle(param?: NavigationBarTitle): void {
    }

    openWindow(param?: BrowserNavigation): void {
    }

    setWebCanShare(param?: WebCanShare): void {
    }

    openMediaCameraAsync(param?: MediaCameraParam): Promise<MediaCamera> {
        return undefined;
    }

    scanQrCodeAsync(param?: QRcodeParam): Promise<QRcode> {
        return undefined;
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

    userLocationAsync(param?: MediaLocationParam): Promise<MediaLocation> {
        return new Promise<MediaLocation>((reslove, reject) => {
            reslove({
                address: "brwoser hasn't location",
                latitude: 0,
                longitude: 0
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
        window.open(param.url);
        return Promise.resolve(true);
    }
}
