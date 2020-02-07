/**
 * 微信支付结果类基类
 */
export interface PayWechat {
    [key: string]: any;
}
/**
 * 微信支付参数类基类
 */
export interface PayWechatParam {
    [key: string]: any;
}
/**
 * 云在app微信支付结果类
 */
export interface YzPayWechat extends PayWechat {
}
/**
 * 云在app微信支付参数类,参数见微信文档
 */
export interface YzPayWechatParam extends PayWechatParam {
    appid: string;
    partnerid: string;
    prepayid: string;
    package: string;
    noncestr: string;
    timestamp: string;
    sign: string;
    success?: (data: YzPayWechat) => void;
    fail?: (error: any) => void;
    complete?: (msg: any) => void;
}
