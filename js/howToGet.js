const howToGet = document.querySelector('.howToGet');
const howToGetModal = document.querySelector('.howToGet__modal');
const howToGetModalClose = document.querySelector('.howToGet__modal-close');
howToGet.addEventListener('click', function () {
  howToGetModal.classList.add('howToGet__modal-active');
});
howToGetModalClose.addEventListener('click', function () {
  howToGetModal.classList.remove('howToGet__modal-active');
})