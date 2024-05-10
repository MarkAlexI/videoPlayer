export default async function (window) {
  const document = window.document;
  if (document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen) {
    setTimeout(function() {
      window.screen.orientation.lock("landscape-primary");
    }, 200);
  }
  return true;
}
