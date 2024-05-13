import playPauseFn from "./modules/seek/playPauseFn.js";
import updatePlayPauseIcon from "./modules/ui/updatePlayPauseIcon.js";
import rewindForwardFn from "./modules/seek/rewindForwardFn.js";
import muteUnmuteFn from "./modules/volume/muteUnmuteFn.js";
import updateVolumeIcon from "./modules/ui/updateVolumeIcon.js";
import updateProgress from "./modules/ui/updateProgress.js";
import seekingFn from "./modules/seek/seekingFn.js";
import selectFileForPlaying from "./modules/source/selectFileForPlaying.js";

import toggleDisplay from "./modules/ui/toggleDisplay.js";
import setSrcFromURL from "./modules/source/setSrcFromURL.js";

import dialogClose from "./modules/dialog/dialogClose.js";
import showSourceError from "./modules/dialog/showSourceError.js";

import requestFullScreen from "./modules/screen/requestFullScreen.js";
import lock from "./modules/screen/lock.js";
import exitFullscreen from "./modules/screen/exitFullscreen.js";
import unlock from "./modules/screen/unlock.js";

import saveCurrentTime from "./modules/storage/saveCurrentTime.js";
import loadCurrentTime from "./modules/storage/loadCurrentTime.js";

const playPauseBtn = document.querySelector("#play-pause");
const video = document.querySelector("video");
const rewindBtn = document.querySelector("#rewind");
const fastForwardBtn = document.querySelector("#fast-forward");
const volumeBtn = document.querySelector("#volume");
const progressIndicator = document.querySelector("#progress-indicator");
const progressBar = document.querySelector("#progress-bar");
const filePickerBtn = document.querySelector("#load-file");
const fileInput = document.querySelector("#file-input");

const loadTextInputBtn = document.querySelector("#load-text-input");
const textInput = document.querySelector("#text-input");

const onFullScreenBtn = document.querySelector("#on-full-screen");
const unlockBtn = document.querySelector("#unlock-btn");

const dialog = document.querySelector("dialog");
const showParagraf = document.querySelector("dialog p");
const closeButton = document.querySelector("dialog button");

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
window
  .addEventListener("keydown", (event) => {
    if (event.code === "ArrowUp") {
      video.volume += .1;
    } else if (event.code === "ArrowDown") {
      video.volume -= .1;
    }
  });

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

filePickerBtn
  .addEventListener("click", () => fileInput.click());
fileInput
  .addEventListener("change", (event) => selectFileForPlaying(video, event));

loadTextInputBtn
  .addEventListener("click", () => (toggleDisplay(textInput), textInput.focus()));
textInput
  .addEventListener("focusout", () => toggleDisplay(textInput));
textInput
  .addEventListener("keypress", (event) => setSrcFromURL(video, event));

onFullScreenBtn
  .addEventListener("click", () => {
    requestFullScreen(window);
    lock(window);
    toggleDisplay(onFullScreenBtn);
    toggleDisplay(unlockBtn);
  });
unlockBtn
  .addEventListener("click", () => {
    exitFullscreen(window);
    unlock(window);
    toggleDisplay(onFullScreenBtn);
    toggleDisplay(unlockBtn);
  });

window
  .addEventListener("error", (event) => showSourceError(dialog, showParagraf, event));
video
  .addEventListener("error", (event) => showSourceError(dialog, showParagraf, event));

closeButton
  .addEventListener("click", () => dialogClose(dialog));

window
  .addEventListener("beforeunload", () => saveCurrentTime(sessionStorage, video));
window
  .addEventListener("load", () => loadCurrentTime(sessionStorage, video));
