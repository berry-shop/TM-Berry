
function calcCartPrice() {
   const cartContentList = document.querySelector('.cart-content__list');
   const cartItems = document.querySelectorAll('.cart-content__item');

   const totalPriceEl = document.querySelector('.fullprice');


   let priceTotal = 0;

   cartItems.forEach(function (item) {

      const amountEl = item.querySelector('[data-counter]');
      const priceEl = item.querySelector('.cart-product__price');
      const currentPrice = parseInt(amountEl.innerText) * parseFloat(priceEl.innerText);
      priceTotal += currentPrice;
   }) 

   totalPriceEl.innerText = priceTotal;

}

