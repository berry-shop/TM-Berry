let swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   slidesPerView: 1,
 
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },

 });