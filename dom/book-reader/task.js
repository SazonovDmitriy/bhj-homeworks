const book = document.querySelectorAll(".book");
const fontSize = document.querySelectorAll(".font-size");

for (let i of document.querySelectorAll(".font-size")) {
    i.onclick = function(e)  {
        console.log(this.closest(".book"))
        const thisBook = this.closest(".book");
        this.classList.remove("font-size_active");
            if (this.classList.remove("font-size_active")) {
                thisBook.classList.add("book_fs-big")
            }
        return false
    }
}