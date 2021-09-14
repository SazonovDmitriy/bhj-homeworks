const rogatorCase = Array.from(document.querySelectorAll(".rotator__case"));
let index = 0;
const nextTime = function() {
    rogatorCase[index].classList.remove("rotator__case_active");
    index += 1;
    rogatorCase[index].classList.add("rotator__case_active");
        if (index === rogatorCase.length - 1) {
            index = 0; 
        }
}
setInterval(nextTime, 1000)