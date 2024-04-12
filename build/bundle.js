const video$1 = document.querySelector("video");

function playPauseFn () {
  video$1.paused
    ? video$1.play()
    : video$1.pause();
}

const playPauseBtn = document.querySelector("#play-pause");
const video = document.querySelector("video");

function updatePlayPauseIcon () {
  const icon = playPauseBtn.querySelector("i");

  icon.textContent = "";
  icon.textContent = video.paused
    ? "play_arrow"
    : "paused";
}

document
  .querySelector("#play-pause")
  .addEventListener("click", playPauseFn);

document
  .querySelector("video")
  .addEventListener("play", updatePlayPauseIcon);

document
  .querySelector("video")
  .addEventListener("pause", updatePlayPauseIcon);
