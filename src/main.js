import playPauseFn from "./modules/playPauseFn.js";
import updatePlayPauseIcon from "./modules/updatePlayPauseIcon.js";

document
  .querySelector("#play-pause")
  .addEventListener("click", playPauseFn);

document
  .querySelector("video")
  .addEventListener("pause", updatePlayPauseIcon)
  .addEventListener("play", updatePlayPauseIcon);
