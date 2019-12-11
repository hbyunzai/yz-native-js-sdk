import {
    Navigation,
    NavigationBarTitle,
    NavigationBarRightItems
} from "../operation/navigation";

import {WebCanShare} from "../operation/share";
import {Token, TokenParam} from "../operation/token";

export abstract class BaseDevice {
    abstract openWindow(param: Navigation): void;

    abstract setNavigationBarTitle(param: NavigationBarTitle): void;

    abstract setNavigationBarRightItems(param: NavigationBarRightItems): void;

    abstract setWebCanShare(param: WebCanShare): void;

    abstract getTokenSync(param: TokenParam): Promise<Token>;
}
