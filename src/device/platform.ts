import {BaseDevice} from "./base.device";
import {
    Navigation,
    NavigationBarTitle,
    NavigationBarRightItems
} from "../operation/navigation";
import {WebCanShare} from '../operation/share';
import {YzMobile} from "./yzmobile";
import {Token, TokenParam} from "../operation/token";
import {User, UserParam} from "../operation/user";
import {MediaCamera, MediaCameraParam} from "../operation/media.camera";
import {QRcode, QRcodeParam} from '../operation/media.qrcode';
import {ContactUser, ContactUserParam} from "../operation/contact.users";
import {ContactUserInfo, ContactUserInfoParam} from "../operation/contact.userinfo";
import {MediaPhoto, MediaPhotoParam} from "../operation/media.photo";
import {MediaLocation, MediaLocationParam} from "../operation/media.location";
import {MediaWifiLocation, MediaWifiLocationParam} from "../operation/media.wifi.location";
import {MediaWifiInfo, MediaWifiInfoParam} from "../operation/media.wifi.info";
import {MediaWifiMac, MediaWifiMacParam} from "../operation/media.wifi.mac";
import {FaceCollection, FaceCollectionParam} from "../operation/face.collection";
import {FaceCompare, FaceCompareParam} from "../operation/face.compare";

export class PlatForm extends BaseDevice {
    private proxy: BaseDevice;

    constructor() {
        super();
        this.proxy = this.distribute();
    }

    distribute(): BaseDevice {
        return new YzMobile();
    }

    openWindow(param?: Navigation): void {
        this.proxy.openWindow(param);
    }

    setNavigationBarTitle(param?: NavigationBarTitle): void {
        this.proxy.setNavigationBarTitle(param);
    }

    setNavigationBarRightItems(param?: NavigationBarRightItems): void {
        this.proxy.setNavigationBarRightItems(param);
    }

    setWebCanShare(param?: WebCanShare): void {
        this.proxy.setWebCanShare(param);
    }

    getTokenAsync(param?: TokenParam): Promise<Token> {
        return this.proxy.getTokenAsync(param);
    }

    getTokenSync(): Token {
        return this.proxy.getTokenSync();
    }

    getUserAsync(param?: UserParam): Promise<User> {
        return this.proxy.getUserAsync(param);
    }

    getUserSync(): User {
        return this.proxy.getUserSync();
    }

    openMediaCameraAsync(param?: MediaCameraParam): Promise<MediaCamera> {
        return this.proxy.openMediaCameraAsync(param);
    }

    scanQrCodeAsync(param?: QRcodeParam): Promise<QRcode> {
        return this.proxy.scanQrCodeAsync(param);
    }

    chooseContactsAsync(param?: ContactUserParam): Promise<Array<ContactUser>> {
        return this.proxy.chooseContactsAsync(param);
    }

    getContactsInfoAsync(param?: ContactUserInfoParam): Promise<ContactUserInfo> {
        return this.proxy.getContactsInfoAsync(param);
    }

    uploadPhotoAsync(param?: MediaPhotoParam): Promise<MediaPhoto> {
        return this.proxy.uploadPhotoAsync(param);
    }

    userLocationAsync(param?: MediaLocationParam): Promise<MediaLocation> {
        return this.proxy.userLocationAsync(param);
    }

    userLocationWifiAsync(param?: MediaWifiLocationParam): Promise<MediaWifiLocation> {
        return this.proxy.userLocationWifiAsync(param);
    }

    getWifiInfoAsync(param?: MediaWifiInfoParam): Promise<MediaWifiInfo> {
        return this.proxy.getWifiInfoAsync(param);
    }

    getWifiMacAsync(param?: MediaWifiMacParam): Promise<MediaWifiMac> {
        return this.proxy.getWifiMacAsync(param);
    }

    faceCollectionAsync(param?: FaceCollectionParam): Promise<FaceCollection> {
        return this.proxy.faceCollectionAsync(param);
    }

    faceCompareAsync(param?: FaceCompareParam): Promise<FaceCompare> {
        return this.proxy.faceCompareAsync(param);
    }


}
