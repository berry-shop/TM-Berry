const refundBtn = document.querySelector('.refund__btn');
const refundInfo = document.querySelector('.refund__info');
const closeFefund = document.querySelector('.close-refund');
const over = document.querySelector('.overlay');
refundBtn.addEventListener('click', () => {
  refundInfo.classList.add('refund__info--active');
  over.classList.add('overlay__active');
  document.body.style.overflowY = "hidden"
})
closeFefund.addEventListener('click', () => {
  refundInfo.classList.remove('refund__info--active');
  over.classList.remove('overlay__active');
  document.body.style.overflowY = "scroll"
})