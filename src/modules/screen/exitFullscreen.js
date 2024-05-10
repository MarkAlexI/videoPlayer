export default function (window) {
  const document = window.document;
  if (typeof window.ActiveXObject !== "undefined") {
    let wscript = new window.ActiveXObject("WScript.Shell");
    if (wscript !== null) {
      wscript.SendKeys("{F11}");
    }
  } else {
    document.exitFullscreen();
  }
}
