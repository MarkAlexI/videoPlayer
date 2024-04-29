export default function (video, event) {
  if (event.key === "Enter") {
    event.preventDefault();
    video.src = event.data;
  }
}
