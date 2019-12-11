/**
 * 设备信息基类
 */
export interface DeviceInfo {
    [key: string]: any;
}

/**
 * 设备信息参数基类
 */
export interface DeviceInfoParam {
    [key: string]: any;
}

/**
 * 云在设备信息结果类
 */
export interface YzDeviceInfo extends DeviceInfo {

}

/**
 * 云在设备信息参数类
 */
export interface YzDeviceInfoParam extends DeviceInfoParam {
    /**
     * 成功后的回调
     * @param data
     */
    success?: (data: YzDeviceInfo) => void;
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
