interface WebViewMessage {
    action: string;
    callbackId?: string;
    params?: any;
}
export interface AppUserInfo {
    token: string;
    tenantId: string;
    userId: string;
    username: string;
    realname: string;
    userCode: string;
    userType: number;
    deptId: string;
    deptName: string;
}
export declare class WebViewAppCommService {
    private callbackMap;
    private callbackId;
    private bridgeReady;
    private bridgeReadyPromise;
    private resolveBridgeReady;
    constructor();
    private initBridgeReadyPromise;
    /**
     * 初始化监听 UniApp JSBridge 就绪
     */
    private initBridgeListener;
    private listenUniAppBridge;
    private setBridgeReady;
    /**
     * 统一发送消息给 App
     */
    postMessage<T = any>(param: WebViewMessage): Promise<T>;
    /**
     * 接收 App 发来的消息（全局挂载）
     */
    private handleAppMessage;
    /**
     * 【核心方法】从 App 获取用户信息
     */
    getUserInfo(): Promise<AppUserInfo>;
    /**
     * 退出登录
     */
    logout(): void;
}
export {};
