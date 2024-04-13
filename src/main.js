import playPauseFn from "./modules/playPauseFn.js";
import updatePlayPauseIcon from "./modules/updatePlayPauseIcon.js";

const playPauseBtn = document.querySelector("#play-pause");
const video = document.querySelector("video");

playPauseBtn
  .addEventListener("click", playPauseFn(video));

video
  .addEventListener("play", updatePlayPauseIcon(playPauseBtn, video));

video
  .addEventListener("pause", updatePlayPauseIcon(playPauseBtn, video));
