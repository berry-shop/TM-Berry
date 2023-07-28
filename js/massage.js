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
  } catch (error) {
    console.error('Ошибка отправки сообщения:', error);
  }
};

const sendMessageButton = document.getElementById('sendMessageButton');
sendMessageButton.addEventListener('click', () => {
  sendMessage();
});