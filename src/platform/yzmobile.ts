import { BasePlatForm } from "./base.platform";
import { YzNavigationParam } from "../operation/navigation";

declare let yz: any;

export class YzMobile extends BasePlatForm {
  openWindow(param: YzNavigationParam): void {
    yz.navigationOpenWindow(param);
  }
}
