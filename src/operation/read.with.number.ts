/**
 * 时间阅读基类
 */
export interface ReadWithNumber {
    [key: string]: any;
}

/**
 * 时间阅读参数类
 */
export interface ReadWithNumberParam {
    [key: string]: any;
}

/**
 * 云在时间阅读结果类
 */
export interface YzReadWithNumber extends ReadWithNumber {

}

/**
 * 读物时间打开方式枚举类型
 */
export enum YzReadWithNumberOpenType {
    PDF = 'pdf',
    WEB = 'web'
}

/**
 * 云在时间阅读参数类
 */
export interface YzReadWithNumberParam extends ReadWithNumberParam {
    /**
     * 读物文件地址
     */
    url: string;
    /**
     * 文件打开类型（pdf、web）
     */
    openType: YzReadWithNumberOpenType;
    /**
     * 标题
     */
    title: string;
    /**
     * 读物Id
     */
    id: string;
    /**
     * 类型
     */
    type: string;
    /**
     * 接口调用成功的回调
     * @param data
     */
    success?: (data: YzReadWithNumber) => void;
    /**
     *  接口调用失败的回调函数
     * @param error
     */
    fail?: (error: any) => void;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     * @param msg
     */
    complete?: (msg: any) => void;

}
