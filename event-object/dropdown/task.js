const list = document.querySelectorAll("dropdown__list");
for (let item of document.getElementsByClassName("dropdown__item")) {
    item.onclick = () => {
        list.classList.add("dropdown__list_active")
    }
}