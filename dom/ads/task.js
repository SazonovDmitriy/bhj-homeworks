const rogatorCase = Array.from(document.querySelectorAll(".rotator__case"));
let index = 0;
const nextTime = () => {
    for (let item of rogatorCase) {
        console.log(rogatorCase);
        item.classList.remove("rotator__case_active");    
    }
}
setInterval(nextTime, 1000)