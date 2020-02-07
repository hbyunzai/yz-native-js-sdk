/**
 * 人脸收集基类
 */
export interface FaceCollection {
    [key: string]: any;
}
/**
 * 人脸手机参数基类
 */
export interface FaceCollectionParam {
    [key: string]: any;
}
/**
 * 云在人脸手机基类
 */
export interface YzFaceCollection extends FaceCollection {
}
/**
 * 云在人脸收集参数基类
 */
export interface YzFaceCollectionParam extends FaceCollectionParam {
    /**
     * 是否开启活体检测
     */
    live: boolean;
    /**
     * 用户ID
     */
    userId: string;
    /**
     * 成功后的回调
     * @param data
     */
    success?: (data: YzFaceCollection) => void;
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
