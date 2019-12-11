import {BaseDevice} from "./base.device";
import {
    WechatMicroNavigation,
    NavigationBarTitle,
    NavigationBarRightItems
} from "../operation/navigation";
import {WebCanShare} from "../operation/share";
import {Token, TokenParam} from "../operation/token";
import {User, UserParam} from "../operation/user";
import {MediaCamera, MediaCameraParam} from "../operation/media.camera";
import {QRcode, QRcodeParam} from "../operation/media.qrcode";
import {ContactUser, ContactUserParam} from "../operation/contact.users";
import {ContactUserInfo, ContactUserInfoParam} from "../operation/contact.userinfo";
import {MediaPhoto, MediaPhotoParam} from "../operation/media.photo";
import {MediaLocation, MediaLocationParam} from "../operation/media.location";
import {MediaWifiLocation, MediaWifiLocationParam} from "../operation/media.wifi.location";
import {MediaWifiInfo, MediaWifiInfoParam} from "../operation/media.wifi.info";
import {MediaWifiMac, MediaWifiMacParam} from "../operation/media.wifi.mac";

export class WechatMicro extends BaseDevice {
    setNavigationBarRightItems(param?: NavigationBarRightItems): void {
    }

    setNavigationBarTitle(param?: NavigationBarTitle): void {
    }

    openWindow(param?: WechatMicroNavigation): void {
    }

    setWebCanShare(param?: WebCanShare): void {
    }

    getTokenAsync(param?: TokenParam): Promise<Token> {
        return undefined;
    }

    getTokenSync(): Token {
        return undefined;
    }

    getUserAsync(param?:UserParam): Promise<User> {
        return undefined;
    }

    getUserSync(): User {
        return undefined;
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

    getContactsInfoAsync(param?: ContactUserInfoParam): Promise<ContactUserInfo> {
        return undefined;
    }

    uploadPhotoAsync(param?: MediaPhotoParam): Promise<MediaPhoto> {
        return undefined;
    }

    userLocationAsync(param?: MediaLocationParam): Promise<MediaLocation> {
        return undefined;
    }

    userLocationWifiAsync(param?: MediaWifiLocationParam): Promise<MediaWifiLocation> {
        return undefined;
    }

    getWifiInfoAsync(param?: MediaWifiInfoParam): Promise<MediaWifiInfo> {
        return undefined;
    }

    getWifiMacAsync(param?: MediaWifiMacParam): Promise<MediaWifiMac> {
        return undefined;
    }


}
