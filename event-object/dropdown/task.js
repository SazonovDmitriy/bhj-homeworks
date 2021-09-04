function menu () {
    const list = document.querySelectorAll(".dropdown__list");
    for (let item of document.querySelectorAll(".dropdown__value")) {
        item.onclick = () => {
            console.log(this);
            const list = document.querySelector("dropdown__list");
            // list.classList.toggle("dropdown__list_active");
        }
    }
    const arr = Array.from("dropdown__list");

}
menu()