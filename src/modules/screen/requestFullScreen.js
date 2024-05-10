export default async function (window) {
  const document = window.document;
  let element = await document.documentElement;
  let requestMethod =
    element.requestFullScreen ||
    element.webkitRequestFullScreen ||
    element.mozRequestFullScreen ||
    element.msRequestFullScreen;
  if (requestMethod) {
    requestMethod.call(element);
    return true;
  } else if (typeof window.ActiveXObject !== "undefined") {
    let wscript = new window.ActiveXObject("WScript.Shell");
    if (wscript !== null) {
      wscript.SendKeys("{F11}");
      return true;
    }
  }
}
