export interface ContactUser {
    [key: string]: any;
}
export interface ContactUserParam {
    [key: string]: any;
}
export interface YzContactUser extends ContactUser {
}
export interface YzContactUserParam extends ContactUserParam {
    /**
     * 最大选择多少人，默认没限制
     */
    count?: number;
    /**
     * 成功的回调
     * @param contacts 联系人集合
     */
    success?: (contacts: Array<YzContactUser>) => void;
    /**
     * 失败的回调
     * @param error 失败信息
     */
    fail?: (error: any) => void;
    /**
     * 无论成功还是失败都会调用
     * @param msg
     */
    complete?: (msg: any) => void;
}
