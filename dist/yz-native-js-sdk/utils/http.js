/*
 * @Date: 2020-02-03 16:11:51
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @LastEditors: ferried
 * @LastEditTime: 2020-04-07 11:15:47
 * @Editor: Visual Studio Code
 * @Desc: nil
 * @License: nil
 */
export var http = function (method, url, success, options) {
    var xmlHttp = new XMLHttpRequest();
    if (method.toUpperCase() === "GET") {
        xmlHttp.open(method, url);
        xmlHttp.withCredentials = true;
        if (options && options.TOKEN_TYPE && options.TOKEN_VALUE) {
            xmlHttp.setRequestHeader(options.TOKEN_TYPE, options.TOKEN_VALUE);
        }
        xmlHttp.send(null);
    }
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            return success(xmlHttp.responseText);
        }
    };
};
//# sourceMappingURL=http.js.map