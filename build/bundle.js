function playPauseFn (video) {
  video.paused
    ? video.play()
    : video.pause();
}

function updatePlayPauseIcon (playPauseBtn, video) {
  const icon = playPauseBtn.querySelector("i");

  icon.textContent = "";
  icon.textContent = video.paused
    ? "play_arrow"
    : "paused";
}

const playPauseBtn = document.querySelector("#play-pause");
const video = document.querySelector("video");

playPauseBtn
  .addEventListener("click", playPauseFn(video));

video
  .addEventListener("play", updatePlayPauseIcon(playPauseBtn, video));

video
  .addEventListener("pause", updatePlayPauseIcon(playPauseBtn, video));
