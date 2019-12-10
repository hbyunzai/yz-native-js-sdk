import { BaseDevice } from "./base.device";
import {
  BrowserNavigationParam,
  NavigationBarTitleParam
} from "../operation/navigation";

export class Browser extends BaseDevice {
  setNavigationBarTitle(param: NavigationBarTitleParam): void {}
  openWindow(param: BrowserNavigationParam): void {}
}
