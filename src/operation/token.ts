export interface Token {
    [key: string]: any;
}


export interface TokenParam {
    [key: string]: any;
}

export interface YzToken extends Token {
    /**
     * token失效时间戳
     */
    tokenDateLine: string;
    /**
     * 作用域
     */
    scope: string;
    /**
     * 类型
     */
    tokenType: string;
    /**
     * token
     */
    accessToken: string;
}

export interface YzTokenParam extends TokenParam {
    /**
     * 是否刷新token
     */
    refresh?: boolean;
}
