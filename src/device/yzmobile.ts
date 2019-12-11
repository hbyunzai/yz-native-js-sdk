import {BaseDevice} from "./base.device";
import {
    YzNavigation,
    YzNavigationBarTitle,
    YzNavigationBarRightItems
} from "../operation/navigation";
import {YzWebCanShare} from "../operation/share";
import {YzToken, YzTokenAsyncParam} from "../operation/token";
import {YzUser, YzUserParam} from "../operation/user";
import {YzMediaCamera, YzMediaCameraParam} from "../operation/media.camera";

declare let yz: any;

export class YzMobile extends BaseDevice {
    setNavigationBarRightItems(param?: YzNavigationBarRightItems): void {
        yz.setNavigationBarRightItems(param);
    }

    setNavigationBarTitle(param?: YzNavigationBarTitle): void {
        yz.setNavigationBarTitle(param);
    }

    openWindow(param?: YzNavigation): void {
        yz.navigationOpenWindow(param);
    }

    setWebCanShare(param?: YzWebCanShare): void {
        yz.setWebCanShare(param);
    }

    getTokenAsync(param?: YzTokenAsyncParam): Promise<YzToken> {
        return new Promise<YzToken>((resolve, reject) => {
            yz.getToken({
                refresh: param.refresh,
                success: (token: YzToken) => {
                    if (param && param.success) {
                        param.success(token);
                    }
                    resolve(token);
                },
                fail: (msg: any) => {
                    if (param && param.fail) {
                        param.fail(msg);
                    }
                    reject(false)
                },
                complete: (msg: any) => {
                    if (param && param.complete) {
                        param.complete(msg);
                    }
                    reject(false)
                }
            });
        });
    }

    getTokenSync(): YzToken {
        return yz.getTokenSync();
    }

    getUserAsync(param?: YzUserParam): Promise<YzUser> {
        return new Promise<YzUser>((resolve, reject) => {
            yz.getUserInfo({
                success: (user: YzUser) => {
                    if (param && param.success) {
                        param.success(user);
                    }
                    resolve(user);
                },
                fail: (msg: any) => {
                    if (param && param.fail) {
                        param.fail(msg);
                    }
                    reject(false);
                },
                complete: (msg: any) => {
                    if (param && param.complete) {
                        param.complete(msg);
                    }
                    reject(false);
                }
            })
        });
    }

    getUserSync(): YzUser {
        return yz.getUserInfoSync();
    }

    openMediaCameraAsync(param?: YzMediaCameraParam): Promise<YzMediaCamera> {
        return new Promise<YzMediaCamera>((resolve, reject) => {
            yz.openCamera({
                success: (data: YzMediaCamera) => {
                    if (param && param.success) {
                        param.success(data);
                    }
                    resolve(data);
                },
                fail: (msg: any) => {
                    if (param && param.fail) {
                        param.fail(msg);
                    }
                    reject(false);
                },
                complete: (msg: any) => {
                    if (param && param.complete) {
                        param.complete(msg);
                    }
                    reject(false);
                }
            });
        });
    }
}
