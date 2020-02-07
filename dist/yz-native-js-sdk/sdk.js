(function() {
    var src = "//cdn.jsdelivr.net/npm/eruda";
    if (
        !/eruda=true/.test(window.location) &&
        localStorage.getItem("active-eruda") != "true"
    )
        return;
    document.write("<scr" + 'ipt src="' + src + '"></scr' + "ipt>");
    document.write("<scr" + "ipt>eruda.init();</scr" + "ipt>");
})();


var bridge = {
    default: this, call: function (b, a, c) {
        var e = "";
        "function" == typeof a && (c = a, a = {});
        a = {data: void 0 === a ? null : a};
        if ("function" == typeof c) {
            var g = "dscb" + window.dscb++;
            window[g] = c;
            a._dscbstub = g
        }
        a = JSON.stringify(a);
        if (window._dsbridge) e = _dsbridge.call(b, a); else if (window._dswk || -1 != navigator.userAgent.indexOf("_dsbridge")) e = prompt("_dsbridge=" + b, a);
        return JSON.parse(e || "{}").data
    }, register: function (b, a, c) {
        c = c ? window._dsaf : window._dsf;
        window._dsInit || (window._dsInit = !0, setTimeout(function () {
                bridge.call("_dsb.dsinit")
            },
            0));
        "object" == typeof a ? c._obs[b] = a : c[b] = a
    }, registerAsyn: function (b, a) {
        this.register(b, a, !0)
    }, hasNativeMethod: function (b, a) {
        return this.call("_dsb.hasNativeMethod", {name: b, type: a || "all"})
    }, disableJavascriptDialogBlock: function (b) {
        this.call("_dsb.disableJavascriptDialogBlock", {disable: !1 !== b})
    }
};
!function () {
    if (!window._dsf) {
        var b = {
            _dsf: {_obs: {}}, _dsaf: {_obs: {}}, dscb: 0, dsBridge: bridge, close: function () {
                bridge.call("_dsb.closePage")
            }, _handleMessageFromNative: function (a) {
                var e = JSON.parse(a.data), b = {id: a.callbackId, complete: !0}, c = this._dsf[a.method],
                    d = this._dsaf[a.method], h = function (a, c) {
                        b.data = a.apply(c, e);
                        bridge.call("_dsb.returnValue", b)
                    }, k = function (a, c) {
                        e.push(function (a, c) {
                            b.data = a;
                            b.complete = !1 !== c;
                            bridge.call("_dsb.returnValue", b)
                        });
                        a.apply(c, e)
                    };
                if (c) h(c, this._dsf); else if (d) k(d, this._dsaf);
                else if (c = a.method.split("."), !(2 > c.length)) {
                    a = c.pop();
                    var c = c.join("."), d = this._dsf._obs, d = d[c] || {}, f = d[a];
                    f && "function" == typeof f ? h(f, d) : (d = this._dsaf._obs, d = d[c] || {}, (f = d[a]) && "function" == typeof f && k(f, d))
                }
            }
        }, a;
        for (a in b) window[a] = b[a];
        bridge.register("_hasJavascriptMethod", function (a, b) {
            b = a.split(".");
            if (2 > b.length) return !(!_dsf[b] && !_dsaf[b]);
            a = b.pop();
            b = b.join(".");
            return (b = _dsf._obs[b] || _dsaf._obs[b]) && !!b[a]
        })
    }
}();

