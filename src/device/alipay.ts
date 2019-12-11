import {BaseDevice} from "./base.device";
import {
    AliPayNavigation,
    NavigationBarTitle,
    NavigationBarRightItems
} from "../operation/navigation";

import {WebCanShare} from '../operation/share';
import {Token, TokenParam} from "../operation/token";

export class Alipay extends BaseDevice {
    setNavigationBarRightItems(param: NavigationBarRightItems): void {
    }

    setNavigationBarTitle(param: NavigationBarTitle): void {
    }

    openWindow(param: AliPayNavigation): void {
    }

    setWebCanShare(param: WebCanShare): void {
    }

    getTokenSync(param: TokenParam): Promise<Token> {
        return Promise.resolve(null);
    }
}
