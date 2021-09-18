const chatWidget = document.querySelector(".chat-widget");
const chatWidgetSide = document.querySelector(".chat-widget__side");
const chat = document.querySelector(".chat-widget__messages");
const inputChat = document.querySelector(".chat-widget__input");

let arrMessageUser = [];
let arrMessageBot = [
    'Здравствуйте',
    'Вы клёвый',
    'Я тоже клёвый'
];

chatWidgetSide.addEventListener('click', () => {
    chatWidget.classList.add("chat-widget_active");
});



inputChat.addEventListener('keydown', function(e) {
    if (e.code === a && inputChat !== '') {
        arrMessageUser[inputChat]
        document.querySelector(".message").classList.add("message_client")
    }
});