const burger = document.querySelector('[data-burger]');
const nav = document.querySelector('[data-nav]');
const navItems = nav.querySelectorAll('a');
const body = document.body;
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
console.log(headerHeight)
document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

burger.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  burger.classList.toggle('burger--active');
  nav.classList.toggle('nav--visible');

  const expanded = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', !expanded);
});

navItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
    burger.classList.remove('burger--active');
    nav.classList.remove('nav--visible');
  });
});