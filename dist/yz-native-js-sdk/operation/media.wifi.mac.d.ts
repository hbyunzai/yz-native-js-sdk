/**
 * Wifi地址结果基类
 */
export interface MediaWifiMac {
    [key: string]: any;
}
/**
 * WIFI地址参数基类
 */
export interface MediaWifiMacParam {
    [key: string]: any;
}
/**
 * 云在WIFI地址结果基类
 */
export interface YzMediaWifiMac {
}
/**
 * 云在WIFI地址参数基类
 */
export interface YzMediaWifiMacParam {
    /**
     * 成功后的回调
     * @param data
     */
    success?: (data: YzMediaWifiMac) => void;
    /**
     * 失败后的回调
     * @param error
     */
    fail?: (error: any) => void;
    /**
     * 无论成功还是失败后都会回调
     * @param msg
     */
    complete?: (msg: any) => void;
}
