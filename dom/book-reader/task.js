const book = document.querySelectorAll(".book");
const fontSize = document.querySelectorAll(".font-size");

for (let i of document.querySelectorAll(".font-size")) {
    i.onclick = function()  {
        console.log(this.closest(".book"))
        const thisBook = this.closest(".book");
        this.classList.toggle("font-size_active");
        if (this.classList.contains("font-size_small")) {
            thisBook.classList.toggle("book_fs-small");
            return false
        } else if (this.classList.contains("font-size_big")) {
            thisBook.classList.toggle("book_fs-big");
            return false
        }
    }
}