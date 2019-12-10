import { BasePlatForm } from "./base.platform";
import { NavigationParam } from "../operation/navigation";
import { YzMobile } from "./yzmobile";

export class PlatForm extends BasePlatForm {
  private proxy: BasePlatForm;
  constructor() {
    super();
    this.proxy = this.distribute();
  }
  distribute(): BasePlatForm {
    return new YzMobile();
  }
  openWindow(param: NavigationParam): void {
    this.proxy.openWindow(param);
  }
}
