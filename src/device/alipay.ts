import { BaseDevice } from "./base.device";
import {
  AliPayNavigation,
  NavigationBarTitle,
  NavigationBarRightItems
} from "../operation/navigation";

export class Alipay extends BaseDevice {
  setNavigationBarRightItems(param: NavigationBarRightItems): void {}
  setNavigationBarTitle(param: NavigationBarTitle): void {}
  openWindow(param: AliPayNavigation): void {}
}
