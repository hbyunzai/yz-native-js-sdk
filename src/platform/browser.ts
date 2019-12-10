import { BasePlatForm } from "./base.platform";
import { BrowserNavigationParam } from "../operation/navigation";

export class Browser extends BasePlatForm {
  openWindow(param: BrowserNavigationParam): void {}
}
