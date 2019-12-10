import { BaseDevice } from "./base.device";
import { AliPayNavigationParam } from "../operation/navigation";

export class Alipay extends BaseDevice {
  openWindow(param: AliPayNavigationParam): void {}
}
