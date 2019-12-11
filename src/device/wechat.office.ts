import {BaseDevice} from "./base.device";
import {
    WechatOfficeNavigation,
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

export class WechatOffice extends BaseDevice {
    setNavigationBarRightItems(param?: NavigationBarRightItems): void {
    }

    setNavigationBarTitle(param?: NavigationBarTitle): void {
    }

    openWindow(param?: WechatOfficeNavigation): void {
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



}
