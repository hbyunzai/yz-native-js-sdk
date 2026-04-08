var WebViewAppCommService = /** @class */ (function () {
    function WebViewAppCommService() {
        // 回调管理池
        this.callbackMap = new Map();
        this.callbackId = 0;
        // JSBridge 是否就绪
        this.bridgeReady = false;
        this.initBridgeListener();
    }
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
            _this.bridgeReady = true;
            window.handleAppMessage = _this.handleAppMessage.bind(_this);
        });
        // 兜底
        if (window.uni) {
            this.bridgeReady = true;
            window.handleAppMessage = this.handleAppMessage.bind(this);
        }
    };
    /**
     * 统一发送消息给 App
     */
    WebViewAppCommService.prototype.postMessage = function (param) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // 桥接未就绪
            if (!_this.bridgeReady) {
                reject(new Error('JSBridge 未初始化'));
                return;
            }
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