var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { BaseDevice } from "./base.device";
import { YzMediaPhotoType } from "../operation/media.photo";
import { http } from "../utils/http";
var YzMobile = /** @class */ (function (_super) {
    __extends(YzMobile, _super);
    function YzMobile(option) {
        return _super.call(this, option) || this;
    }
    YzMobile.prototype.getUser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return http("GET", _this.option.GATE_WAY + "/auth/user", function (data) {
                resolve(JSON.parse(data).principal);
            }, _this.option);
        });
    };
    YzMobile.prototype.auth = function () {
        return new Promise(function (resolve, reject) {
            var token = yz.getTokenSync();
            resolve(token);
        });
    };
    YzMobile.prototype.apiRegister = function () {
    };
    YzMobile.prototype.setNavigationBarRightItems = function (param) {
        yz.setNavigationBarRightItems(param);
    };
    YzMobile.prototype.setNavigationBarTitle = function (param) {
        yz.setNavigationBarTitle(param);
    };
    YzMobile.prototype.openWindow = function (param) {
        yz.navigationOpenWindow(param);
    };
    YzMobile.prototype.setWebCanShare = function (param) {
        yz.setWebCanShare(param);
    };
    YzMobile.prototype.openMediaCameraAsync = function (param) {
        return new Promise(function (resolve, reject) {
            yz.openCamera({
                success: function (data) {
                    if (param && param.success) {
                        param.success(data);
                    }
                    resolve(data);
                },
                fail: function (msg) {
                    if (param && param.fail) {
                        param.fail(msg);
                    }
                    reject(false);
                },
                complete: function (msg) {
                    if (param && param.complete) {
                        param.complete(msg);
                    }
                    reject(false);
                }
            });
        });
    };
    YzMobile.prototype.scanQrCodeAsync = function (param) {
        return new Promise(function (resolve, reject) {
            yz.scanCode({
                success: function (data) {
                    if (param && param.success) {
                        param.success(data);
                    }
                    resolve(data);
                },
                fail: function (errMsg) {
                    if (param && param.fail) {
                        param.fail(errMsg);
                    }
                },
                complete: function (msg) {
                    if (param && param.complete) {
                        param.complete(msg);
                    }
                }
            });
        });
    };
    YzMobile.prototype.chooseContactsAsync = function (param) {
        return new Promise(function (resolve, reject) {
            var temp = {
                success: function (contacts) {
                    if (param && param.success) {
                        param.success(contacts);
                    }
                    resolve(contacts);
                },
                fail: function (error) {
                    if (param && param.fail) {
                        param.fail(error);
                    }
                    reject(false);
                },
                complete: function (msg) {
                    if (param && param.complete) {
                        param.complete(msg);
                    }
                    reject(false);
                }
            };
            if (param && param.count) {
                temp = Object.defineProperties(temp, { count: { value: param.count } });
            }
            yz.chooseContacts(temp);
        });
    };
    YzMobile.prototype.getContactsInfoAsync = function (param) {
        yz.ContactDetails({
            targetUserId: param.targetUserId,
            success: function (userInfo) {
                if (param && param.success) {
                    param.success(userInfo);
                }
            },
            fail: function (errMsg) {
                if (param && param.fail) {
                    param.fail(errMsg);
                }
            },
            complete: function (msg) {
                if (param && param.complete) {
                    param.complete(msg);
                }
            }
        });
    };
    YzMobile.prototype.uploadPhotoAsync = function (param) {
        return new Promise(function (resolve, reject) {
            var temp = {
                success: function (photo) {
                    if (param && param.success) {
                        param.success(photo);
                    }
                    resolve(photo);
                },
                fail: function (errMsg) {
                    if (param && param.fail) {
                        param.fail(errMsg);
                    }
                },
                complete: function (msg) {
                    if (param && param.complete) {
                        param.complete(msg);
                    }
                }
            };
            if (param && param.count) {
                Object.defineProperties(temp, { count: { value: param.count } });
            }
            if (param && param.sourceType) {
                Object.defineProperties(temp, {
                    sourceType: { value: param.sourceType }
                });
            }
            else {
                Object.defineProperties(temp, {
                    sourceType: {
                        value: [YzMediaPhotoType.ALBUM, YzMediaPhotoType.CAMERA]
                    }
                });
            }
            yz.uploadImage(temp);
        });
    };
    YzMobile.prototype.userLocationAsync = function (param) {
        return new Promise(function (resolve, reject) {
            yz.userLocation({
                success: function (data) {
                    if (param && param.success) {
                        param.success(data);
                    }
                    resolve(data);
                },
                fail: function (error) {
                    if (param && param.fail) {
                        param.fail(error);
                    }
                    reject(false);
                },
                complete: function (msg) {
                    if (param && param.complete) {
                        param.complete(msg);
                    }
                    reject(false);
                }
            });
        });
    };
    YzMobile.prototype.userLocationWifiAsync = function (param) {
        return new Promise(function (resolve, reject) {
            yz.userLocationContainAp({
                bssids: param.bssids,
                success: function (data) {
                    if (param && param.success) {
                        param.success(data);
                    }
                    resolve(data);
                },
                fail: function (error) {
                    if (param && param.fail) {
                        param.fail(error);
                    }
                    reject(false);
                },
                complete: function (msg) {
                    if (param && param.complete) {
                        param.complete(msg);
                    }
                    reject(false);
                }
            });
        });
    };
    YzMobile.prototype.getWifiInfoAsync = function (param) {
        return new Promise(function (resolve, reject) {
            yz.getWifiInfo({
                success: function (data) {
                    if (param && param.success) {
                        param.success(data);
                    }
                    resolve(data);
                },
                fail: function (error) {
                    if (param && param.fail) {
                        param.fail(error);
                    }
                    reject(false);
                },
                complete: function (msg) {
                    if (param && param.complete) {
                        param.complete(msg);
                    }
                    reject(false);
                }
            });
        });
    };
    YzMobile.prototype.getWifiMacAsync = function (param) {
        return new Promise(function (resolve, reject) {
            yz.getMac({
                success: function (data) {
                    if (param && param.success) {
                        param.success(data);
                    }
                    resolve(data);
                },
                fail: function (error) {
                    if (param && param.fail) {
                        param.fail(error);
                    }
                    reject(false);
                },
                complete: function (msg) {
                    if (param && param.complete) {
                        param.complete(msg);
                    }
                    reject(false);
                }
            });
        });
    };
    YzMobile.prototype.faceCollectionAsync = function (param) {
        return new Promise(function (resolve, reject) {
            yz.faceLiveCollection({
                live: param.live,
                userId: param.userId,
                success: function (data) {
                    if (param && param.success) {
                        param.success(data);
                    }
                    resolve(data);
                },
                fail: function (error) {
                    if (param && param.fail) {
                        param.fail(error);
                    }
                    reject(false);
                },
                complete: function (msg) {
                    if (param && param.complete) {
                        param.complete(msg);
                    }
                    reject(false);
                }
            });
        });
    };
    YzMobile.prototype.faceCompareAsync = function (param) {
        return new Promise(function (resolve, reject) {
            yz.faceCompare({
                userId: param.userId,
                success: function (data) {
                    if (param && param.success) {
                        param.success(data);
                    }
                    resolve(data);
                },
                fail: function (error) {
                    if (param && param.fail) {
                        param.fail(error);
                    }
                    reject(false);
                },
                complete: function (msg) {
                    if (param && param.complete) {
                        param.complete(msg);
                    }
                    reject(false);
                }
            });
        });
    };
    YzMobile.prototype.wechatPayAsync = function (param) {
        return new Promise(function (resolve, reject) {
            yz.wechatPay({
                payInfo: {
                    appid: param.appid,
                    partnerid: param.partnerid,
                    prepayid: param.prepayid,
                    package: param.package,
                    noncestr: param.noncestr,
                    timestamp: param.timestamp,
                    sign: param.sign
                },
                success: function (data) {
                    if (param && param.success) {
                        param.success(data);
                    }
                    resolve(data);
                },
                fail: function (error) {
                    if (param && param.fail) {
                        param.fail(error);
                    }
                    reject(false);
                },
                complete: function (msg) {
                    if (param && param.complete) {
                        param.complete(msg);
                    }
                    reject(false);
                }
            });
        });
    };
    YzMobile.prototype.aliPayAsync = function (param) {
        return new Promise(function (resolve, reject) {
            yz.aliPay({
                payInfo: param,
                success: function (data) {
                    if (param && param.success) {
                        param.success(data);
                    }
                    resolve(data);
                },
                fail: function (error) {
                    if (param && param.fail) {
                        param.fail(error);
                    }
                    reject(false);
                },
                complete: function (msg) {
                    if (param && param.complete) {
                        param.complete(msg);
                    }
                    reject(false);
                }
            });
        });
    };
    YzMobile.prototype.openReadWithTimer = function (param) {
        return new Promise(function (resolve, reject) {
            yz.openReadWithTimer({
                url: param.url,
                openType: param.openType,
                title: param.title,
                id: param.id,
                type: param.type,
                success: function (data) {
                    if (param && param.success) {
                        param.success(data);
                    }
                    resolve(data);
                },
                fail: function (error) {
                    if (param && param.fail) {
                        param.fail(error);
                    }
                    reject(false);
                },
                complete: function (msg) {
                    if (param && param.complete) {
                        param.complete(msg);
                    }
                    reject(false);
                }
            });
        });
    };
    YzMobile.prototype.getDeviceInfo = function (param) {
        return new Promise(function (resolve, reject) {
            yz.getDeviceInfo({
                success: function (data) {
                    if (param && param.success) {
                        param.success(data);
                    }
                    resolve(data);
                },
                fail: function (error) {
                    if (param && param.fail) {
                        param.fail(error);
                    }
                    reject(false);
                },
                complete: function (msg) {
                    if (param && param.complete) {
                        param.complete(msg);
                    }
                    reject(false);
                }
            });
        });
    };
    YzMobile.prototype.fileBrowser = function (param) {
        return new Promise(function (resolve, reject) {
            yz.fileBrowser({
                url: param.url,
                title: param.title,
                success: function (data) {
                    param.success(data);
                    resolve(data);
                },
                fail: function (error) {
                    param.fail(error);
                    reject(error);
                },
                complete: function () {
                    param.complete();
                    resolve("complete");
                }
            });
        });
    };
    YzMobile.prototype.downloadByBrowser = function (param) {
        return new Promise(function (resolve, reject) {
            yz.downloadByBrowser({
                url: param.url,
                success: function () {
                    param.success();
                    resolve(true);
                },
                fail: function (error) {
                    param.fail(error);
                    reject(error);
                },
                complete: function () {
                    param.complete();
                    resolve("complete");
                }
            });
        });
    };
    return YzMobile;
}(BaseDevice));
export { YzMobile };
//# sourceMappingURL=yzmobile.js.map