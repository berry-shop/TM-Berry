const callbackModal = document.querySelector('.callback-modal');
const callbackOpen = document.querySelector('.callback-open');

callbackOpen.addEventListener('click', () => {
  callbackModal.classList.toggle('callback-modal-active');
});