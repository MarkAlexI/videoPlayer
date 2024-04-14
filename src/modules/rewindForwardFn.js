export default function (video, type) {
  video.currentTime += type === "rewind" ? -10 : 10;
}
