const catalogCardss = document.querySelector('.catalog__cards');
const catalogItems = catalogCardss.querySelectorAll('.catalog__item');
const overlay = document.querySelector('.overlay');

catalogItems.forEach((item) => {
  const catalogLinks = item.querySelectorAll('.catalog__link');
  const popupInfo = item.querySelector('.popup__info');

  catalogLinks.forEach((link) => {
    link.addEventListener('click', () => {
      popupInfo.classList.add('popup__active');
      overlay.classList.add('overlay__active');
    });
  });

  const closeBtn = item.querySelector('.close-bnt');
  closeBtn.addEventListener('click', () => {
    popupInfo.classList.remove('popup__active');
    overlay.classList.remove('overlay__active');
  });
});