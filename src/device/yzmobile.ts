import {BaseDevice} from "./base.device";
import {
    YzNavigation,
    YzNavigationBarTitle,
    YzNavigationBarRightItems
} from "../operation/navigation";
import {YzWebCanShare} from "../operation/share";
import {YzToken, YzTokenParam} from "../operation/token";

declare let yz: any;

export class YzMobile extends BaseDevice {
    setNavigationBarRightItems(param: YzNavigationBarRightItems): void {
        yz.setNavigationBarRightItems(param);
    }

    setNavigationBarTitle(param: YzNavigationBarTitle): void {
        yz.setNavigationBarTitle(param);
    }

    openWindow(param: YzNavigation): void {
        yz.navigationOpenWindow(param);
    }

    setWebCanShare(param: YzWebCanShare): void {
        yz.setWebCanShare(param);
    }

    getTokenAsync(param: YzTokenParam): Promise<YzToken> {
        return new Promise<YzToken>((resolve, reject) => {
            yz.getToken({
                refresh: param.refresh,
                success: (token: YzToken) => {
                    resolve(token);
                },
                fail: (msg: any) => {
                    reject(false)
                },
                complete: (msg: any) => {
                    reject(false)
                }
            });
        });
    }

    getTokenSync(): YzToken {
        return yz.getTokenSync();
    }

}
