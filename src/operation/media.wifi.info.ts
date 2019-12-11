/**
 * WIFI 信息基类
 */
export interface MediaWifiInfo {
    [key: string]: any;
}

/**
 * WIFI 信息参数类
 */
export interface MediaWifiInfoParam {
    [key: string]: any;
}

/**
 * 云在WIFI 信息类
 */
export interface YzMediaWifiInfo extends MediaWifiInfo {
    /**
     * Mac地址
     */
    Mac: string;
    /**
     * 赫兹
     */
    hz: string;
    /**
     * wifi名称
     */
    wifiName: string;
}

/**
 * 云在WIFI 信息参数类
 */
export interface YzMediaWifiInfoParam extends MediaWifiInfoParam {
    success?: (data: YzMediaWifiInfo) => void;
    fail?: (error: any) => void;
    complete?: (msg: any) => void;
}
