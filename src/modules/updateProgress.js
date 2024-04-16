export default function (progressIndicator, video) {
  const progressPercentage = (video.currentTime/video.duration) * 100;

  progressIndicator.style.width = `${progressPercentage}%`;
}
