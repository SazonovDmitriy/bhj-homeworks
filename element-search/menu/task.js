function menuLinks() {
const menuClick = document.querySelectorAll("ul.menu__item");
const menuMain = document.querySelectorAll(".menu_sub");


for (let item of menuMain) {
    item.onclick = function clickFunc () {
        console.log(this);
        const menuSub = this.closest("li.menu__item");
        menuSub.classList.toggle("menu_active");
        return false;
    }
}
}
menuLinks();