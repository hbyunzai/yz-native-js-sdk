declare var uni: any;

interface WebViewMessage {
  action: string;
  callbackId?: string;
  params?: any;
}

interface AppResponse {
  callbackId: string;
  data: any;
  status: 'success' | 'fail';
}

// 用户信息类型（可根据你的业务修改）
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

export class WebViewAppCommService {
  // 回调管理池
  private callbackMap = new Map<string, (data: any, status: string) => void>();
  private callbackId = 0;
  // JSBridge 是否就绪
  private bridgeReady = false;


  constructor() {
    this.initBridgeListener();
  }

  /**
   * 初始化监听 UniApp JSBridge 就绪
   */
  private initBridgeListener(): void {
    if ((window as any).uni) {
      (window as any).handleAppMessage = this.handleAppMessage.bind(this);
      this.bridgeReady = true;
    }
  }

  /**
   * 统一发送消息给 App
   */
  postMessage<T = any>(param: WebViewMessage): Promise<T> {
    return new Promise((resolve, reject) => {
      // 桥接未就绪
      if (!this.bridgeReady) {
        reject(new Error('JSBridge 未初始化'));
        return;
      }
      // 生成唯一回调 ID
      const cid = `cb_${this.callbackId++}`;
      param.callbackId = cid
      // 存入回调
      this.callbackMap.set(cid, (data, status) => {
        this.callbackMap.delete(cid); // 执行后立即删除
        if (status === 'success') resolve(data);
        else reject(new Error('App 返回失败'));
      });
      uni.webView.postMessage({
        data: param
      });
    });
  }

  /**
   * 接收 App 发来的消息（全局挂载）
   */
  private handleAppMessage(res: AppResponse): void {
    const callback = this.callbackMap.get(res.callbackId);
    if (callback) {
      callback(res.data, res.status);
    }
  }

  /**
   * 【核心方法】从 App 获取用户信息
   */
  getUserInfo(): Promise<AppUserInfo> {
    const param: WebViewMessage = {
      action: 'getUserInfo',
      callbackId: '',
      params: {}
    }
    return this.postMessage<AppUserInfo>(param);
  }

  /**
   * 退出登录
   */
  logout() {
    const param: WebViewMessage = {
      action: 'logout',
      callbackId: '',
      params: {}
    }
    this.postMessage(param);
  }

}
