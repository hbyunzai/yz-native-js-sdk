/*!
 * 
 *   YzPlatForm v0.1.10
 *   provide the native function call API of yunzai mobile platform for the third party.
 *   Copyright (c) 2019 河北云在, https://github.com/ferried/yz-native-js-sdk
 *   
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.YzDevice=e():t.YzDevice=e()}(window,(function(){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var c=e[n]={i:n,l:!1,exports:{}};return t[n].call(c.exports,c,c.exports,o),c.l=!0,c.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)o.d(n,c,function(e){return t[e]}.bind(null,c));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";o.r(e);var n,c=function(t){this.option=t};!function(t){t.ALBUM="album",t.CAMERA="camera"}(n||(n={}));var i,r=(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),s=function(t){function e(e){return t.call(this,e)||this}return r(e,t),e.prototype.auth=function(){return new Promise((function(t,e){t(yz.getTokenSync())}))},e.prototype.apiRegister=function(){},e.prototype.setNavigationBarRightItems=function(t){yz.setNavigationBarRightItems(t)},e.prototype.setNavigationBarTitle=function(t){yz.setNavigationBarTitle(t)},e.prototype.openWindow=function(t){yz.navigationOpenWindow(t)},e.prototype.setWebCanShare=function(t){yz.setWebCanShare(t)},e.prototype.openMediaCameraAsync=function(t){return new Promise((function(e,o){yz.openCamera({success:function(o){t&&t.success&&t.success(o),e(o)},fail:function(e){t&&t.fail&&t.fail(e),o(!1)},complete:function(e){t&&t.complete&&t.complete(e),o(!1)}})}))},e.prototype.scanQrCodeAsync=function(t){return new Promise((function(e,o){yz.scanCode({success:function(o){t&&t.success&&t.success(o),e(o)},fail:function(e){t&&t.fail&&t.fail(e)},complete:function(e){t&&t.complete&&t.complete(e)}})}))},e.prototype.chooseContactsAsync=function(t){return new Promise((function(e,o){var n={success:function(o){t&&t.success&&t.success(o),e(o)},fail:function(e){t&&t.fail&&t.fail(e),o(!1)},complete:function(e){t&&t.complete&&t.complete(e),o(!1)}};t&&t.count&&(n=Object.defineProperties(n,{count:{value:t.count}})),yz.chooseContacts(n)}))},e.prototype.getContactsInfoAsync=function(t){yz.ContactDetails({targetUserId:t.targetUserId,success:function(e){t&&t.success&&t.success(e)},fail:function(e){t&&t.fail&&t.fail(e)},complete:function(e){t&&t.complete&&t.complete(e)}})},e.prototype.uploadPhotoAsync=function(t){return new Promise((function(e,o){var c={success:function(o){t&&t.success&&t.success(o),e(o)},fail:function(e){t&&t.fail&&t.fail(e)},complete:function(e){t&&t.complete&&t.complete(e)}};t&&t.count&&Object.defineProperties(c,{count:{value:t.count}}),t&&t.sourceType?Object.defineProperties(c,{sourceType:{value:t.sourceType}}):Object.defineProperties(c,{sourceType:{value:[n.ALBUM,n.CAMERA]}}),yz.uploadImage(c)}))},e.prototype.userLocationAsync=function(t){return new Promise((function(e,o){yz.userLocation({success:function(o){t&&t.success&&t.success(o),e(o)},fail:function(e){t&&t.fail&&t.fail(e),o(!1)},complete:function(e){t&&t.complete&&t.complete(e),o(!1)}})}))},e.prototype.userLocationWifiAsync=function(t){return new Promise((function(e,o){yz.userLocationContainAp({bssids:t.bssids,success:function(o){t&&t.success&&t.success(o),e(o)},fail:function(e){t&&t.fail&&t.fail(e),o(!1)},complete:function(e){t&&t.complete&&t.complete(e),o(!1)}})}))},e.prototype.getWifiInfoAsync=function(t){return new Promise((function(e,o){yz.getWifiInfo({success:function(o){t&&t.success&&t.success(o),e(o)},fail:function(e){t&&t.fail&&t.fail(e),o(!1)},complete:function(e){t&&t.complete&&t.complete(e),o(!1)}})}))},e.prototype.getWifiMacAsync=function(t){return new Promise((function(e,o){yz.getMac({success:function(o){t&&t.success&&t.success(o),e(o)},fail:function(e){t&&t.fail&&t.fail(e),o(!1)},complete:function(e){t&&t.complete&&t.complete(e),o(!1)}})}))},e.prototype.faceCollectionAsync=function(t){return new Promise((function(e,o){yz.faceLiveCollection({live:t.live,userId:t.userId,success:function(o){t&&t.success&&t.success(o),e(o)},fail:function(e){t&&t.fail&&t.fail(e),o(!1)},complete:function(e){t&&t.complete&&t.complete(e),o(!1)}})}))},e.prototype.faceCompareAsync=function(t){return new Promise((function(e,o){yz.faceCompare({userId:t.userId,success:function(o){t&&t.success&&t.success(o),e(o)},fail:function(e){t&&t.fail&&t.fail(e),o(!1)},complete:function(e){t&&t.complete&&t.complete(e),o(!1)}})}))},e.prototype.wechatPayAsync=function(t){return new Promise((function(e,o){yz.wechatPay({payInfo:{appid:t.appid,partnerid:t.partnerid,prepayid:t.prepayid,package:t.package,noncestr:t.noncestr,timestamp:t.timestamp,sign:t.sign},success:function(o){t&&t.success&&t.success(o),e(o)},fail:function(e){t&&t.fail&&t.fail(e),o(!1)},complete:function(e){t&&t.complete&&t.complete(e),o(!1)}})}))},e.prototype.aliPayAsync=function(t){return new Promise((function(e,o){yz.aliPay({payInfo:t,success:function(o){t&&t.success&&t.success(o),e(o)},fail:function(e){t&&t.fail&&t.fail(e),o(!1)},complete:function(e){t&&t.complete&&t.complete(e),o(!1)}})}))},e.prototype.openReadWithTimer=function(t){return new Promise((function(e,o){yz.openReadWithTimer({url:t.url,openType:t.openType,title:t.title,id:t.id,type:t.type,success:function(o){t&&t.success&&t.success(o),e(o)},fail:function(e){t&&t.fail&&t.fail(e),o(!1)},complete:function(e){t&&t.complete&&t.complete(e),o(!1)}})}))},e.prototype.getDeviceInfo=function(t){return new Promise((function(e,o){yz.getDeviceInfo({success:function(o){t&&t.success&&t.success(o),e(o)},fail:function(e){t&&t.fail&&t.fail(e),o(!1)},complete:function(e){t&&t.complete&&t.complete(e),o(!1)}})}))},e}(c),a=function(t,e,o,n){var c=new XMLHttpRequest;"GET"===t.toUpperCase()&&(c.open(t,e),n&&n.TOKEN_TYPE&&n.TOKEN_VALUE&&c.setRequestHeader(n.TOKEN_TYPE,n.TOKEN_VALUE),c.send(null)),c.onreadystatechange=function(){4==c.readyState&&200==c.status&&o(c.responseText)}},u=["updateAppMessageShareData","updateTimelineShareData","onMenuShareWeibo","onMenuShareQZone","startRecord","stopRecord","onVoiceRecordEnd","playVoice","pauseVoice","stopVoice","onVoicePlayEnd","uploadVoice","downloadVoice","chooseImage","previewImage","uploadImage","downloadImage","translateVoice","getNetworkType","openLocation","getLocation","hideOptionMenu","showOptionMenu","hideMenuItems","showMenuItems","hideAllNonBaseMenuItem","showAllNonBaseMenuItem","closeWindow","scanQRCode","chooseWXPay","openProductSpecificView","addCard","chooseCard","openCard"],p=function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),f=function(){return(f=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var c in e=arguments[o])Object.prototype.hasOwnProperty.call(e,c)&&(t[c]=e[c]);return t}).apply(this,arguments)},y=function(t){function e(e){return t.call(this,e)||this}return p(e,t),e.prototype.auth=function(){var t=this;return new Promise((function(e,o){var n=t.option.GATE_WAY+"/wechat/mp/token";a("GET",n,(function(t){var o={accessToken:JSON.parse(t).message};e(o)}))}))},e.prototype.apiRegister=function(){a("GET",this.option.GATE_WAY+"/wechat/mp/jssdk?url="+window.location.href.split("#")[0],(function(t){var e=JSON.parse(t);e.debug=!1,e.jsApiList=u,wx.config(f({},e)),wx.ready((function(){wx.checkJsApi({jsApiList:u,success:function(t){t.errMsg.includes("ok")?sessionStorage.setItem("JssdkCheckResult",JSON.stringify(t.checkResult)):alert("微信JSSDK可用性检测失败!")}})}))}),this.option)},e.prototype.validateWechatSdkByFuncName=function(t){return JSON.parse(sessionStorage.getItem("JssdkCheckResult"))[t]},e.prototype.setNavigationBarRightItems=function(t){},e.prototype.setNavigationBarTitle=function(t){},e.prototype.openWindow=function(t){window.location.href=t.url},e.prototype.setWebCanShare=function(t){},e.prototype.getTokenAsync=function(t){},e.prototype.getTokenSync=function(){},e.prototype.getUserAsync=function(t){var e=this;return new Promise((function(t,o){a("GET",e.option.GATE_WAY+"/auth/user",(function(e){t(e.principal)}),e.option)}))},e.prototype.getUserSync=function(){console.error("Native Error: Wechat can't getUserBySync")},e.prototype.openMediaCameraAsync=function(t){},e.prototype.scanQrCodeAsync=function(t){var e=this;return new Promise((function(o,n){wx.ready((function(){e.validateWechatSdkByFuncName("scanQRCode")?t&&t.success&&wx.scanQRCode({needResult:1,scanType:["qrCode","barCode"],success:function(t){"scanQRCode:ok"===t.errMsg?o(t.resultStr):n("NativeJSSDK Error:error to scan qrcode")}}):(t&&t.fail&&t.fail("JSSDK Error:checked api error named scanQRCode"),n("JSSDK Error:checked api error named scanQRCode"))}))}))},e.prototype.chooseContactsAsync=function(t){},e.prototype.getContactsInfoAsync=function(t){},e.prototype.uploadPhotoAsync=function(t){},e.prototype.userLocationAsync=function(t){var e=this;return new Promise((function(o,n){wx.ready((function(){e.validateWechatSdkByFuncName("getLocation")?wx.getLocation({type:"wgs84",success:function(e){if("getLocation:ok"===e.errMsg){var c=e.latitude,i=e.longitude;o({latitude:c,longitude:i,address:"微信无address"}),t&&t.success&&t.success({latitude:c,longitude:i,address:"微信无address"})}else t&&t.fail&&t.fail("NativeJSSDK Error:error to get location!"),n("NativeJSSDK Error:error to get location!")}}):(t&&t.fail&&t.fail("JSSDK Error:checked api error named getLocation!"),n("JSSDK Error:checked api error named getLocation!"))}))}))},e.prototype.userLocationWifiAsync=function(t){},e.prototype.getWifiInfoAsync=function(t){},e.prototype.getWifiMacAsync=function(t){},e.prototype.faceCollectionAsync=function(t){},e.prototype.faceCompareAsync=function(t){},e.prototype.wechatPayAsync=function(t){},e.prototype.aliPayAsync=function(t){},e.prototype.openReadWithTimer=function(t){},e.prototype.getDeviceInfo=function(t){},e}(c),l=function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),d=function(t){function e(e){return t.call(this,e)||this}return l(e,t),e.prototype.auth=function(){var t=this,e=encodeURIComponent(window.location.href.toString());return new Promise((function(o,n){a("GET",t.option.GATE_WAY+"/cas-proxy/app/validate_full?callback="+e+(new Date).getTime(),(function(t){var e=JSON.parse(t);switch(e.errcode){case 2e3:o({accessToken:e.data.access_token,tokenType:e.data.token_type,scope:e.data.scope,tokenDateLine:e.data.expires_in});break;case 2001:window.location.href=e.msg;break;case 2002:alert(e.data);break;case 2003:case 5e3:case 5001:alert(e.msg)}}))}))},e.prototype.apiRegister=function(){console.warn("browser hasn't api register")},e.prototype.setNavigationBarRightItems=function(t){},e.prototype.setNavigationBarTitle=function(t){},e.prototype.openWindow=function(t){},e.prototype.setWebCanShare=function(t){},e.prototype.openMediaCameraAsync=function(t){},e.prototype.scanQrCodeAsync=function(t){},e.prototype.chooseContactsAsync=function(t){},e.prototype.getContactsInfoAsync=function(t){},e.prototype.uploadPhotoAsync=function(t){},e.prototype.userLocationAsync=function(t){},e.prototype.userLocationWifiAsync=function(t){},e.prototype.getWifiInfoAsync=function(t){},e.prototype.getWifiMacAsync=function(t){},e.prototype.faceCollectionAsync=function(t){},e.prototype.faceCompareAsync=function(t){},e.prototype.wechatPayAsync=function(t){},e.prototype.aliPayAsync=function(t){},e.prototype.openReadWithTimer=function(t){},e.prototype.getDeviceInfo=function(t){},e}(c),m=function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),h=function(t){function e(e){var o=t.call(this,e)||this;return o.proxy=o.distribute(e),o}return m(e,t),e.prototype.distribute=function(t){var e=window.navigator.userAgent.toLowerCase();return/iphone/.test(e)&&/mobile/.test(e)&&/yunzai/.test(e)?new s(t):/android/.test(e)&&/mobile/.test(e)&&/yunzai/.test(e)?new s(t):/linux/.test(e)&&/yunzai/.test(e)?new s(t):/micromessenger/.test(e)?new y(t):new d(t)},e.prototype.auth=function(){return this.proxy.auth()},e.prototype.apiRegister=function(){this.proxy.apiRegister()},e.prototype.openWindow=function(t){this.proxy.openWindow(t)},e.prototype.setNavigationBarTitle=function(t){this.proxy.setNavigationBarTitle(t)},e.prototype.setNavigationBarRightItems=function(t){this.proxy.setNavigationBarRightItems(t)},e.prototype.setWebCanShare=function(t){this.proxy.setWebCanShare(t)},e.prototype.openMediaCameraAsync=function(t){return this.proxy.openMediaCameraAsync(t)},e.prototype.scanQrCodeAsync=function(t){return this.proxy.scanQrCodeAsync(t)},e.prototype.chooseContactsAsync=function(t){return this.proxy.chooseContactsAsync(t)},e.prototype.getContactsInfoAsync=function(t){this.proxy.getContactsInfoAsync(t)},e.prototype.uploadPhotoAsync=function(t){return this.proxy.uploadPhotoAsync(t)},e.prototype.userLocationAsync=function(t){return this.proxy.userLocationAsync(t)},e.prototype.userLocationWifiAsync=function(t){return this.proxy.userLocationWifiAsync(t)},e.prototype.getWifiInfoAsync=function(t){return this.proxy.getWifiInfoAsync(t)},e.prototype.getWifiMacAsync=function(t){return this.proxy.getWifiMacAsync(t)},e.prototype.faceCollectionAsync=function(t){return this.proxy.faceCollectionAsync(t)},e.prototype.faceCompareAsync=function(t){return this.proxy.faceCompareAsync(t)},e.prototype.wechatPayAsync=function(t){return this.proxy.wechatPayAsync(t)},e.prototype.aliPayAsync=function(t){return this.proxy.aliPayAsync(t)},e.prototype.openReadWithTimer=function(t){return this.proxy.openReadWithTimer(t)},e.prototype.getDeviceInfo=function(t){return this.proxy.getDeviceInfo(t)},e}(c);e.default=h}]).default}));