import { NavigationParam } from "../operation/navigation";

export abstract class BasePlatForm {
  abstract openWindow(param: NavigationParam): void;
}
