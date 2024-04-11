const playPauseBtn = document.querySelector("#play-pause");
const video = document.querySelector("video");

export default function () {
  const icon = playPauseBtn.querySelector("i");

  icon.textContent = "";
  icon.textContent = video.paused
    ? "play_arrow"
    : "paused";
}
