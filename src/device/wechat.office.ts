import { BaseDevice } from "./base.device";
import {
  WechatOfficeNavigationParam,
  NavigationBarTitleParam
} from "../operation/navigation";

export class WechatOffice extends BaseDevice {
  setNavigationBarTitle(param: NavigationBarTitleParam): void {}
  openWindow(param: WechatOfficeNavigationParam): void {}
}
