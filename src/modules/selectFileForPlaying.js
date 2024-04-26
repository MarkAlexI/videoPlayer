export default function (video,  event) {
  const file = event.target.files[0];
  const fileURL = URL.createObjectURL(file);

  video.src = fileURL;
}
