import {BaseDevice} from "./base.device";
import {
    WechatMicroNavigation,
    NavigationBarTitle,
    NavigationBarRightItems
} from "../operation/navigation";
import {WebCanShare} from "../operation/share";
import {Token, TokenParam} from "../operation/token";
import {User} from "../operation/user";

export class WechatMicro extends BaseDevice {
    setNavigationBarRightItems(param: NavigationBarRightItems): void {
    }

    setNavigationBarTitle(param: NavigationBarTitle): void {
    }

    openWindow(param: WechatMicroNavigation): void {
    }

    setWebCanShare(param: WebCanShare): void {
    }

    getTokenAsync(param: TokenParam): Promise<Token> {
        return Promise.resolve(null);
    }

    getTokenSync(): Token {
        return undefined;
    }

    getUserAsync(): Promise<User> {
        return undefined;
    }

    getUserSync(): User {
        return undefined;
    }


}
