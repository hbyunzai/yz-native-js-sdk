import {BaseDevice} from "./base.device";
import {
    WechatOfficeNavigation,
    NavigationBarTitle,
    NavigationBarRightItems
} from "../operation/navigation";
import {WebCanShare} from "../operation/share";
import {Token, TokenParam} from "../operation/token";

export class WechatOffice extends BaseDevice {
    setNavigationBarRightItems(param: NavigationBarRightItems): void {
    }

    setNavigationBarTitle(param: NavigationBarTitle): void {
    }

    openWindow(param: WechatOfficeNavigation): void {
    }

    setWebCanShare(param: WebCanShare): void {
    }

    getTokenAsync(param: TokenParam): Promise<Token> {
        return Promise.resolve(null);
    }
}
