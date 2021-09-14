const tabs = Array.from(document.querySelectorAll(".tab"));
const tabContent = document.querySelectorAll(".tab__content");
const tabMain = document.querySelector("#tabs1")
    
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function() {
        tabContent.forEach(item => {
            item.classList.remove("tab__content_active");
            tabContent[i].classList.add("tab__content_active");
        })
        tabs.forEach(tab => {
            tab.classList.remove("tab_active")
            this.classList.add("tab_active")
        })
    })
}