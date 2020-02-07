export interface WechatOfficeInfo {
    appId: string;
    nonceStr: string;
    signature: string;
    timestamp: number;
    url: string;
    debug: boolean;
    jsApiList: Array<string>;
}
export declare const WECHAT_JSSDK_LIST: Array<string>;
