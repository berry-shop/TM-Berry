const cartOpen = document?.querySelector('.cart__img');
const cartContent = document?.querySelector('.cart__content')


cartOpen?.addEventListener('click', () => {
   cartContent.classList.toggle('cart--active');
 });
