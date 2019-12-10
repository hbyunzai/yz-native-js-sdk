export interface WebCanShare {
  [key: string]: any;
}

export interface YzWebCanShare extends WebCanShare {
  /**
   * 网页是否可以被分享出去
   */
  shareFlag: boolean;
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
