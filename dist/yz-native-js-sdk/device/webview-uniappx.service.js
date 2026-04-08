var WebViewAppCommService = /** @class */ (function () {
    function WebViewAppCommService() {
        // 回调管理池
        this.callbackMap = new Map();
        this.callbackId = 0;
        // JSBridge 是否就绪
        this.bridgeReady = false;
        this.initBridgeReadyPromise(); // 初始化等待 Promise
        this.initBridgeListener();
    }
    // 初始化等待 Promise
    WebViewAppCommService.prototype.initBridgeReadyPromise = function () {
        var _this = this;
        this.bridgeReadyPromise = new Promise(function (resolve) {
            _this.resolveBridgeReady = resolve;
        });
    };
    /**
     * 初始化监听 UniApp JSBridge 就绪
     */
    WebViewAppCommService.prototype.initBridgeListener = function () {
        var _this = this;
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            this.listenUniAppBridge();
        }
        else {
            document.addEventListener('DOMContentLoaded', function () {
                _this.listenUniAppBridge();
            });
        }
    };
    WebViewAppCommService.prototype.listenUniAppBridge = function () {
        var _this = this;
        document.addEventListener('UniAppJSBridgeReady', function () {
            _this.setBridgeReady();
        });
        // 兜底
        if (window.uni) {
            this.setBridgeReady();
        }
        // 终极兜底：延迟检查（解决部分设备桥接延迟）
        setTimeout(function () {
            if (window.uni) {
                _this.setBridgeReady();
            }
        }, 300);
    };
    // 标记桥接就绪并解锁等待
    WebViewAppCommService.prototype.setBridgeReady = function () {
        if (this.bridgeReady)
            return;
        this.bridgeReady = true;
        window.handleAppMessage = this.handleAppMessage.bind(this);
        this.resolveBridgeReady();
    };
    /**
     * 统一发送消息给 App
     */
    WebViewAppCommService.prototype.postMessage = function (param) {
        var _this = this;
        // 核心修复：先等待 JSBridge 就绪，再执行逻辑
        return this.bridgeReadyPromise.then(function () {
            return new Promise(function (resolve, reject) {
                // 生成唯一回调 ID
                var cid = "cb_" + _this.callbackId++;
                param.callbackId = cid;
                // 存入回调
                _this.callbackMap.set(cid, function (data, status) {
                    _this.callbackMap.delete(cid); // 执行后立即删除
                    if (status === 'success')
                        resolve(data);
                    else
                        reject(new Error('App 返回失败'));
                });
                uni.webView.postMessage({
                    data: param
                });
            });
        });
    };
    /**
     * 接收 App 发来的消息（全局挂载）
     */
    WebViewAppCommService.prototype.handleAppMessage = function (res) {
        var callback = this.callbackMap.get(res.callbackId);
        if (callback) {
            callback(res.data, res.status);
        }
    };
    /**
     * 【核心方法】从 App 获取用户信息
     */
    WebViewAppCommService.prototype.getUserInfo = function () {
        var param = {
            action: 'getUserInfo',
            callbackId: '',
            params: {}
        };
        return this.postMessage(param);
    };
    /**
     * 退出登录
     */
    WebViewAppCommService.prototype.logout = function () {
        var param = {
            action: 'logout',
            callbackId: '',
            params: {}
        };
        this.postMessage(param);
    };
    return WebViewAppCommService;
}());
export { WebViewAppCommService };
//# sourceMappingURL=webview-uniappx.service.js.map