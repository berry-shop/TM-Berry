const refund = document.querySelector('.refund');
const refundInfo = document.querySelector('.refund__info');
const closeFefund = document.querySelector('.close-refund');
const over = document.querySelector('.overlay');

refund.addEventListener('click', () => {
  refundInfo.classList.add('refund__info--active');
  over.classList.add('overlay__active');
})

closeFefund.addEventListener('click', () => {
  refundInfo.classList.remove('refund__info--active');
  over.classList.remove('overlay__active');
})