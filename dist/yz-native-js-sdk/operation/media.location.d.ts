/**
 * 位置基类
 */
export interface MediaLocation {
    [key: string]: any;
}
/**
 * 位置参数基类
 */
export interface MediaLocationParam {
    [key: string]: any;
}
/**
 * 云在App位置结果类
 */
export interface YzMediaLocation extends MediaLocation {
    /**
     * 地址
     */
    address: string;
    /**
     * 纬度
     */
    latitude: number;
    /**
     * 经度
     */
    longitude: number;
}
/**
 * 云在App位置参数类
 */
export interface YzMediaLocationParam extends MediaLocationParam {
    /**
     * 成功后的回调
     * @param data
     */
    success?: (data: YzMediaLocation) => void;
    /**
     * 失败后的回调
     * @param error
     */
    fail?: (error: any) => void;
    /**
     * 无论成功或失败都回调
     * @param msg
     */
    complete?: (msg: any) => void;
}
