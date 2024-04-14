import playPauseFn from "./modules/playPauseFn.js";
import updatePlayPauseIcon from "./modules/updatePlayPauseIcon.js";
import rewindForwardFn from "./modules/rewindForwardFn.js";

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
