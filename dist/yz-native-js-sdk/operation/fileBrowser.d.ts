export interface FileBrowser {
    [key: string]: any;
}
export interface YzFileBrowser extends FileBrowser {
    /**
     * 打开的URL
     */
    url: string;
    /**
     * 打开时的标题
     */
    title: string;
    /**
     * 成功回调
     */
    success: (data: any) => void;
    /**
     * 失败回调
     */
    fail: (error: any) => void;
    /**
     * 完成回调
     */
    complete: () => void;
}
