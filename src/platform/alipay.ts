import { BasePlatForm } from "./base.platform";
import { AliPayNavigationParam } from "../operation/navigation";

export class Alipay extends BasePlatForm {
  openWindow(param: AliPayNavigationParam): void {}
}
