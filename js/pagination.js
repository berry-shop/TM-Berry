const paginationNumbers = document.getElementById("pagination-numbers");
const paginatedList = document.getElementById("paginated-list");
const listItems = paginatedList.querySelectorAll(".catalog__item");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

let paginationLimit = 8;
let currentPage = 1;

// Функция, которая будет вызываться при изменении размера окна
function checkScreenWidth() {
  var screenWidth = window.innerWidth;

  if (screenWidth <= 990) {
    // Выполняется нужное действие здесь для ширины <= 768px
    paginationLimit = 6; // Изменяем значение переменной paginationLimit
  } else {
    paginationLimit = 8; // Возвращаем исходное значение, если ширина > 768px
  }
}
// Обработчик события изменения размера окна
window.addEventListener('resize', checkScreenWidth);
// Вызов функции при загрузке страницы для проверки начальной ширины окна
checkScreenWidth();

const disableButton = (button) => {
  button.classList.add("disabled");
  button.setAttribute("disabled", true);
};

const enableButton = (button) => {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
};

const handlePageButtonsStatus = () => {
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }

  if (currentPage === pageCount) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};

const handleActivePageNumber = () => {
  document.querySelectorAll(".pagination-number").forEach((button) => {
    button.classList.remove("active");
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex === currentPage) {
      button.classList.add("active");
    }
  });
};

const appendPageNumber = (index) => {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination-number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);
  pageNumber.addEventListener("click", () => {
    currentPage = index;
    handleActivePageNumber();
    handlePageButtonsStatus();
    displayItems();
    scrollToElement('catalog');
  });

  paginationNumbers.appendChild(pageNumber);
};

// Функция для отображения элементов на текущей странице
const displayItems = () => {
  const startIndex = (currentPage - 1) * paginationLimit;
  const endIndex = startIndex + paginationLimit;
  listItems.forEach((item, index) => {
    if (index >= startIndex && index < endIndex) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
};

// Создание номеров страниц
const pageCount = Math.ceil(listItems.length / paginationLimit);
for (let i = 1; i <= pageCount; i++) {
  appendPageNumber(i);
}

// Обработчик кнопки "Следующая страница"
nextButton.addEventListener("click", () => {
  if (currentPage < pageCount) {
    currentPage++;
    handleActivePageNumber();
    handlePageButtonsStatus();
    displayItems();
  }
});

// Обработчик кнопки "Предыдущая страница"
prevButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    handleActivePageNumber();
    handlePageButtonsStatus();
    displayItems();
  }
});

// Инициализация начального состояния
handleActivePageNumber();
handlePageButtonsStatus();
displayItems();

// скролл наверх
function scrollToElement(elementId) {
  var element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }
}