var yz = {
    config: {
        DEBUG: false,
        version: 6
    },
    // 1.界面
    // 1.1导航
    navigationOpenWindow: function (option) {
        if (option.shareFlag == null || option.shareFlag == undefined) {
            option.shareFlag = false
        }
        if (option.nBack == null || option.nBack == undefined) {
            option.nBack = false
        }
        if (option.type == null || option.type == undefined) {
            option.type = "url"
        }
        if (option.type === "url") {
            if (!option.url) {
                throw Error('lost url param')
            }
        }
        yz._private.call('JsV6.navigationOpenWindow', {
            type: option.type,
            applicationId: option.applicationId,
            url: option.url,
            shareFlag: option.shareFlag,
            nBack: option.nBack
        }, function (resultData) {
            yz._private.handlerResult(resultData, option)
        })
    },
    // 1.2设置导航条
    setNavigationBarTitle: function (option) {
        if (!option.title) {
            throw Error('lost title param')
        }
        yz._private.call('JsV6.setNavigationBarTitle', {
            title: option.title
        }, function (resultData) {
            yz._private.handlerResult(resultData, option)
        })
    },
    // 设置右部按钮
    setNavigationBarRightItems: function (option) {
        if (option.showMenu == null || option.showMenu == undefined) {
            option.showMenu = true
        }
        if (option.shareFlag == null || option.shareFlag == undefined) {
            option.shareFlag = false
        }
        if (!option.items) {
            throw Error('lost items param')
        }
        if (!option.onClick && 'function' !== typeof option.onClick) {
            throw Error('lost onClick function')
        }
        yz._private.call('JsV6.setNavigationBarRightItems', {
            showMenu: option.showMenu,
            shareFlag: option.shareFlag,
            items: option.items,
        }, function (resultData) {
            yz._private.handlerResult(resultData, option)
        });
        bridge.register('navigationBarRightItemOnClick', function (title) {
            option.onClick(title)
        });
    },
    // 1.3网页分享
    setWebCanShare: function (option) {
        if (option.shareFlag == null || option.shareFlag == undefined) {
            option.shareFlag = false
        }
        yz._private.call('JsV6.setWebCanShare', {
            shareFlag: option.shareFlag
        }, function (resultData) {
            yz._private.handlerResult(resultData, option)
        });
    },
    // 2.用户信息
    // 2.1异步Token
    getToken: function (option) {
        if (option.refresh == null || option.refresh == undefined) {
            option.refresh = false
        }
        if (!option.success) {
            throw Error('lost success function')
        }
        yz._private.call('JsV6.getToken', {
            refresh: option.refresh
        }, function (resultData) {
            yz._private.handlerResult(resultData, option)
        });
    },
    // 同步获取Token
    getTokenSync: function () {
        var resultData = yz._private.callSync('JsV6.getTokenSync', {});
        if (resultData.status) {
            return resultData.data;
        } else {
            throw Error(resultData.msg)
        }
    },
    // 2.2同步获取用户信息
    getUserInfoSync: function () {
        var resultData = yz._private.callSync('JsV6.getUserInfoSync', {});
        if (resultData.status) {
            return resultData.data;
        } else {
            throw Error(resultData.msg)
        }
    },
    // 异步获取用户信息
    getUserInfo: function (option) {
        if (!option) {
            throw Error('lost option')
        }
        if (!option.success) {
            throw Error('lost success function')
        }
        yz._private.call('JsV6.getUserInfo', {}, function (resultData) {
            yz._private.handlerResult(resultData, option)
        })
    },
    // 3.扫码
    scanCode: function (option) {
        if (!option.success) {
            throw Error('lost success function')
        }
        yz._private.call('JsV6.scanCode', {}, function (resultData) {
            yz._private.handlerResult(resultData, option)
        })
    },
    // 4.1选择联系人
    chooseContacts: function (option) {
        if (!option.success) {
            throw Error('lost success function')
        }
        if (!option.count) {
            option.count = 0
        }
        yz._private.call('JsV6.chooseContacts', {
            count: option.count
        }, function (resultData) {
            yz._private.handlerResult(resultData, option)
        })
    },
    // 4.2联系人详情
    ContactDetails: function (option) {
        if (!option.success) {
            throw Error('lost success function')
        }
        if (!option.targetUserId) {
            throw Error('lost targetUserId param')
        }
        yz._private.call('JsV6.ContactDetails', {
            targetUserId: option.targetUserId
        }, function (resultData) {
            yz._private.handlerResult(resultData, option)
        })
    },
    // 5.图片选择
    selectImage: function (option) {
        if (!option.success) {
            throw Error('lost success function')
        }
        if (!option.count) {
            option.count = 1
        }
        if (!option.sourceType) {
            option.sourceType = [
                'album', 'camera'
            ]
        }
        yz._private.call('JsV6.selectImage', {
            count: option.count,
            sourceType: option.sourceType
        }, function (resultData) {
            yz._private.handlerResult(resultData, option)
        })
    },
    // 6.上传图片
    uploadImage: function (option) {
        if (!option.success) {
            throw Error('lost success function')
        }
        if (!option.count) {
            option.count = 1
        }
        if (!option.sourceType) {
            option.sourceType = [
                'album', 'camera'
            ]
        }
        yz._private.call('JsV6.uploadImage', {
            count: option.count,
            sourceType: option.sourceType
        }, function (resultData) {
            yz._private.handlerResult(resultData, option)
        })
    },
    // 7.上传视频
    uploadMovie: function (option) {
        if (!option.success) {
            throw Error('lost success function')
        }
        if (!option.limitMinute) {
            option.limitMinute = 3
        }
        yz._private.call('JsV6.uploadMovie', {
            limitMinute: option.limitMinute
        }, function (resultData) {
            yz._private.handlerResult(resultData, option)
        })
    },
    // 8.顶部颜色
    setNavigationBarColor: function (option) {
        if (!option.frontColor) {
            throw Error('lost frontColor param')
        }
        if (!option.backgroundColor) {
            throw Error('lost backgroundColor param')
        }
        yz._private.call('JsV6.setNavigationBarColor', {
            frontColor: option.frontColor,
            backgroundColor: option.backgroundColor
        }, function (resultData) {
            yz._private.handlerResult(resultData, option)
        })
    },
    // 9.播放器
    mediaPlayer: function (option) {
        if (!option.url) {
            throw Error('lost url param')
        }
        if (!option.skipTime) {
            option.skipTime = 0
        }
        if (option.title === undefined || option.title === null) {
            option.title = ''
        }
        if (option.content === undefined || option.content === null) {
            option.content = ''
        }
        yz._private.call('JsV6.mediaPlayer', {
            url: option.url,
            skipTime: option.skipTime,
            title: option.title,
            content: option.content
        }, function (resultData) {
            yz._private.handlerResult(resultData, option)
        })
    },
    // 10.定位获取经纬度
    userLocation: function (option) {
        if (!option) {
            throw Error('lost option')
        }
        if (!option.success) {
            throw Error('lost success function')
        }
        yz._private.call('JsV6.userLocation', {}, function (resultData) {
            yz._private.handlerResult(resultData, option)
        })
    },
    // 11.Ap定位
    userLocationContainAp: function (option) {
        if (!option.bssids) {
            throw Error('lost bssids param')
        }
        yz._private.call('JsV6.userLocationContainAp', {
            bssids: option.bssids
        }, function (resultData) {
            yz._private.handlerResult(resultData, option)
        })
    },
    // 12.1获取已连接Wifi信息
    getWifiInfo: function (option) {
        if (!option) {
            throw Error('lost option')
        }
        if (!option.success) {
            throw Error('lost success function')
        }
        yz._private.call('JsV6.getWifiInfo', {}, function (resultData) {
            yz._private.handlerResult(resultData, option)
        })
    },
    // 12.2获取已连接Wifi的Mac地址
    getMac: function (option) {
        if (!option) {
            throw Error('lost option')
        }
        if (!option.success) {
            throw Error('lost success function')
        }
        yz._private.call('JsV6.getMac', {}, function (resultData) {
            yz._private.handlerResult(resultData, option)
        })
    },
    // 13.打开相机
    openCamera: function (option) {
        if (!option.success) {
            throw Error('lost success function')
        }
        yz._private.call('JsV6.openCamera', {}, function (resultData) {
            yz._private.handlerResult(resultData, option)
        })
    },
    // 14.1获取微信AppId
    getWXAppId: function (option) {
        var resultData = yz._private.callSync('JsV6.getWXAppId', {});
        if (resultData.status) {
            return resultData.data;
        } else {
            throw Error(resultData.msg)
        }
    },
    // 14.2微信支付
    wechatPay: function (option) {
        if (!option.payInfo) {
            throw Error('lost payInfo param')
        }
        if (!option.success) {
            throw Error('lost success function')
        }
        yz._private.call('JsV6.wechatPay', {
            payInfo: option.payInfo
        }, function (resultData) {
            yz._private.handlerResult(resultData, option)
        })
    },
    // 15.支付宝支付
    aliPay: function (option) {
        if (!option.payInfo) {
            throw Error('lost payInfo param')
        }
        if (!option.success) {
            throw Error('lost success function')
        }
        yz._private.call('JsV6.aliPay', {
            payInfo: option.payInfo
        }, function (resultData) {
            yz._private.handlerResult(resultData, option)
        })
    },
    // 16.人脸采集
    faceLiveCollection: function (option) {
        if (!option.live) {
            throw Error('lost live param')
        }
        if (!option.userId) {
            throw Error('lost userId param')
        }
        if (!option.success) {
            throw Error('lost success function')
        }
        yz._private.call('JsV6.faceLiveCollection', {
            live: option.live,
            userId: option.userId
        }, function (resultData) {
            yz._private.handlerResult(resultData, option)
        })
    },
    // 17.人脸对比
    faceCompare: function (option) {
        if (!option.userId) {
            throw Error('lost userId param')
        }
        if (!option.success) {
            throw Error('lost success function')
        }
        yz._private.call('JsV6.faceCompare', {
            userId: option.userId
        }, function (resultData) {
            yz._private.handlerResult(resultData, option)
        })
    },
    // 9.设备信息
    getDeviceInfo: function (option) {
        yz._private.call('JsV6.getDeviceInfo', {}, function (data) {
            yz._private.handlerResult(data, option)
        })
    },
    // 18.综合训练读物时间统计时间
    openReadWithTimer: function (option) {
        if (!option.url) {
            throw Error('lost url param')
        }
        if (!option.openType) {
            throw Error('lost openType param')
        }
        if (!option.title) {
            throw Error('lost title param')
        }
        if (!option.id) {
            throw Error('lost id param')
        }
        if (!option.type) {
            throw Error('lost type param')
        }
        yz._private.call('JsV6.openReadWithTimer', {
            url: option.url,
            openType: option.openType,
            title: option.title,
            id: option.id,
            type: option.type
        }, function (resultData) {
            yz._private.handlerResult(resultData, option)
        })
    },
    // 注册监听
    listener: {
        // 下一个window返回上一个window触发
        nBack: function (functionF) {
            yz._private.register("nBack", functionF);
        }
    },
    _private: {
        register: function (functionName, functionF) {
            if (typeof functionF !== 'function') {
                throw Error('param isNot function')
            }
            if (yz.config.DEBUG) {
                console.log('----- 注册监听 -----\n functionName:' + functionName);
            }
            bridge.register(functionName, functionF);
        },
        callSync: function (functionName, param) {
            var paramString = JSON.stringify(param);
            if (yz.config.DEBUG) {
                console.log('----- 调用原生方法 -----\n functionName:' + functionName + '\n param:' + paramString);
            }
            var data = bridge.call(functionName, paramString);
            if (yz.config.DEBUG) {
                console.log('+++++ 原生方法结果 +++++\n functionName:' + functionName + '\n result:' + data);
            }
            return JSON.parse(data);
        },
        call: function (functionName, param, callBack) {
            var paramString = JSON.stringify(param);
            if (yz.config.DEBUG) {
                console.log('----- 调用原生方法async -----\n functionName:' + functionName + '\n param:' + paramString);
            }
            bridge.call(functionName, paramString, function (data) {
                if (yz.config.DEBUG) {
                    console.log('+++++ 原生方法结果async +++++\n functionName:' + functionName + '\n result:' + data);
                }
                callBack(JSON.parse(data));
            });
        },
        handlerResult: function (resultData, option) {
            if (resultData.status) {
                if (option.success && 'function' === typeof option.success) {
                    option.success(resultData.data)
                }
            } else {
                if (option.fail && 'function' === typeof option.fail) {
                    option.fail(resultData.msg)
                }
            }
            if (option.complete && 'function' === typeof option.complete) {
                option.complete()
            }
        }
    }
};
