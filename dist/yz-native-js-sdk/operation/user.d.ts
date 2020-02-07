export interface User {
    [key: string]: any;
}
export interface UserParam {
    [key: string]: any;
}
export interface YzUser {
    accountNonExpired?: boolean;
    accountNonLocked?: boolean;
    authorities?: Array<{
        [key: string]: string;
    }>;
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
    id?: string;
    text?: string;
    i18n?: string;
    group?: boolean;
    link?: string;
    externalLink?: string;
    target?: string;
    intro?: string;
    systemCode?: string;
    icon?: string;
    label?: string;
    version?: number;
    attribute?: any;
    badge?: number;
    badge_dot?: boolean;
    badge_status?: BADGE_STATUS;
    hide?: boolean;
    hideChildren?: boolean;
    hideInBreadcrumb?: boolean;
    shortcut?: boolean;
    shortcut_root?: boolean;
    reuse?: boolean;
    displayIndex?: number;
    children?: Array<Sider>;
    menuAuths?: Array<any>;
    pid?: string;
}
export declare enum BADGE_STATUS {
    SUCCESS = "success",
    PROCESSING = "processing",
    DEFAULT = "default",
    ERROR = "error",
    WARNING = "warning"
}
export declare enum SIDER_THEME {
    DARK = "dark",
    LIGHT = "light"
}
export declare enum SIDER_MODE {
    VERTICAL = "vertical",
    INLINE = "inline"
}
