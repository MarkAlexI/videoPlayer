export default function (dialog, showParagraf, event) {
  showParagraf.textContent += event.srcElement.error.message || event.message || "";
  dialog.showModal();

  return true;
}
