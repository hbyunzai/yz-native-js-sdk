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


}
