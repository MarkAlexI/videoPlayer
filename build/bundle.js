const video = document.querySelector("video");

function playPauseFn () {
  video.paused
    ? video.play()
    : video.pause();
}

document.querySelector("#play-pause").addEventListener("click", playPauseFn);
