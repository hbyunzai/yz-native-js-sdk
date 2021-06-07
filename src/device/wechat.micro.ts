import { BaseDevice } from "./base.device";
import {
  WechatMicroNavigation,
  NavigationBarTitle,
  NavigationBarRightItems,
} from "../operation/navigation";
import { WebCanShare } from "../operation/share";
import { Token } from "../operation/token";
import { User } from "../operation/user";
import { MediaCamera, MediaCameraParam } from "../operation/media.camera";
import { QRcode, QRcodeParam } from "../operation/media.qrcode";
import { ContactUser, ContactUserParam } from "../operation/contact.users";
import { ContactUserInfoParam } from "../operation/contact.userinfo";
import { MediaPhoto, MediaPhotoParam } from "../operation/media.photo";
import { MediaLocation, MediaLocationParam } from "../operation/media.location";
import {
  MediaWifiLocation,
  MediaWifiLocationParam,
} from "../operation/media.wifi.location";
import {
  MediaWifiInfo,
  MediaWifiInfoParam,
} from "../operation/media.wifi.info";
import { MediaWifiMac, MediaWifiMacParam } from "../operation/media.wifi.mac";
import {
  FaceCollection,
  FaceCollectionParam,
} from "../operation/face.collection";
import { FaceCompare, FaceCompareParam } from "../operation/face.compare";
import { PayWechat, PayWechatParam } from "../operation/pay.wechat";
import { PayAlipay, PayAlipayParam } from "../operation/pay.alipay";
import {
  ReadWithNumber,
  ReadWithNumberParam,
} from "../operation/read.with.number";
import { DeviceInfo, DeviceInfoParam } from "../operation/device.info";
import { DeviceOption } from "./device.option";
import { FileBrowser } from "../operation/fileBrowser";
import { DownloadBrowserParam } from "../operation";
import { http } from "../utils/http";

export class WechatMicro extends BaseDevice {
  constructor(option?: DeviceOption) {
    super(option);
  }

  auth(): Promise<Token> {
    // const accessToken = window.location.href.split("&")[1].split("=")[1];
    const accessToken = window.location.href.split("accessToken=")[1].split("&")[0];
    const token: Token = { accessToken: accessToken };
    return Promise.resolve(token);
  }

  apiRegister(): void {}

  getUser(): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      http(
        "GET",
        this.option.GATE_WAY + "/auth/user",
        function (data: any) {
          resolve(data.principal);
        },
        this.option
      );
    });
  }

  setNavigationBarRightItems(param?: NavigationBarRightItems): void {}

  setNavigationBarTitle(param?: NavigationBarTitle): void {}

  openWindow(param?: WechatMicroNavigation): void {}

  setWebCanShare(param?: WebCanShare): void {}

  openMediaCameraAsync(param?: MediaCameraParam): Promise<MediaCamera> {
    return undefined;
  }

  scanQrCodeAsync(param?: QRcodeParam): Promise<QRcode> {
    return undefined;
  }

  chooseContactsAsync(param?: ContactUserParam): Promise<Array<ContactUser>> {
    return undefined;
  }

  getContactsInfoAsync(param?: ContactUserInfoParam): void {}

  uploadPhotoAsync(param?: MediaPhotoParam): Promise<MediaPhoto> {
    return undefined;
  }

  userLocationAsync(param?: MediaLocationParam): Promise<MediaLocation> {
    return undefined;
  }

  userLocationWifiAsync(
    param?: MediaWifiLocationParam
  ): Promise<MediaWifiLocation> {
    return undefined;
  }

  getWifiInfoAsync(param?: MediaWifiInfoParam): Promise<MediaWifiInfo> {
    return undefined;
  }

  getWifiMacAsync(param?: MediaWifiMacParam): Promise<MediaWifiMac> {
    return undefined;
  }

  faceCollectionAsync(param?: FaceCollectionParam): Promise<FaceCollection> {
    return undefined;
  }

  faceCompareAsync(param?: FaceCompareParam): Promise<FaceCompare> {
    return undefined;
  }

  wechatPayAsync(param?: PayWechatParam): Promise<PayWechat> {
    return undefined;
  }

  aliPayAsync(param?: PayAlipayParam): Promise<PayAlipay> {
    return undefined;
  }

  openReadWithTimer(param?: ReadWithNumberParam): Promise<ReadWithNumber> {
    return undefined;
  }

  getDeviceInfo(param?: DeviceInfoParam): Promise<DeviceInfo> {
    return undefined;
  }

  fileBrowser(param?: FileBrowser): Promise<any> {
    alert("微信请在右上角选择浏览器打开!");
    return Promise.resolve(true);
  }

  downloadByBrowser(param?: DownloadBrowserParam): Promise<any> {
    alert("微信请在右上角选择浏览器打开!");
    return Promise.resolve(true);
  }
}
