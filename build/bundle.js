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

function rewindForwardFn (video, type) {
  video.currentTime += type === "rewind" ? -10 : 10;
}

const playPauseBtn = document.querySelector("#play-pause");
const video = document.querySelector("video");
const rewindBtn = document.querySelector("#rewind");
const fastForwardBtn = document.querySelector("#fast-forward");

playPauseBtn
  .addEventListener("click", () => playPauseFn(video));

video
  .addEventListener("play", () => updatePlayPauseIcon(playPauseBtn, video));

video
  .addEventListener("pause", () => updatePlayPauseIcon(playPauseBtn, video));

rewindBtn
  .addEventListener("click", () => rewindForwardFn(video, "rewind"));

fastForwardBtn
  .addEventListener("click", () => rewindForwardFn(video, "forward"));
