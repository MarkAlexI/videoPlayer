export default function (window) {
  const document = window.document;

  if (document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen) {
    window.screen.orientation.unlock();
  }
}
