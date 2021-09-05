function menu () {
    const value = document.querySelectorAll(".dropdown__value");
    const list = document.querySelector(".dropdown__list");
    const item = document.querySelectorAll(".dropdown__item");
    addEventListener("click", () => {
        list.classList.toggle("dropdown__list_active");
    });
    for (let i of item) {
    i.onclick = () => {
        i.classList.remove("dropdown__list_active");
        value.classList.add("dropdown__value")
    }
}
}
menu()