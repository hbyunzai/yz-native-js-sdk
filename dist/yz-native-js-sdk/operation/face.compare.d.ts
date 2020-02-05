/**
 * 人脸识别基类
 */
export interface FaceCompare {
    [key: string]: any;
}
/**
 * 人脸识别参数类基类
 */
export interface FaceCompareParam {
    [key: string]: any;
}
/**
 * 云在人脸识别结果类基类
 */
export interface YzFaceCompare extends FaceCompare {
}
/**
 * 云在人脸识别参数类基类
 */
export interface YzFaceCompareParam extends FaceCompareParam {
    /**
     * 用户ID
     */
    userId: string;
    /**
     * 成功后的回调
     * @param data
     */
    success?: (data: YzFaceCompare) => void;
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
