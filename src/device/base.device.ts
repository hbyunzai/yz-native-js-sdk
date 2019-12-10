import { NavigationParam, NavigationBarTitleParam } from "../operation/navigation";

export abstract class BaseDevice {
  abstract openWindow(param: NavigationParam): void;
  abstract setNavigationBarTitle(param: NavigationBarTitleParam): void;
}
