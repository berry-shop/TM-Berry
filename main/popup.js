

const catalogLink = document.querySelectorAll('.catalog__link');
const popupInfo = document.querySelector('.popup__info');
const closePopup = document.querySelectorAll('.close--popup');




const popInfo = {
   popup: popupInfo.dataset.popup
};

const itemIn = popupInfo.querySelector(`[data-popup="${popInfo.popup}"]`);


catalogLink.forEach(el => {
   el.addEventListener('click', () => {
      popupInfo.classList.toggle('popup__info-active');
   });
 });







 