import {Navigation, NavigationBarTitle, NavigationBarRightItems} from "../operation/navigation";
import {WebCanShare} from "../operation/share";
import {Token, TokenParam} from "../operation/token";
import {User, UserParam} from "../operation/user";
import {MediaCamera, MediaCameraParam} from "../operation/media.camera";
import {QRcode, QRcodeParam} from "../operation/media.qrcode";
import {ContactUser, ContactUserParam} from "../operation/contact.users";
import {ContactUserInfo, ContactUserInfoParam} from "../operation/contact.userinfo";
import {MediaPhoto, MediaPhotoParam} from "../operation/media.photo";
import {MediaLocation, MediaLocationParam} from "../operation/media.location";
import {MediaWifiLocation, MediaWifiLocationParam} from "../operation/media.wifi.location";
import {MediaWifiInfo, MediaWifiInfoParam} from "../operation/media.wifi.info";
import {MediaWifiMac, MediaWifiMacParam} from "../operation/media.wifi.mac";

export abstract class BaseDevice {
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
     * 异步获取用户token
     * @param param 参数
     */
    abstract getTokenAsync(param?: TokenParam): Promise<Token>;

    /**
     * 同步获取用户token
     */
    abstract getTokenSync(): Token;

    /**
     * 异步获取用户信息
     * @param param 参数
     */
    abstract getUserAsync(param?: UserParam): Promise<User>;

    /**
     * 同步获取用户信息
     * @return User 用户信息
     */
    abstract getUserSync(): User;

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
    abstract chooseContactsAsync(param?: ContactUserParam): Promise<Array<ContactUser>>


    /**
     * 异步获取联系人详情 参数
     * @param param
     */
    abstract getContactsInfoAsync(param?: ContactUserInfoParam): Promise<ContactUserInfo>;

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
     * @param param
     */
    abstract getWifiMacAsync(param?: MediaWifiMacParam): Promise<MediaWifiMac>;
}
