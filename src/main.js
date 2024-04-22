import playPauseFn from "./modules/playPauseFn.js";
import updatePlayPauseIcon from "./modules/updatePlayPauseIcon.js";
import rewindForwardFn from "./modules/rewindForwardFn.js";
import muteUnmuteFn from "./modules/muteUnmuteFn.js";
import updateVolumeIcon from "./modules/updateVolumeIcon.js";
import updateProgress from "./modules/updateProgress.js";
import seekingFn from "./modules/seekingFn.js";

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
  .addEventListener("timeupfate", () => updateProgress(progressIndicator, video));

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

progressBar
  .addEventListener("click", (event) => seekingFn(video, progressBar, event));
