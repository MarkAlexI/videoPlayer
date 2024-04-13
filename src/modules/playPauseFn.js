export default function (video) {
  video.paused
    ? video.play()
    : video.pause();
}
