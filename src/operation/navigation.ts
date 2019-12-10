export interface NavigationParam {}
export interface AliPayNavigationParam extends NavigationParam {}
export interface BrowserNavigationParam extends NavigationParam {}
export interface WechatMicroNavigationParam extends NavigationParam {}
export interface WechatOfficeNavigationParam extends NavigationParam {}
export interface YzNavigationParam extends NavigationParam {
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
  success?: (msg:any) => void;
  /**
   * 回调函数 函数调用成功后执行
   * @param msg
   */
  fail?: (msg:any) => void;
  /**
   * 无论成功或失败，调用后都会执行
   * @param msg
   */
  complete?: (msg:any) => void;
}
