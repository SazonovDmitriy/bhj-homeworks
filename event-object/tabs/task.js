const tabs = Array.from(document.querySelectorAll(".tab"));
const tabContent = document.querySelectorAll(".tab__content_active")

    
addEventListener("click", function() {
    for (let item of tabs) {
    console.log(tabs.indexOf(item));
        
    }
})