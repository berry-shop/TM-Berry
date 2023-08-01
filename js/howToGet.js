const howToGet = document.querySelector('.howToGet');
const howToGetModal = document.querySelector('.howToGet__modal');
const howToGetModalClose = document.querySelector('.howToGet__modal-close');

const overlay = document.querySelector('.overlay');

howToGet.addEventListener('click', function () {
  howToGetModal.classList.add('howToGet__modal-active');
  overlay.classList.add('overlay__active');
});

howToGetModalClose.addEventListener('click', function () {
  howToGetModal.classList.remove('howToGet__modal-active');
  overlay.classList.remove('overlay__active');
});