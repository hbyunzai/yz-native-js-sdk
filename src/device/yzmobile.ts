import { BaseDevice } from "./base.device";
import {
  YzNavigation,
  YzNavigationBarTitle,
  NavigationBarRightItems,
  YzNavigationBarRightItems
} from "../operation/navigation";

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
}
