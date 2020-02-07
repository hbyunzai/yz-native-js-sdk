import { BaseDevice } from "./base.device";
import { Navigation, NavigationBarTitle, NavigationBarRightItems } from "../operation/navigation";
import { WebCanShare } from "../operation/share";
import { Token } from "../operation/token";
import { MediaCamera, MediaCameraParam } from "../operation/media.camera";
import { QRcode, QRcodeParam } from "../operation/media.qrcode";
import { ContactUser, ContactUserParam } from "../operation/contact.users";
import { ContactUserInfoParam } from "../operation/contact.userinfo";
import { MediaPhoto, MediaPhotoParam } from "../operation/media.photo";
import { MediaLocation, MediaLocationParam } from "../operation/media.location";
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
export declare class PlatForm extends BaseDevice {
    private proxy;
    constructor(option?: DeviceOption);
    distribute(option?: DeviceOption): BaseDevice;
    auth(): Promise<Token>;
    apiRegister(): void;
    openWindow(param?: Navigation): void;
    setNavigationBarTitle(param?: NavigationBarTitle): void;
    setNavigationBarRightItems(param?: NavigationBarRightItems): void;
    setWebCanShare(param?: WebCanShare): void;
    openMediaCameraAsync(param?: MediaCameraParam): Promise<MediaCamera>;
    scanQrCodeAsync(param?: QRcodeParam): Promise<QRcode>;
    chooseContactsAsync(param?: ContactUserParam): Promise<Array<ContactUser>>;
    getContactsInfoAsync(param?: ContactUserInfoParam): void;
    uploadPhotoAsync(param?: MediaPhotoParam): Promise<MediaPhoto>;
    userLocationAsync(param?: MediaLocationParam): Promise<MediaLocation>;
    userLocationWifiAsync(param?: MediaWifiLocationParam): Promise<MediaWifiLocation>;
    getWifiInfoAsync(param?: MediaWifiInfoParam): Promise<MediaWifiInfo>;
    getWifiMacAsync(param?: MediaWifiMacParam): Promise<MediaWifiMac>;
    faceCollectionAsync(param?: FaceCollectionParam): Promise<FaceCollection>;
    faceCompareAsync(param?: FaceCompareParam): Promise<FaceCompare>;
    wechatPayAsync(param?: PayWechatParam): Promise<PayWechat>;
    aliPayAsync(param?: PayAlipayParam): Promise<PayAlipay>;
    openReadWithTimer(param?: ReadWithNumberParam): Promise<ReadWithNumber>;
    getDeviceInfo(param?: DeviceInfoParam): Promise<DeviceInfo>;
}
