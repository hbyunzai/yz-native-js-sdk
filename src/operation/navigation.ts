export interface Navigation {
  [key: string]: any;
}
export interface NavigationBarTitle {
  [key: string]: any;
}

export interface NavigationBarRightItems {
  [key: string]: any;
}
export interface NavigationBarRightItem {}

export interface YzNavigation extends Navigation {
  /**
   * native: 跳转到手机APP页面
   * url: 浏览器跳转类型
   */
  type?: "native" | "url";
  /**
   * 跳转到的页面
   */
  url?: string;
  /**
   * 配合type=native,将要跳转到的APP页面ID
   */
  applicationId?: string;
  /**
   * 跳转入的页面是否可以分享
   */
  shareFlag?: boolean;
  /**
   * 有无回调
   */
  nBack?: boolean;
  /**
   * 回调函数 函数调用成功后执行
   * @param msg
   */
  success?: (msg: any) => void;
  /**
   * 回调函数 函数调用成功后执行
   * @param msg
   */
  fail?: (msg: any) => void;
  /**
   * 无论成功或失败，调用后都会执行
   * @param msg
   */
  complete?: (msg: any) => void;
}

export interface YzNavigationBarTitle extends NavigationBarTitle {
  /**
   * 标题
   */
  title: string;
  /**
   * 成功后执行的函数
   */
  success?: (msg: any) => void;
  /**
   * 回调函数 函数调用成功后执行
   * @param msg
   */
  fail?: (msg: any) => void;
  /**
   * 无论成功或失败，调用后都会执行
   * @param msg
   */
  complete?: (msg: any) => void;
}

export interface YzNavigationBarRightItem extends NavigationBarRightItem {
  type?: "icon" | "text";
  title?: string;
  icon?: "add" | "edit" | "delete" | "search" | "done" | "send";
  clickId?: string;
}

export interface YzNavigationBarRightItems extends NavigationBarRightItems {
  /**
   * 三个小菜单(刷新,分享)
   */
  showMenu?: boolean;
  /**
   * 是否可分享
   */
  shareFlag?: boolean;
  /**
   * 菜单列表
   */
  items?: Array<YzNavigationBarRightItem>;
  /**
   * 点击后的回调函数
   */
  onClick?: (id: string) => void;
  /**
   * 成功后执行的函数
   */
  success?: (msg: any) => void;
  /**
   * 回调函数 函数调用成功后执行
   * @param msg
   */
  fail?: (msg: any) => void;
  /**
   * 无论成功或失败，调用后都会执行
   * @param msg
   */
  complete?: (msg: any) => void;
}

export interface AliPayNavigation extends Navigation {}
export interface BrowserNavigation extends Navigation {}
export interface WechatMicroNavigation extends Navigation {}
export interface WechatOfficeNavigation extends Navigation {}
