import {
  Navigation,
  NavigationBarTitle,
  NavigationBarRightItems
} from "../operation/navigation";

export abstract class BaseDevice {
  abstract openWindow(param: Navigation): void;
  abstract setNavigationBarTitle(param: NavigationBarTitle): void;
  abstract setNavigationBarRightItems(param: NavigationBarRightItems): void;
}
