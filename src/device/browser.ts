import {BaseDevice} from "./base.device";
import {
    BrowserNavigation,
    NavigationBarTitle,
    NavigationBarRightItems
} from "../operation/navigation";

import {WebCanShare} from '../operation/share';
import {Token, TokenParam} from "../operation/token";
import {User, UserParam} from "../operation/user";
import {MediaCamera, MediaCameraParam} from "../operation/media.camera";
import {QRcode, QRcodeParam} from "../operation/media.qrcode";

export class Browser extends BaseDevice {
    setNavigationBarRightItems(param?: NavigationBarRightItems): void {
    }

    setNavigationBarTitle(param?: NavigationBarTitle): void {
    }

    openWindow(param?: BrowserNavigation): void {
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


}
