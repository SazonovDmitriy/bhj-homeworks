function menu () {
    const value = document.querySelectorAll(".dropdown__value");
    const list = document.querySelector(".dropdown__list");
    const item = document.querySelectorAll(".dropdown__item");
    addEventListener("click", () => {
        console.log(this)
        list.classList.add("dropdown__list_active");
    });
    for (let i of item) {
        i.onclick = function () {
            console.log(this)
            item.classList.remove("dropdown__list_active");
            const textValue = this.textContent("dropdown__item");
            return false
        }
    }
}
menu()