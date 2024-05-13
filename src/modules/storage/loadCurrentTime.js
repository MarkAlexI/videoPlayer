export default function (storage, video) {
  const savedTime = storage.getItem("videoTime");
  const savedName = storage.getItem("videoName");
  const currentName = video.src;

  if (savedTime && savedName == currentName) {
    video.currentTime = parseFloat(savedTime);
  }
}
