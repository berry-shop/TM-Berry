var botToken = '6300145068:AAEbHK2pgMOEdU72aN2tFBUkexWGa2HQPTg';
var chatId = '-1001932278028';

const modal = document.querySelector('.modal-notification');

const messageInput = document.getElementById('messageInput');

messageInput.addEventListener('focus', (event) => {
  event.target.style.color = '#383838';
});

messageInput.addEventListener('blur', (event) => {
  event.target.style.color = '#a6a6a6';
});

// деактивация окна после отправления сообщения 
function deactivation() {
  console.log("Прошла задержка в 3 секунды! Выполнилось простое действие.");
  modal.style.display = 'none';
}

const sendMessage = async () => {
  try {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value + " Зворотній зв'язок";

    // Проверяем, содержит ли текст хотя бы одну цифру
    if (/[__]{2}|[_]/.test(messageText)) {
      console.error('Ошибка: невірно заповнена форма');
      messageInput.style.border = '2px solid #ff394d';
      return; // Останавливаем выполнение функции, если текст не содержит цифр
    } else {
      messageInput.style.border = '2px solid #8ac739';
    }

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(messageText)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: messageText
      })
    });

    const data = await response.json();
    console.log(data);
    modal.style.display = 'block';

    // проверка дня недели
    const currentDate = new Date();
    const currentDayOfWeek = currentDate.getDay();

    if (currentDayOfWeek === 6 || currentDayOfWeek === 0) {
      modal.textContent = "⚠️ Сьогодні у нас вихідний. Ваш запит буде оброблено у робочий день з 9:00";
      modal.style.color = '#f7a500';
    } else {
      modal.textContent = 'Ваш запит буде оброблено протягом 10 хвилин ✓';
      modal.style.color = '#49D339';
    }

  } catch (error) {
    console.error('Ошибка отправки сообщения:', error);
  }
};

const sendMessageButton = document.getElementById('sendMessageButton');
sendMessageButton.addEventListener('click', () => {
  sendMessage();
  setTimeout(deactivation, 5500);
});