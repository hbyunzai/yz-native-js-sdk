export interface User {
    [key: string]: any;
}
export interface UserParam {
    [key: string]: any;
}
export interface YzUserParam extends UserParam {
    success?: (data: YzUser) => void;
    fail?: (msg: any) => void;
    complete?: (msg: any) => void;
}
export interface YzUser extends User {
    /**
     * 账号
     */
    account: string;
    /**
     * 密码
     */
    password: string;
    /**
     * 用户唯一标识
     */
    userId: string;
    /**
     * 用户姓名
     */
    realName: string;
    /**
     * 部门唯一标识
     */
    deptId: string;
    /**
     * 部门名称
     */
    deptName: string;
    /**
     * 用户类型
     */
    userType: string;
}
