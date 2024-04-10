const video = document.querySelector("video");

export default function () {
  video.paused
    ? video.play()
    : video.pause();
}
