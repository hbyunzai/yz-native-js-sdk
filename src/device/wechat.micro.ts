import { BaseDevice } from "./base.device";
import { WechatMicroNavigationParam, NavigationBarTitleParam } from "../operation/navigation";

export class WechatMicro extends BaseDevice {
  setNavigationBarTitle(param: NavigationBarTitleParam): void {}
  openWindow(param: WechatMicroNavigationParam): void {}
}
