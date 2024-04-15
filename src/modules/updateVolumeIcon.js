export default function (volumeBtn, video) {
  const icon = volumeBtn.querySelector("i");

  icon.textContent = "";
  icon.textContent = video.muted
    ? "volume_off"
    : "volume_up";
}
