
const inform = document.querySelector('.popup__info')
const link = document.querySelector('.catalog__link')
const bodys = document.body;


window.addEventListener('click', function (event) {

   if (event.target.hasAttribute('data-link')) {

      bodys.classList.toggle('stop__scroll');

   } else {

      bodys.classList.remove('stop__scroll');
   
   }

});