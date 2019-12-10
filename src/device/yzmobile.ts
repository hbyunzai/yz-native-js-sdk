import { BaseDevice } from "./base.device";
import { YzNavigationParam, YzNavigationBarTitleParam } from "../operation/navigation";

declare let yz: any;

export class YzMobile extends BaseDevice {
  setNavigationBarTitle(param:YzNavigationBarTitleParam): void {
    yz.setNavigationBarTitle(param);
  }
  openWindow(param: YzNavigationParam): void {
    yz.navigationOpenWindow(param);
  }
}
