export default function (video, progressBar, event) {
  const updatedTime = (event.offsetX/progressBar.offsetWidth) * video.duration;

  video.currentTime = updatedTime;
}
