/**
 * WIFI 定位基类
 */
export interface MediaWifiLocation {
    [key: string]: any;
}

/**
 * WIFI 定位参数基类
 */
export interface MediaWifiLocationParam {
    [key: string]: any;
}

/**
 * 云在WIFI定位基类
 */
export interface YzMediaWifiLocation extends MediaWifiLocation {

}

/**
 * 云在WIFI定位参数基类
 */
export interface YzMediaWifiLocationParam extends MediaWifiLocationParam {
    /**
     * mac地址数组
     */
    bssids: Array<string>;
    /**
     * 成功后的回调
     * @param data
     */
    success?: (data: YzMediaWifiLocation) => void;
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
