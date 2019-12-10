import { BaseDevice } from "./base.device";
import {
  WechatMicroNavigation,
  NavigationBarTitle,
  NavigationBarRightItems
} from "../operation/navigation";

export class WechatMicro extends BaseDevice {
  setNavigationBarRightItems(param: NavigationBarRightItems): void {}
  setNavigationBarTitle(param: NavigationBarTitle): void {}
  openWindow(param: WechatMicroNavigation): void {}
}
