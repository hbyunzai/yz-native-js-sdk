export interface DownloadBrowserParam {
    [key: string]: any;
}
export interface YzDownloadBrowserParam {
    /**
     * 打开地址
     */
    url: string;
    /**
     * 成功后回调
     */
    success: () => void;
    /**
     * 失败后回调
     */
    fail: (error: any) => void;
    /**
     * 完成后回调
     */
    complete: () => void;
}
