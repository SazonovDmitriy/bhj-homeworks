function menu () {
    const value = document.querySelector(".dropdown__value");
    const list = document.querySelector(".dropdown__list");
    const item = document.querySelectorAll(".dropdown__item");
    value.addEventListener("click", (e) => {
        console.log(value.textContent)
        e.preventDefault;
        list.classList.toggle("dropdown__list_active");
    });
    for (let i of item) {
        i.onclick = function () {
            console.log(this.textContent)
            value.innerHTML = this.textContent;
            list.classList.toggle("dropdown__list_active");
            return false
        }
    }
}
menu()