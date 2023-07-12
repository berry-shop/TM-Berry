const catalogLink = document.querySelectorAll('.catalog__link');
const popupInfo = document.querySelectorAll('.popup__info');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelectorAll('.close-bnt');

catalogLink.forEach((el, index) => {
  el.addEventListener('click', () => {
    popupInfo[index].classList.add('popup__active');
    overlay.classList.add('overlay__active');
  });
});

closeBtn.forEach((el, index) => {
  el.addEventListener('click', () => {
    popupInfo[index].classList.remove('popup__active');
    overlay.classList.remove('overlay__active');
  })
});