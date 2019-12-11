export interface ContactUserInfo {
    [key: string]: any;
}

export interface ContactUserInfoParam {
    [key: string]: any;
}

export interface YzContactUserInfo extends ContactUserInfo {
    /**
     * 账号
     */
    account: string;
    /**
     * 部门id
     */
    deptId: string;
    /**
     * 部门名称
     */
    deptName: string;
    /**
     * 真实名称
     */
    realname: string;
    /**
     * 用户编号
     */
    userCode: string;
    /**
     * 用户ID
     */
    userId: string;
    /**
     * 用户类型
     */
    userType: string;
    /**
     * 用户名
     */
    username: string;
}

export interface YzConcatUserInfoParam extends ContactUserInfoParam {
    /**
     * 用户ID
     */
    targetUserId: string;
    success?: (userInfo: YzContactUserInfo) => void;
    fail?: (error: any) => void;
    complete?: (msg: any) => void;
}
