import {BaseDevice} from "./base.device";
import {
    BrowserNavigation,
    NavigationBarTitle,
    NavigationBarRightItems
} from "../operation/navigation";

import {WebCanShare} from '../operation/share';
import {Token, TokenParam} from "../operation/token";

export class Browser extends BaseDevice {
    setNavigationBarRightItems(param: NavigationBarRightItems): void {
    }

    setNavigationBarTitle(param: NavigationBarTitle): void {
    }

    openWindow(param: BrowserNavigation): void {
    }

    setWebCanShare(param: WebCanShare): void {
    }

    getTokenAsync(param: TokenParam): Promise<Token> {
        return Promise.resolve(null);
    }
    getTokenSync(): Token {
        return undefined;
    }

}
