/**
 * 图像结果基类
 */
export interface MediaPhoto {
    [key: string]: any;
}
/**
 * 图像参数基类
 */
export interface MediaPhotoParam {
    [key: string]: any;
}
/**
 * 上传后的图像基类
 */
export interface MediaPhotoUploadInfo {
    [key: string]: any;
}
/**
 * 云在图像结构类
 */
export interface YzMediaPhoto extends MediaPhoto {
    /**
     * 文件中心地址
     */
    hostUrl: string;
    /**
     * 已经上传的图像集合
     */
    images: Array<YzMediaPhotoUploadInfo>;
}
export interface YzMediaPhotoUploadInfo extends MediaPhotoUploadInfo {
    /**
     * 大小
     */
    chunkSize: number;
    /**
     * 文件名称
     */
    filename: string;
    /**
     * 唯一标识
     */
    id: string;
    /**
     * 长度
     */
    length: number;
    /**
     * md5
     */
    md5: string;
    /**
     * 文件类型
     */
    type: string;
    /**
     * 上传日期
     */
    uploadDate: Date;
}
/**
 * 图像源类型枚举
 */
export declare enum YzMediaPhotoType {
    /**
     * 从相册选取
     */
    ALBUM = "album",
    /**
     * 从相机选取
     */
    CAMERA = "camera"
}
/**
 * 选取相片的参数
 */
export interface YzMediaPhotoParam extends MediaPhotoParam {
    /**
     * 上传照片数量
     */
    count?: number;
    /**
     * 照片源类型
     */
    sourceType?: Array<YzMediaPhotoType>;
    /**
     * 成功后的回调
     * @param photos 图像数组
     */
    success?: (photos: MediaPhoto) => void;
    /**
     * 失败后的回调
     * @param errMsg 错误信息
     */
    fail?: (errMsg: any) => void;
    /**
     * 无论成功还是失败都会回调
     */
    complete?: (msg: any) => void;
}
