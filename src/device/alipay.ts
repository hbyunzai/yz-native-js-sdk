import {BaseDevice} from "./base.device";
import {
    AliPayNavigation,
    NavigationBarTitle,
    NavigationBarRightItems
} from "../operation/navigation";

import {WebCanShare} from '../operation/share';

export class Alipay extends BaseDevice {
    setNavigationBarRightItems(param: NavigationBarRightItems): void {
    }

    setNavigationBarTitle(param: NavigationBarTitle): void {
    }

    openWindow(param: AliPayNavigation): void {
    }

    setWebCanShare(param: WebCanShare): void {
    }
}
