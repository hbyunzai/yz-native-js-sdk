import {
    Navigation,
    NavigationBarTitle,
    NavigationBarRightItems
} from "../operation/navigation";

import {WebCanShare} from "../operation/share";
import {Token, TokenParam} from "../operation/token";
import {User} from "../operation/user";

export abstract class BaseDevice {
    abstract openWindow(param: Navigation): void;

    abstract setNavigationBarTitle(param: NavigationBarTitle): void;

    abstract setNavigationBarRightItems(param: NavigationBarRightItems): void;

    abstract setWebCanShare(param: WebCanShare): void;

    abstract getTokenAsync(param: TokenParam): Promise<Token>;

    abstract getTokenSync(): Token;

    abstract getUserAsync(): Promise<User>;

    abstract getUserSync(): User;
}
