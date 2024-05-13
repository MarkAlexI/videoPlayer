export default function (storage, video) {
  storage.setItem("videoTime", video.currentTime);
  storage.setItem("videoName", video.src);
}
