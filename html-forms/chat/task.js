const chatWidget = document.querySelector(".chat-widget");
const chatWidgetSide = document.querySelector(".chat-widget__side");
const chat = document.querySelector(".chat-widget__messages");
const inputChat = document.querySelector(".chat-widget__input");

const date = new Date().toTimeString().slice(0, 5);

let arrMessageUser = [];

let arrMessageBot = [
    'Здравствуйте',
    'Вы клёвый',
    'Я тоже клёвый'
];

function getRandom(max) {
    return Math.floor(Math.random(0, 1) * max)
};

const random = arrMessageBot.forEach( () => getRandom(arrMessageBot.length));

chatWidgetSide.addEventListener('click', () => {
    chatWidget.classList.add("chat-widget_active");
});



inputChat.addEventListener('keydown', (e) => {
    if (e.keyCode === 13 && inputChat.value !== '') {
        arrMessageUser.push(inputChat.value);
        messageUser();
        messageBot();
        inputChat.value = '';
    }
});


function messageUser() {
    chat.innerHTML += `
    <div class="message message_client">
    <div class="message__time">${date}</div>
    <div class="message__text">
      ${arrMessageUser[arrMessageUser.length - 1]}
    </div>
  </div>
    `;
}

function messageBot() {
    chat.innerHTML += `<div class="message">
    <div class="message__time">${date}</div>
    <div class="message__text">
      ${random}
    </div>
  </div>
  `;
}