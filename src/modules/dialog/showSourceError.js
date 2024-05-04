export default function (dialog, showParagraf, event) {
  showParagraf.textContent += event.srcElement.error.message || "";
  dialog.showModal();
}
