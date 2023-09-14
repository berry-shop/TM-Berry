const howToGet = document.querySelector('.howToGet');
const howToGetModal = document.querySelector('.howToGet__modal');
const howToGetModalClose = document.querySelector('.howToGet__modal-close');
howToGet.addEventListener('click', function () {
  howToGetModal.classList.add('howToGet__modal-active');
  howToGetModal.classList.remove('howToGet__modal-disactive');
});
howToGetModalClose.addEventListener('click', function () {
  howToGetModal.classList.add('howToGet__modal-disactive');
  howToGetModal.classList.remove('howToGet__modal-active');
})
