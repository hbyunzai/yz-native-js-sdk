export interface QRcode {
    [key: string]: any;
}
export interface QRcodeParam {
    [key: string]: any;
}
export interface YzQrcode extends QRcode {
}
export interface YzQrcodeParam extends QRcodeParam {
    success?: (data: QRcode) => void;
    fail?: (error: any) => void;
    complete?: (msg: any) => void;
}
