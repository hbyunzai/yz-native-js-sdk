export interface ContactUserInfo {
    [key: string]: any;
}
export interface ContactUserInfoParam {
    [key: string]: any;
}
export interface YzConcatUserInfoParam extends ContactUserInfoParam {
    /**
     * 用户ID
     */
    targetUserId: string;
    success?: (userInfo: ContactUserInfo) => void;
    fail?: (error: any) => void;
    complete?: (msg: any) => void;
}
