import { BaseDevice } from "./base.device";
import { YzNavigationParam } from "../operation/navigation";

declare let yz: any;

export class YzMobile extends BaseDevice {
  openWindow(param: YzNavigationParam): void {
    yz.navigationOpenWindow(param);
  }
}
