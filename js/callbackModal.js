const callbackModal = document.querySelector('.callback-modal');
const callbackOpen = document.querySelector('.callback-open');
const arrow = document.querySelector('.fa-chevron-down');

callbackOpen.addEventListener('click', () => {

  callbackModal.classList.toggle('callback-modal-active');

  if (arrow.classList.contains('fa-chevron-down')) {
    arrow.classList.remove('fa-chevron-down');
    arrow.classList.add('fa-chevron-up');
  } else if (arrow.classList.contains('fa-chevron-up')) {
    arrow.classList.remove('fa-chevron-up');
    arrow.classList.add('fa-chevron-down');
  }

});