
const cartContentList = document.querySelector('.cart-content__list');
const cart = document.querySelector('.cart');
const cartQuantity = document.querySelector('.cart__quantity');
const fullPrice = document.querySelector('.fullprice');
const cartDelete = document.querySelector('.cart-product__delete');
let price = 0


// отображение количества товаров в корзине
const printQuantity = () => {
	let productsListLength = cartContentList.children.length;
	cartQuantity.textContent = productsListLength;
};


window.addEventListener('click', function (event) {

   if (event.target.hasAttribute('data-cart')) {

      const card = event.target.closest('.catalog__item');

      const deleteProducts = (productParent) => {
         let id = productParent.querySelector(`[data-id="${productInfo.id}"]`)
         let currentPrice = document.querySelector('.cart-product__price')
         productParent.remove();
         printQuantity();
         calcCartPrice();
      };

      const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.catalog__img').getAttribute('src'),
			title: card.querySelector('.catalog__title').innerText,
         flavour: card.querySelector('.catalog__flavour').innerText,
			weight: card.querySelector('.catalog__weight').innerText,
			price: card.querySelector('.catalog__price').innerText,
			counter: card.querySelector('[data-counter]').innerText,
		};

      const itemInCart = cartContentList.querySelector(`[data-id="${productInfo.id}"]`);

		if (itemInCart) {
			const counterElement = itemInCart.querySelector('[data-counter]');
			counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
		} else {

         const cartItemHTML = `<li class="cart-content__item" data-id="${productInfo.id}">
            <article class="cart-content__product cart-product">
               <img src="${productInfo.imgSrc}" alt="img">
               <div class="cart-product__text">
                  <h3 class="cart-product__title">${productInfo.title}</h3>
                  <p class="cart-product__flavour">${productInfo.flavour}</p>
                  <p class="cart-product__weight">${productInfo.weight}</p>
                  <div class="price-count__wrap">
                     <span class="cart-product__count" data-counter>${productInfo.counter}</span>
                     <span class="cart-product__things">шт.</span>
                     <span class="cart-product__price">${productInfo.price}</span>
                  </div>
               </div>
               <button class="cart-product__delete" aria-label="Видалити товар">
                  delete
               </button>
            </article>
         </li>`;

         cartContentList.insertAdjacentHTML('beforeend', cartItemHTML)
      
      }
      
      
      cartContentList.addEventListener('click', (e) => {
         if (e.target.classList.contains('cart-product__delete')) {
            deleteProducts(e.target.closest('.cart-content__item'));
         }
      });

      printQuantity();

      calcCartPrice();

   }

});


