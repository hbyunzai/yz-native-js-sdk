export interface MediaCamera {
    [key: string]: any;
}

export interface MediaCameraParam {
    [key: string]: any;
}

export interface YzMediaCameraParam extends MediaCameraParam {
    success?: (data: MediaCamera) => void;
    fail?: (msg: any) => void;
    complete?: (msg: any) => void;
}

export interface YzMediaCamera extends MediaCamera {

}
