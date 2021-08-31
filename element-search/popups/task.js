function modalElements () {
    const modalMain = document.getElementById("modal_main");
    const modalSuccess = document.getElementById("modal_success");
    const modalAdd = (modalAddElement) => {
        modalAddElement.classList.add("modal_active");
    };
    const modalClose = (modalCloseElement) => {
        modalCloseElement.classList.remove("modal_active");
    };

    for (let item of document.getElementsByClassName("modal__close")) {
        item.onclick = function modalModal() {
            const divs = document.getElementsByTagName("div");
            console.log(this);
            const close = this.closest(".modal");
            close.classList.remove("modal__active");
        };
    };
    for (let item of modalSuccess.getElementsByClassName("modal__close")) {
        item.onclick = () => {
            console.log(this)
            modalClose(modalSuccess);
        }
    };
    for (let item of modalMain.getElementsByClassName("show-success")) {
        item.onclick = () => {
            console.log(this)
            modalClose(modalMain);
            modalAdd(modalSuccess)
        }
    };

modalAdd(modalMain);
};

modalElements();