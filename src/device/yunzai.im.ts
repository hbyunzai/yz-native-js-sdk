import {BaseDevice} from "./base.device";
import {NavigationBarRightItems, NavigationBarTitle, WechatOfficeNavigation} from "../operation/navigation";
import {WebCanShare} from "../operation/share";
import {Token} from "../operation/token";
import {YzUser} from "../operation/user";
import {MediaCamera, MediaCameraParam} from "../operation/media.camera";
import {QRcode, YzQrcode, YzQrcodeParam} from "../operation/media.qrcode";
import {ContactUser, ContactUserParam} from "../operation/contact.users";
import {ContactUserInfoParam} from "../operation/contact.userinfo";
import {MediaPhoto, MediaPhotoParam} from "../operation/media.photo";
import {YzMediaLocation, YzMediaLocationParam} from "../operation/media.location";
import {MediaWifiLocation, MediaWifiLocationParam} from "../operation/media.wifi.location";
import {MediaWifiInfo, MediaWifiInfoParam} from "../operation/media.wifi.info";
import {MediaWifiMac, MediaWifiMacParam} from "../operation/media.wifi.mac";
import {FaceCollection, FaceCollectionParam} from "../operation/face.collection";
import {FaceCompare, FaceCompareParam} from "../operation/face.compare";
import {PayWechat, PayWechatParam} from "../operation/pay.wechat";
import {PayAlipay, PayAlipayParam} from "../operation/pay.alipay";
import {ReadWithNumber, ReadWithNumberParam} from "../operation/read.with.number";
import {DeviceInfo, DeviceInfoParam} from "../operation/device.info";
import {DeviceOption} from "./device.option";
import {http} from "../utils/http";
import {FileBrowser} from "../operation/fileBrowser";
import {DownloadBrowserParam} from "../operation";
import {DeviceType} from "./device.type";

declare let UniJsBridge: any;

export class YunzaiIm extends BaseDevice {
    constructor(option?: DeviceOption) {
        super(option);
    }

    getType(): DeviceType {
        return DeviceType.YUNZAI_IM;
    }

    auth(): Promise<Token> {
        return new Promise<Token>((resolve, reject) => {
            UniJsBridge.callHandler("getToken", {}, (res: any) => {
                // res:就是上面的callbackFunction的参数
                // 注意：如果uni-app不调用callbackFunction,那么这个回调函数是不会执行
                console.log('getToken response:', JSON.stringify(res));
                const token: any = {};
                token.tokenType = res.data.token_type;
                token.accessToken = res.data.access_token;
                token.scope = res.data.scope;
                token.tokenDateLine = res.data.expires_in;
                // 设置token
                const realToken = {accessToken: token.accessToken};
                resolve(realToken);
            });
        });
    }

    apiRegister(): void {
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
            UniJsBridge.callHandler("clickScan", {}, (res: any) => {
                console.log('clickScan response:', JSON.stringify(res));
                const {result} = res.data;
                resovle(result);
            })
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
            // type参数支持 wgs84和 gcj02
            UniJsBridge.callHandler("userLocation", {type: 'wgs84',}, (res: any) => {
                console.log('userLocation response:', JSON.stringify(res));
                const {latitude, longitude} = res.data;
                const address = '暂无address';
                resolve({latitude, longitude, address});
            })
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
        alert("请在打开页面后,选择右上角选择浏览器打开!")
        return Promise.resolve(true);
    }

    downloadByBrowser(param?: DownloadBrowserParam): Promise<any> {
        alert("请在打开页面后,选择右上角选择浏览器打开!")
        return Promise.resolve(true);
    }
}
