import playPauseFn from "./modules/playPauseFn.js";
import updatePlayPauseIcon from "./modules/updatePlayPauseIcon.js";
import rewindForwardFn from "./modules/rewindForwardFn.js";
import muteUnmuteFn from "./modules/muteUnmuteFn.js";
import updateVolumeIcon from "./modules/updateVolumeIcon.js";

const playPauseBtn = document.querySelector("#play-pause");
const video = document.querySelector("video");
const rewindBtn = document.querySelector("#rewind");
const fastForwardBtn = document.querySelector("#fast-forward");
const volumeBtn = document.querySelector("#volume");

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
