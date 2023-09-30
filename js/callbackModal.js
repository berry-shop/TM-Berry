const callbackModal = document.querySelector('.callback-modal');
const callbackOpen = document.querySelector('.callback-open');
const arrow = document.querySelector('.fa-chevron-down');

callbackOpen.addEventListener('click', () => {
  if (callbackModal.classList.contains('callback-modal-active')) {
    callbackModal.classList.remove('callback-modal-active');
    arrow.style.transform = 'rotate(360deg)';
  } else {
    callbackModal.classList.add('callback-modal-active');
    arrow.style.transform = 'rotate(180deg)';
  }
});

document.addEventListener('click', (e) => {
  if (
    e.target.id !== 'callbackModal' &&
    e.target.id !== 'messageInput' &&
    e.target.id !== 'sendMessageButton' &&
    !e.target.classList.contains('callback-modal') &&
    !e.target.classList.contains('callback-open')
  ) {
    callbackModal.classList.remove('callback-modal-active');
    arrow.style.transform = 'rotate(360deg)';
  }
});