import { BaseDevice } from "./base.device";
import {
  WechatOfficeNavigation,
  NavigationBarTitle,
  NavigationBarRightItems
} from "../operation/navigation";

export class WechatOffice extends BaseDevice {
  setNavigationBarRightItems(param: NavigationBarRightItems): void {}
  setNavigationBarTitle(param: NavigationBarTitle): void {}
  openWindow(param: WechatOfficeNavigation): void {}
}
