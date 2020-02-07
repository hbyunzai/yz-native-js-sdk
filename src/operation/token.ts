/*
 * @Date: 2020-02-03 10:19:22
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @LastEditors  : ferried
 * @LastEditTime : 2020-02-07 11:40:34
 * @Editor: Visual Studio Code
 * @Desc: nil
 * @License: nil
 */
export interface Token {
  accessToken: string;
  [key: string]: any;
}

export interface TokenParam {
  [key: string]: any;
}

export interface YzToken extends Token {
  /**
   * token失效时间戳
   */
  tokenDateLine: string;
  /**
   * 作用域
   */
  scope: string;
  /**
   * 类型
   */
  tokenType: string;
  /**
   * token
   */
  accessToken: string;
}

export interface YzTokenAsyncParam extends TokenParam {
  /**
   * 是否刷新token
   */
  refresh?: boolean;
  /**
   * 成功后回调
   * @param data token信息
   */
  success?: (data: Token) => void;
  /**
   * 失败回调
   * @param msg 失败信息
   */
  fail?: (msg: any) => void;
  /**
   * 调用后执行的函数
   * @param msg
   */
  complete?: (msg: any) => void;
}
