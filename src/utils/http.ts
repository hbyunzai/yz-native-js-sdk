/*
 * @Date: 2020-02-03 16:11:51
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @LastEditors: ferried
 * @LastEditTime: 2020-02-03 16:15:59
 * @Editor: Visual Studio Code
 * @Desc: nil
 * @License: nil
 */
export const http = (
  method: "GET" | "POST",
  url: string,
  success: (response: any) => void
) => {
  const xmlHttp = new XMLHttpRequest();
  if (method.toUpperCase() === "GET") {
    xmlHttp.open(method, url);
    xmlHttp.send(null);
  }
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      success(xmlHttp.responseText);
    }
  };
};
