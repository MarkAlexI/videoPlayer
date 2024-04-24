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

function muteUnmuteFn (video) {
  video.muted = video.muted
    ? false
    : true;
}

function updateVolumeIcon (volumeBtn, video) {
  const icon = volumeBtn.querySelector("i");

  icon.textContent = "";
  icon.textContent = video.muted
    ? "volume_off"
    : "volume_up";
}

function updateProgress (video, progressIndicator) {
  const progressPercentage = (video.currentTime/video.duration) * 100;

  progressIndicator.style.width = `${progressPercentage}%`;
}

function seekingFn (video, progressBar, event) {
  const updatedTime = (event.offsetX/progressBar.offsetWidth) * video.duration;

  video.currentTime = updatedTime;
}

const playPauseBtn = document.querySelector("#play-pause");
const video = document.querySelector("video");
const rewindBtn = document.querySelector("#rewind");
const fastForwardBtn = document.querySelector("#fast-forward");
const volumeBtn = document.querySelector("#volume");
const progressIndicator = document.querySelector("#progress-indicator");
const progressBar = document.querySelector("#progress-bar");

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

video
  .addEventListener("volumechange", updateVolumeIcon(volumeBtn, video));

volumeBtn
  .addEventListener("click", () => muteUnmuteFn(video));

video
  .addEventListener("timeupdate", () => updateProgress(progressIndicator, video));

window
  .addEventListener("keyup", (event) => {
    if (event.code === "Space") {
      playPauseFn(video);
    } else if (event.code === "ArrowLeft") {
      rewindForwardFn(video, "rewind");
    } else if (event.code === "ArrowRight") {
      rewindForwardFn(video, "forward");
    } else {
      return;
    }
  });

video
  .addEventListener("timeupdate", () => updateProgress(video, progressIndicator));

let isMouseDown = false;

progressBar
  .addEventListener("click", (event) => seekingFn(video, progressBar, event));

progressBar
  .addEventListener("mousedown", () => (isMouseDown = true));

progressBar
  .addEventListener("mouseup", () => (isMouseDown = false));

progressBar
  .addEventListener("mousemove", (event) => isMouseDown && seekingFn(video, progressBar, event));
