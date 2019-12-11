
/**
 * 支付宝支付结果基类
 */
export interface PayAlipay {
    [key: string]: any;
}

/**
 * 支付宝支付参数类
 */
export interface PayAlipayParam {
    [key: string]: any;
}

export interface YzAlipay extends PayAlipay {

}

export interface YzAlipayParam extends PayAlipayParam {
    success?: (data: PayAlipay) => void;
    fail?: (error: any) => void;
    complete?: (msg: any) => void;

}
