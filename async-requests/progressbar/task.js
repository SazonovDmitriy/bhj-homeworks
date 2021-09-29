const progress = document.querySelector("progress");
const form = document.querySelector("form");
const inputFile = document.querySelector("input");


form.addEventListener("submit", function (event) {
    if (inputFile.value !== "") {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", form.getAttribute("action"));
        xhr.setRequestHeader("Content-type", "multipart/form-data");
        xhr.onload = function () {
            console.log(this.responseText);
        }
        xhr.upload.onprogress = function (event) {
            if (event.lengthComputable) {
                progress.value = (event.loaded / event.total).toFixed(2);
            }
        }
        xhr.send(new FormData(form));
    }
    event.preventDefault();
})