import { BaseDevice } from "./base.device";
import {
  Navigation,
  NavigationBarTitle,
  NavigationBarRightItems
} from "../operation/navigation";
import { WebCanShare } from "../operation/share";
import { YzMobile } from "./yzmobile";
import { Token, TokenParam } from "../operation/token";
import { User, UserParam } from "../operation/user";
import { MediaCamera, MediaCameraParam } from "../operation/media.camera";
import { QRcode, QRcodeParam } from "../operation/media.qrcode";
import { ContactUser, ContactUserParam } from "../operation/contact.users";
import { ContactUserInfoParam } from "../operation/contact.userinfo";
import { MediaPhoto, MediaPhotoParam } from "../operation/media.photo";
import { MediaLocation, MediaLocationParam } from "../operation/media.location";
import {
  MediaWifiLocation,
  MediaWifiLocationParam
} from "../operation/media.wifi.location";
import {
  MediaWifiInfo,
  MediaWifiInfoParam
} from "../operation/media.wifi.info";
import { MediaWifiMac, MediaWifiMacParam } from "../operation/media.wifi.mac";
import {
  FaceCollection,
  FaceCollectionParam
} from "../operation/face.collection";
import { FaceCompare, FaceCompareParam } from "../operation/face.compare";
import { PayWechat, PayWechatParam } from "../operation/pay.wechat";
import { PayAlipay, PayAlipayParam } from "../operation/pay.alipay";
import {
  ReadWithNumber,
  ReadWithNumberParam
} from "../operation/read.with.number";
import { DeviceInfo, DeviceInfoParam } from "../operation/device.info";
import { WechatOffice } from "./wechat.office";
import { Browser } from "./browser";
import { DeviceOption } from "./device.option";

export class PlatForm extends BaseDevice {
  private proxy: BaseDevice;
  constructor(option?: DeviceOption) {
    super(option);
    this.proxy = this.distribute(option);
  }

  distribute(option?: DeviceOption): BaseDevice {
    const agent = window.navigator.userAgent.toLowerCase();
    if (/iphone/.test(agent) && /mobile/.test(agent) && /yunzai/.test(agent)) {
      return new YzMobile(option);
    } else if (
      /android/.test(agent) &&
      /mobile/.test(agent) &&
      /yunzai/.test(agent)
    ) {
      return new YzMobile(option);
    } else if (/linux/.test(agent) && /yunzai/.test(agent)) {
      return new YzMobile(option);
    } else if (/micromessenger/.test(agent)) {
      return new WechatOffice(option);
    } else {
      return new Browser(option);
    }
  }
  getUser(): Promise<User> {
    return this.proxy.getUser();
  }
  auth(): Promise<Token> {
    return this.proxy.auth();
  }
  apiRegister(): void {
    this.proxy.apiRegister();
  }

  openWindow(param?: Navigation): void {
    this.proxy.openWindow(param);
  }

  setNavigationBarTitle(param?: NavigationBarTitle): void {
    this.proxy.setNavigationBarTitle(param);
  }

  setNavigationBarRightItems(param?: NavigationBarRightItems): void {
    this.proxy.setNavigationBarRightItems(param);
  }

  setWebCanShare(param?: WebCanShare): void {
    this.proxy.setWebCanShare(param);
  }

  openMediaCameraAsync(param?: MediaCameraParam): Promise<MediaCamera> {
    return this.proxy.openMediaCameraAsync(param);
  }

  scanQrCodeAsync(param?: QRcodeParam): Promise<QRcode> {
    return this.proxy.scanQrCodeAsync(param);
  }

  chooseContactsAsync(param?: ContactUserParam): Promise<Array<ContactUser>> {
    return this.proxy.chooseContactsAsync(param);
  }

  getContactsInfoAsync(param?: ContactUserInfoParam): void {
    this.proxy.getContactsInfoAsync(param);
  }

  uploadPhotoAsync(param?: MediaPhotoParam): Promise<MediaPhoto> {
    return this.proxy.uploadPhotoAsync(param);
  }

  userLocationAsync(param?: MediaLocationParam): Promise<MediaLocation> {
    return this.proxy.userLocationAsync(param);
  }

  userLocationWifiAsync(
    param?: MediaWifiLocationParam
  ): Promise<MediaWifiLocation> {
    return this.proxy.userLocationWifiAsync(param);
  }

  getWifiInfoAsync(param?: MediaWifiInfoParam): Promise<MediaWifiInfo> {
    return this.proxy.getWifiInfoAsync(param);
  }

  getWifiMacAsync(param?: MediaWifiMacParam): Promise<MediaWifiMac> {
    return this.proxy.getWifiMacAsync(param);
  }

  faceCollectionAsync(param?: FaceCollectionParam): Promise<FaceCollection> {
    return this.proxy.faceCollectionAsync(param);
  }

  faceCompareAsync(param?: FaceCompareParam): Promise<FaceCompare> {
    return this.proxy.faceCompareAsync(param);
  }

  wechatPayAsync(param?: PayWechatParam): Promise<PayWechat> {
    return this.proxy.wechatPayAsync(param);
  }

  aliPayAsync(param?: PayAlipayParam): Promise<PayAlipay> {
    return this.proxy.aliPayAsync(param);
  }

  openReadWithTimer(param?: ReadWithNumberParam): Promise<ReadWithNumber> {
    return this.proxy.openReadWithTimer(param);
  }

  getDeviceInfo(param?: DeviceInfoParam): Promise<DeviceInfo> {
    return this.proxy.getDeviceInfo(param);
  }
}
