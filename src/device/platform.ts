import {BaseDevice} from "./base.device";
import {
    Navigation,
    NavigationBarTitle,
    NavigationBarRightItems
} from "../operation/navigation";
import {WebCanShare} from '../operation/share';
import {YzMobile} from "./yzmobile";

export class PlatForm extends BaseDevice {
    private proxy: BaseDevice;

    constructor() {
        super();
        this.proxy = this.distribute();
    }

    distribute(): BaseDevice {
        return new YzMobile();
    }

    openWindow(param: Navigation): void {
        this.proxy.openWindow(param);
    }

    setNavigationBarTitle(param: NavigationBarTitle): void {
        this.proxy.setNavigationBarTitle(param);
    }

    setNavigationBarRightItems(param: NavigationBarRightItems): void {
        this.proxy.setNavigationBarRightItems(param);
    }

    setWebCanShare(param: WebCanShare): void {
        this.proxy.setWebCanShare(param);
    }
}
