import { BaseDevice } from "./base.device";
import {
  AliPayNavigationParam,
  NavigationBarTitleParam
} from "../operation/navigation";

export class Alipay extends BaseDevice {
  setNavigationBarTitle(param: NavigationBarTitleParam): void {}
  openWindow(param: AliPayNavigationParam): void {}
}
