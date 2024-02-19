// Box
const enterButton = document.querySelector('.door.active button')
const form = document.querySelector('dialog')
const close = document.querySelector('dialog .close')

enterButton.addEventListener('click', () => {
  if (typeof form.showModal === "function") {
    form.showModal();
  } else {
    // Nothing
  }
});

close.addEventListener('click', () => {
  form.close();
});
