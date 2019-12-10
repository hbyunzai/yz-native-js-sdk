import { BaseDevice } from "./base.device";
import { NavigationParam } from "../operation/navigation";
import { YzMobile } from "./yzmobile";

export class PlatForm extends BaseDevice {
  private proxy: BaseDevice;
  constructor() {
    super();
    this.proxy = this.distribute();
  }
  distribute(): BaseDevice {
    return new YzMobile();
  }
  openWindow(param: NavigationParam): void {
    this.proxy.openWindow(param);
  }
}