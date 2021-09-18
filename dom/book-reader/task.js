const book = document.querySelector(".book");
const fontSize = book.querySelectorAll(".font-size");


book.addEventListener("click", function(event) {
    event.preventDefault();
    const target = event.target;

    if (target.classList.contains("font-size")) {
        switch (target.dataset.size) {
            case "small": {
                changeButton(fontSize, target);
                size(book, "book book_fs-small");
                break;
            }
            case "big": {
                changeButton(fontSize, target);
                size(book, "book book_fs-big");
                break;
            }
            default: {
                changeButton(fontSize, target);
                size(book, "book");
            }
        }
    }
});

function clearButtons (btn) {
    btn.forEach(element => element.classList.remove("font-size_active"));
};

function addButton (btn) {
    btn.classList.add("font-size_active");
};

function changeButton(allButtons, targetButton) {
    clearButtons(allButtons);
    addButton(targetButton)
};

function size(bookElement, size) {
    bookElement.className = size;
}