// const elementStatus = document.getElementById("status");
// elementStatus = new Date.parse(status);
let count = 59;
function time () {
    const elementTimer = document.getElementById("timer");
    elementTimer.textContent = --count;
        if (count === 0) {
            clearInterval(idTimer);
            alert(`Вы победили в конкурсе!`);
            // location = 'https://yandex.ru/';
        }
}
let idTimer = setInterval(time, 1000);