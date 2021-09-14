const chatWidget = document.querySelector(".chat-widget");
const chat = document.querySelector(".chat-widget__messages");

chatWidget.onclick = () => {
    chatWidget.classList.add("chat-widget_active");
}

document.querySelector("input").addEventListener('keydown', function(e) {
    console.log(this.textContent, e.code)
    if (e.code === 13) {
        console.log(this.textContent);
        chat
        document.querySelector(".message").classList.add("message_client")
    }
})