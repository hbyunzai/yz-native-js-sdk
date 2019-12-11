import {
    Navigation,
    NavigationBarTitle,
    NavigationBarRightItems
} from "../operation/navigation";

import {WebCanShare} from "../operation/share";
import {Token, TokenParam} from "../operation/token";
import {User, UserParam} from "../operation/user";
import {MediaCamera, MediaCameraParam} from "../operation/media.camera";
import {QRcode, QRcodeParam} from "../operation/media.qrcode";

export abstract class BaseDevice {
    abstract openWindow(param?: Navigation): void;

    abstract setNavigationBarTitle(param?: NavigationBarTitle): void;

    abstract setNavigationBarRightItems(param?: NavigationBarRightItems): void;

    abstract setWebCanShare(param?: WebCanShare): void;

    abstract getTokenAsync(param?: TokenParam): Promise<Token>;

    abstract getTokenSync(): Token;

    abstract getUserAsync(param?: UserParam): Promise<User>;

    abstract getUserSync(): User;

    abstract openMediaCameraAsync(param?: MediaCameraParam): Promise<MediaCamera>;

    abstract scanQrCodeAsync(param?: QRcodeParam): Promise<QRcode>;
}
