/*
 * @Date: 2020-02-03 16:11:51
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @LastEditors: ferried
 * @LastEditTime: 2020-09-21 09:53:23
 * @Editor: Visual Studio Code
 * @Desc: nil
 * @License: nil
 */
export const http = (
  method: "GET" | "POST",
  url: string,
  success: (response: any) => void,
  options?: any
) => {
  const xmlHttp = new XMLHttpRequest();
  if (method.toUpperCase() === "GET") {
    console.log(method, ":", "url")
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
