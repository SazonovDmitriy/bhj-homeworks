function menuLinks() {
const menuMain = document.querySelectorAll(".menu_main");

for (let item of menuMain) {
    const menuSub = item.querySelectorAll(".menu_sub");
    for (let sub of menuSub) {
        const link = sub.closest(".menu__item").querySelector(".menu__link");
        link.onclick = () => {
            if (sub.classList.contains("menu_active")) {
                sub.classList.remove("menu_active");
                return false;
            }
            const menuActive = item.querySelector(".menu_active");
            if (menuActive) {
                menuActive.classList.remove("menu_active");
            }
            sub.classList.add("menu_active");
            return false
        }
    }
};




// menuLink.addEventListener("click", function(event) {
//     console.log(this)
//     const target = event.target;
//     if (target.closest("menu")) {
//         target.classList.toggle("menu_active");
//         return false
//     }
// })

// for (let item of document.querySelectorAll("menu__link")) {
//     item.onclick = function clickFunc () {
//         console.log(this);
//         const menuUl = this.nextElementSibling("ul.menu_sub");  
//         menuUl.classList.toggle("menu_active");
//         return false;
//     }
// }
}
menuLinks();