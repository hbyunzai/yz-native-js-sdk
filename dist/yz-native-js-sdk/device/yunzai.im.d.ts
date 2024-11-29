import { BaseDevice } from "./base.device";
import { NavigationBarRightItems, NavigationBarTitle, WechatOfficeNavigation } from "../operation/navigation";
import { WebCanShare } from "../operation/share";
import { Token } from "../operation/token";
import { YzUser } from "../operation/user";
import { MediaCamera, MediaCameraParam } from "../operation/media.camera";
import { QRcode, YzQrcodeParam } from "../operation/media.qrcode";
import { ContactUser, ContactUserParam } from "../operation/contact.users";
import { ContactUserInfoParam } from "../operation/contact.userinfo";
import { MediaPhoto, MediaPhotoParam } from "../operation/media.photo";
import { YzMediaLocation, YzMediaLocationParam } from "../operation/media.location";
import { MediaWifiLocation, MediaWifiLocationParam } from "../operation/media.wifi.location";
import { MediaWifiInfo, MediaWifiInfoParam } from "../operation/media.wifi.info";
import { MediaWifiMac, MediaWifiMacParam } from "../operation/media.wifi.mac";
import { FaceCollection, FaceCollectionParam } from "../operation/face.collection";
import { FaceCompare, FaceCompareParam } from "../operation/face.compare";
import { PayWechat, PayWechatParam } from "../operation/pay.wechat";
import { PayAlipay, PayAlipayParam } from "../operation/pay.alipay";
import { ReadWithNumber, ReadWithNumberParam } from "../operation/read.with.number";
import { DeviceInfo, DeviceInfoParam } from "../operation/device.info";
import { DeviceOption } from "./device.option";
import { FileBrowser } from "../operation/fileBrowser";
import { DownloadBrowserParam } from "../operation";
export declare class YunzaiIm extends BaseDevice {
    constructor(option?: DeviceOption);
    auth(): Promise<Token>;
    apiRegister(): void;
    setNavigationBarRightItems(param?: NavigationBarRightItems): void;
    setNavigationBarTitle(param?: NavigationBarTitle): void;
    openWindow(param?: WechatOfficeNavigation): void;
    setWebCanShare(param?: WebCanShare): void;
    getUser(): Promise<YzUser>;
    openMediaCameraAsync(param?: MediaCameraParam): Promise<MediaCamera>;
    scanQrCodeAsync(param?: YzQrcodeParam): Promise<QRcode>;
    chooseContactsAsync(param?: ContactUserParam): Promise<Array<ContactUser>>;
    getContactsInfoAsync(param?: ContactUserInfoParam): void;
    uploadPhotoAsync(param?: MediaPhotoParam): Promise<MediaPhoto>;
    userLocationAsync(param?: YzMediaLocationParam): Promise<YzMediaLocation>;
    userLocationWifiAsync(param?: MediaWifiLocationParam): Promise<MediaWifiLocation>;
    getWifiInfoAsync(param?: MediaWifiInfoParam): Promise<MediaWifiInfo>;
    getWifiMacAsync(param?: MediaWifiMacParam): Promise<MediaWifiMac>;
    faceCollectionAsync(param?: FaceCollectionParam): Promise<FaceCollection>;
    faceCompareAsync(param?: FaceCompareParam): Promise<FaceCompare>;
    wechatPayAsync(param?: PayWechatParam): Promise<PayWechat>;
    aliPayAsync(param?: PayAlipayParam): Promise<PayAlipay>;
    openReadWithTimer(param?: ReadWithNumberParam): Promise<ReadWithNumber>;
    getDeviceInfo(param?: DeviceInfoParam): Promise<DeviceInfo>;
    fileBrowser(param?: FileBrowser): Promise<any>;
    downloadByBrowser(param?: DownloadBrowserParam): Promise<any>;
}