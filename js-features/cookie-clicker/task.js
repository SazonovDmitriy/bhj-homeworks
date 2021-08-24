const elementClicker = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");

function clicker () {
    function changeSizes () {
        if (image.onclick) {
            elementClicker.textContent++;
            if (image.width === 200) {
                image.width = 150;
            } else {
                image.width = 200;
            }
        }
    }
    image.onclick = changeSizes;
}
clicker();