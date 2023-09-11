const powderBtn = document.querySelector('.powder-chosen');
const sodaBtn = document.querySelector('.soda-chosen');
const checkboxPowder = document.querySelector('.checkbox-powder');
const checkboxSoda = document.querySelectorAll('.checkbox-soda');

powderBtn.addEventListener('click', () => {
  checkboxPowder.classList.remove('fa-square');
  checkboxPowder.classList.remove('fa-regular');
  checkboxPowder.classList.add('fa-solid');
  checkboxPowder.classList.add('fa-square-check');
  checkboxSoda.forEach(checkbox => {
    checkbox.classList.remove('fa-square-check');
    checkbox.classList.add('fa-square');
    checkbox.classList.add('fa-regular');
    checkbox.classList.remove('fa-solid');
  });
});

sodaBtn.addEventListener('click', () => {
  checkboxSoda.forEach(checkbox => {
    checkbox.classList.remove('fa-square');
    checkbox.classList.add('fa-square-check');
    checkbox.classList.remove('fa-regular');
    checkbox.classList.add('fa-solid');
  });
  checkboxPowder.classList.remove('fa-square-check');
  checkboxPowder.classList.add('fa-square');
  checkboxPowder.classList.remove('fa-solid');
  checkboxPowder.classList.add('fa-regular');
});