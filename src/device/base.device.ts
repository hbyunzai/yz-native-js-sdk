import { NavigationParam } from "../operation/navigation";

export abstract class BaseDevice {
  abstract openWindow(param: NavigationParam): void;
}
