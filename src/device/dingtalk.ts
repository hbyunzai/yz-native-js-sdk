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

declare let dd: any;

export class Dingtalk extends BaseDevice {
    constructor(option?: DeviceOption) {
        super(option);
    }

    getType(): DeviceType {
        return DeviceType.DINGTALK;
    }

    auth(): Promise<Token> {
        return new Promise<Token>((resolve, reject) => {
            let authurl = this.option.GATE_WAY + "/wechat/mp/token?url=" + encodeURIComponent(window.location.href);
            http("GET", authurl, token => {
                if (JSON.parse(token).error_code === 500) {
                    window.location.href = JSON.parse(token).path
                }
                const realToken = {accessToken: JSON.parse(token).message};
                resolve(realToken);
            });
        });
    }

    apiRegister(): void {
        http(
            "GET",
            this.option.GATE_WAY + "/wechat/mp/jssdk?url=" + encodeURIComponent(window.location.href),
            (res: string) => {
                const data = JSON.parse(res);
                dd.config({
                    agentId: data.agentId, // 必填，微应用ID
                    corpId: data.corpId, // 必填，企业ID
                    timeStamp: data.timestamp, // 必填，生成签名的时间戳
                    nonceStr: data.nonceStr, // 必填，自定义固定字符串。
                    signature: data.signature, // 必填，签名
                    type: 0,   // 选填。0表示微应用的jsapi,1表示服务窗的jsapi；不填默认为0。该参数从dingtalk.js的0.8.3版本开始支持
                    jsApiList: [
                        'requestAuthCode',
                        'scan',
                        'getLocation',
                        'device.geolocation.get',
                    ] // 必填，需要使用的jsapi列表，注意：不要带dd。
                });
                dd.ready(() => {
                    console.log('钉钉jssdk初始化完成.');
                });
                dd.error((res: any) => {
                    console.error('钉钉jssdk初始化失败:', res);
                });
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
        return new Promise<YzQrcode>((resolve, reject) => {
            dd.scan({
                type: 'qr',
                success: (res: any) => {
                    resolve(res.text);
                    if (param && param.success) {
                        param.success(res.text)
                    }
                },
                fail: (err: any) => {
                    console.error('调用扫一扫失败:' + JSON.stringify(err));
                    reject("DingtalkJSSDK Error:error to scan qrcode");
                    if (param && param.fail) {
                        param.fail("DingtalkJSSDK Error:error to scan qrcode")
                    }
                },
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
            dd.getLocation({
                type: 1,
                useCache: true,
                coordinate: '0',
                cacheTimeout: 20,
                withReGeocode: true,
                targetAccuracy: '200',
                success: (res: any) => {
                    const {latitude, longitude, address} = res;
                    resolve({latitude, longitude, address});
                    if (param && param.success) {
                        param.success({latitude, longitude, address});
                    }
                },
                fail: (err: any) => {
                    console.error('调用定位失败:' + JSON.stringify(err));
                    reject("DingtalkJSSDK Error:error to get location!");
                    if (param && param.fail) {
                        param.fail("DingtalkJSSDK Error:error to get location!");
                    }
                },
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
        alert("请在打开页面后,选择右上角选择浏览器打开!")
        return Promise.resolve(true);
    }

    downloadByBrowser(param?: DownloadBrowserParam): Promise<any> {
        alert("请在打开页面后,选择右上角选择浏览器打开!")
        return Promise.resolve(true);
    }
}
