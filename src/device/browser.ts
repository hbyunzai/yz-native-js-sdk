import { BaseDevice } from "./base.device";
import { BrowserNavigationParam } from "../operation/navigation";

export class Browser extends BaseDevice {
  openWindow(param: BrowserNavigationParam): void {}
}
