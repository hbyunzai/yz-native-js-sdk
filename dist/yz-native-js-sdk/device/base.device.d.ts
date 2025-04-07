import { Navigation, NavigationBarTitle, NavigationBarRightItems } from "../operation/navigation";
import { WebCanShare } from "../operation/share";
import { Token } from "../operation/token";
import { MediaCamera, MediaCameraParam } from "../operation/media.camera";
import { QRcode, QRcodeParam } from "../operation/media.qrcode";
import { ContactUser, ContactUserParam } from "../operation/contact.users";
import { ContactUserInfoParam } from "../operation/contact.userinfo";
import { MediaPhoto, MediaPhotoParam } from "../operation/media.photo";
import { MediaLocation, MediaLocationParam } from "../operation/media.location";
import { MediaWifiLocation, MediaWifiLocationParam } from "../operation/media.wifi.location";
import { MediaWifiInfo, MediaWifiInfoParam } from "../operation/media.wifi.info";
import { MediaWifiMac, MediaWifiMacParam } from "../operation/media.wifi.mac";
import { FaceCollection, FaceCollectionParam } from "../operation/face.collection";
import { FaceCompare, FaceCompareParam } from "../operation/face.compare";
import { PayWechat, PayWechatParam } from "../operation/pay.wechat";
import { PayAlipay, PayAlipayParam } from "../operation/pay.alipay";
import { ReadWithNumber, ReadWithNumberParam } from "../operation/read.with.number";
import { DeviceInfo, DeviceInfoParam } from "../operation/device.info";
import { DeviceOption } from "./device.option";
import { User } from "../operation/user";
import { FileBrowser } from "../operation/fileBrowser";
import { DownloadBrowserParam } from "../operation";
import { DeviceType } from "./device.type";
export declare abstract class BaseDevice {
    option: DeviceOption;
    constructor(option?: DeviceOption);
    /**
     * 获取设备类型
     */
    abstract getType(): DeviceType;
    /**
     * 获取用户
     */
    abstract getUser(): Promise<User>;
    /**
     * 设备认证获取token
     */
    abstract auth(): Promise<Token>;
    /**
     * API注册
     */
    abstract apiRegister(): void;
    /**
     * 打开新窗口
     * @param param 参数
     */
    abstract openWindow(param?: Navigation): void;
    /**
     * 设置标题
     * @param param 参数
     */
    abstract setNavigationBarTitle(param?: NavigationBarTitle): void;
    /**
     * 设置标题右侧按钮
     * @param param 参数
     */
    abstract setNavigationBarRightItems(param?: NavigationBarRightItems): void;
    /**
     * 设置网页是否可以被分享
     * @param param 参数
     */
    abstract setWebCanShare(param?: WebCanShare): void;
    /**
     * 异步打开媒体照相机
     * @param param 参数
     */
    abstract openMediaCameraAsync(param?: MediaCameraParam): Promise<MediaCamera>;
    /**
     * 异步扫码
     * @param param 参数
     */
    abstract scanQrCodeAsync(param?: QRcodeParam): Promise<QRcode>;
    /**
     * 异步选择联系人
     * @param param 参数
     */
    abstract chooseContactsAsync(param?: ContactUserParam): Promise<Array<ContactUser>>;
    /**
     * 异步获取联系人详情 参数
     * @param param
     */
    abstract getContactsInfoAsync(param?: ContactUserInfoParam): void;
    /**
     * 异步上传图像
     * @param param 参数
     */
    abstract uploadPhotoAsync(param?: MediaPhotoParam): Promise<MediaPhoto>;
    /**
     * 异步获取经纬度地址
     * @param param 参数
     */
    abstract userLocationAsync(param?: MediaLocationParam): Promise<MediaLocation>;
    /**
     * 通过获取附近WiFi列表判断是否在制定范围内
     * @param param 参数
     */
    abstract userLocationWifiAsync(param?: MediaWifiLocationParam): Promise<MediaWifiLocation>;
    /**
     * 获取已连接Wifi信息
     * @param param 参数
     */
    abstract getWifiInfoAsync(param?: MediaWifiInfoParam): Promise<MediaWifiInfo>;
    /**
     * 获取已连接Wifi的Mac地址
     * @param param 参数
     */
    abstract getWifiMacAsync(param?: MediaWifiMacParam): Promise<MediaWifiMac>;
    /**
     * 人脸采集
     * @param param 参数
     */
    abstract faceCollectionAsync(param?: FaceCollectionParam): Promise<FaceCollection>;
    /**
     * 人脸对比
     * @param param 参数
     */
    abstract faceCompareAsync(param?: FaceCompareParam): Promise<FaceCompare>;
    /**
     * 云在app微信支付
     * @param param 参数
     */
    abstract wechatPayAsync(param?: PayWechatParam): Promise<PayWechat>;
    /**
     * 云在app支付宝支付
     * @param param
     */
    abstract aliPayAsync(param?: PayAlipayParam): Promise<PayAlipay>;
    /**
     * 计时阅读
     * @param param
     */
    abstract openReadWithTimer(param?: ReadWithNumberParam): Promise<ReadWithNumber>;
    /**
     *  获取设备信息
     * @param param
     */
    abstract getDeviceInfo(param?: DeviceInfoParam): Promise<DeviceInfo>;
    /**
     * 通过浏览器打开
     * @param param
     */
    abstract fileBrowser(param?: FileBrowser): Promise<any>;
    abstract downloadByBrowser(param?: DownloadBrowserParam): Promise<any>;
}
