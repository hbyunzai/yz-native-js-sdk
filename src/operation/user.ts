/*
 * @Date: 2020-02-03 10:19:22
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @LastEditors  : ferried
 * @LastEditTime : 2020-02-07 14:12:16
 * @Editor: Visual Studio Code
 * @Desc: nil
 * @License: nil
 */
export interface User {
  [key: string]: any;
}

export interface UserParam {
  [key: string]: any;
}

export interface YzUser {
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  authorities?: Array<{ [key: string]: string }>;
  credentialsNonExpired?: boolean;
  deptId?: string;
  deptName?: string;
  enabled?: boolean;
  id?: string;
  password?: string;
  realname?: string;
  roles?: string;
  userCode?: string;
  userId?: string;
  userType?: number;
  username?: string;
  avatarId?: string;
  menu?: Array<Sider>;
}

export interface Sider {
  // id
  id?: string;
  // 文字
  text?: string;
  // i18n
  i18n?: string;
  // 分组
  group?: boolean;
  // 链接
  link?: string;
  externalLink?: string;
  // 打开方式
  target?: string;
  // 描述
  intro?: string;
  // 系统代码
  systemCode?: string;
  // 图标
  icon?: string;
  label?: string;
  // 0老系统 1新系统
  version?: number;
  attribute?: any;
  // 徽章数量
  badge?: number;
  // 徽章原点
  badge_dot?: boolean;
  // 徽章状态
  badge_status?: BADGE_STATUS;
  // 是否隐藏
  hide?: boolean;
  // 子菜单隐藏
  hideChildren?: boolean;
  hideInBreadcrumb?: boolean;
  shortcut?: boolean;
  shortcut_root?: boolean;
  reuse?: boolean;
  // 显示顺序
  displayIndex?: number;
  // 子菜单
  children?: Array<Sider>;
  // 当前菜单的html权限
  menuAuths?: Array<any>;
  // 父亲id
  pid?: string;
}

// 徽章状态
export enum BADGE_STATUS {
  SUCCESS = "success",
  PROCESSING = "processing",
  DEFAULT = "default",
  ERROR = "error",
  WARNING = "warning"
}
// sider主题枚举
export enum SIDER_THEME {
  DARK = "dark",
  LIGHT = "light"
}
// sider 模式枚举
export enum SIDER_MODE {
  VERTICAL = "vertical",
  INLINE = "inline"
}
