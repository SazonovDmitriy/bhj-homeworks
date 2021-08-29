function menuLinks() {
const menuClick = document.querySelectorAll("li.menu__item");
const menuMain = document.querySelector("ul.menu_sub");


for (let item of menuClick) {
    item.onclick = () => {
        menuMain.classList.toggle("menu_active");
        return false;
    }
}
}
menuLinks();