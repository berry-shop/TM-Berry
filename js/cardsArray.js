const catalogCards = document.querySelector('.catalog__cards');

function itemsData() {
  fetch('https://64aed8bfc85640541d4dd17f.mockapi.io/items', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      // Обработка ошибки
      throw new Error('Ошибка загрузки данных');
    })
    .then(items => {
      let productItems = '';
      items.forEach(item => {
        const image = item.image;
        const title = item.title;
        const flavour = item.flavour;
        const weight = item.weight;
        const description = item.description;
        const code = item.code;
        const availability = item.availability;
        const classification = item.classification;
        const alt = item.alt;

        const productItem = `<div class="catalog__item ${classification}">
          <div class="image-box"><img class="catalog__img" src="${image}" alt="${alt}"></div>
          <div>
            <h3 class="catalog__title">${title}</h3>
          </div>
          <div>
            <p class="catalog__flavour" style="display: flex; flex-direction: column;">
              <span class="available" style="margin-bottom: 3px;">${availability}</span>
              <span>${flavour}</span>
            </p>
          </div>
          <div>
            <p class="catalog__weight">${weight}кг</p>
            <div class="special-code">Код: <strong>${code}</strong></div>
          </div>
          <div class="description-wrapper">
            <button aria-label="опис товару" data-link class="catalog__link">опис</button>
            <div class="popup__info" data-popup>
              <div class="close-box">
                <i class="fa-solid fa-xmark close-bnt" style="font-size: 28px; display: flex; justify-content: flex-end; margin-top: 5px; cursor: pointer;"></i>
              </div>
              <p>${description}</p>
              <img class="description__img" src="${image}" alt="${alt}" style="width: 50%; height: auto;">
            </div>
          </div>
        </div>`;
        productItems += productItem;
      });

      catalogCards.innerHTML = productItems;

      // налтчие товара
      const available = catalogCards.querySelectorAll('.available');
      available.forEach(el => {
        if (el.textContent === "В наявності ✓") {
          el.style.color = '#49D339';
        } else if (el.textContent === "Немає в наявності ✗") {
          el.style.color = '#ff394d';
        }
      });

      //////////////////////////////////////////////
      // пагинация
      const paginationNumbers = document.getElementById("pagination-numbers");
      const paginatedList = document.getElementById("paginated-list");
      let listItems = paginatedList.querySelectorAll(".catalog__item");
      const nextButton = document.getElementById("next-button");
      const prevButton = document.getElementById("prev-button");

      let paginationLimit = 8;
      let currentPage = 1;

      function clearPageNumbers() {
        const pageNumbers = document.querySelectorAll(".pagination-number");
        pageNumbers.forEach((pageNumber) => {
          pageNumber.remove();
        });
      }


      function updateListItems() {
        listItems = paginatedList.querySelectorAll(".catalog__item"); // Обновляем listItems после фильтрации
      }

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
            item.style.display = "flex";
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

      // фильтр
      const powderChosen = document.querySelector('.powder-chosen');
      const sodaChosen = document.querySelector('.soda-chosen');
      const powder = document.querySelectorAll('.powder');
      const soda = document.querySelectorAll('.soda');

      function updatePagination() {
        clearPageNumbers();

        updateListItems(); // Вызываем функцию для обновления списка элементов после фильтрации

        const newPageCount = Math.ceil(listItems.length / paginationLimit);

        // Обновляем currentPage, если новое количество страниц меньше текущей активной страницы
        if (currentPage > newPageCount) {
          currentPage = newPageCount;
        }

        // Добавляем новые номера страниц
        for (let i = 1; i <= newPageCount; i++) {
          appendPageNumber(i);
        }

        // Перерисовываем элементы на текущей странице
        displayItems();

        // Подсвечиваем текущую активную страницу
        handleActivePageNumber();

        // Обновляем статусы кнопок "Предыдущая" и "Следующая" страницы
        handlePageButtonsStatus();
      }

      powderChosen.addEventListener('click', () => {
        soda.forEach(el => {
          el.remove();
        });
        powder.forEach(el => {
          paginatedList.appendChild(el);
          el.style.display = 'flex';
        });
        updatePagination()
      });

      sodaChosen.addEventListener('click', () => {
        powder.forEach(el => {
          el.remove();
        });
        soda.forEach(el => {
          paginatedList.appendChild(el);
          el.style.display = 'flex';
        });
        updatePagination()
      });




      // открытие модального окна
      const catalogLinks = catalogCards.querySelectorAll('.catalog__link');
      const popupInfos = catalogCards.querySelectorAll('.popup__info');
      const overlay = document.querySelector('.overlay');

      catalogLinks.forEach((link, index) => {
        link.addEventListener('click', () => {
          popupInfos[index].classList.add('popup__active');
          overlay.classList.add('overlay__active');
        });
      });

      const closeBtns = catalogCards.querySelectorAll('.close-bnt');
      closeBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
          popupInfos[index].classList.remove('popup__active');
          overlay.classList.remove('overlay__active');
        });
      });
    })
    .catch(error => {
      console.error('Ошибка загрузки данных:', error);
    });
}

itemsData();