const termsContent = document.querySelector('.terms__content');
const termsContentOpenBtn = document.querySelector('.termsContentOpenBtn');
const termsContentCloseBtn = document.querySelector('.termsContentCloseBtn');
const overlayLayer = document.querySelector('.overlay');
const bodyy = document.querySelector('body');

termsContentOpenBtn.addEventListener('click', function () {
  termsContent.classList.add('terms__content--visible');
  overlayLayer.classList.add('overlay__active');
  bodyy.classList.add('stop-scroll');
});

termsContentCloseBtn.addEventListener('click', function () {
  termsContent.classList.remove('terms__content--visible');
  overlayLayer.classList.remove('overlay__active');
  bodyy.classList.remove('stop-scroll');
});