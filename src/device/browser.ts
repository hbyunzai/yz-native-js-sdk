import {BaseDevice} from "./base.device";
import {
    BrowserNavigation,
    NavigationBarTitle,
    NavigationBarRightItems
} from "../operation/navigation";

import {WebCanShare} from '../operation/share';

export class Browser extends BaseDevice {
    setNavigationBarRightItems(param: NavigationBarRightItems): void {
    }

    setNavigationBarTitle(param: NavigationBarTitle): void {
    }

    openWindow(param: BrowserNavigation): void {
    }

    setWebCanShare(param: WebCanShare): void {
    }
}
