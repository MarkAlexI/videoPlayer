export default function (video, progressIndicator) {
  const progressPercentage = (video.currentTime/video.duration) * 100;

  progressIndicator.style.width = `${progressPercentage}%`;
}
