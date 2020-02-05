export interface WechatOfficeInfo {
  appId: string;
  nonceStr: string;
  signature: string;
  timestamp: number;
  url: string;
  debug: boolean;
  jsApiList: Array<string>;
}

export const WECHAT_JSSDK_LIST: Array<string> = [
  "updateAppMessageShareData",
  "updateTimelineShareData",
  "onMenuShareWeibo",
  "onMenuShareQZone",
  "startRecord",
  "stopRecord",
  "onVoiceRecordEnd",
  "playVoice",
  "pauseVoice",
  "stopVoice",
  "onVoicePlayEnd",
  "uploadVoice",
  "downloadVoice",
  "chooseImage",
  "previewImage",
  "uploadImage",
  "downloadImage",
  "translateVoice",
  "getNetworkType",
  "openLocation",
  "getLocation",
  "hideOptionMenu",
  "showOptionMenu",
  "hideMenuItems",
  "showMenuItems",
  "hideAllNonBaseMenuItem",
  "showAllNonBaseMenuItem",
  "closeWindow",
  "scanQRCode",
  "chooseWXPay",
  "openProductSpecificView",
  "addCard",
  "chooseCard",
  "openCard"
];
