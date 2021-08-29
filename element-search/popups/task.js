function modalElements () {
    const modalMain = document.getElementById("modal_main");
    const modalSuccess = document.getElementById("modal_success");
    const modalAdd = (modalAddElement) => {
        modalAddElement.classList.add("modal_active");
    };
    const modalClose = (modalCloseElement) => {
        modalCloseElement.classList.remove("modal_active");
    };

    for (let item of modalMain.getElementsByClassName("modal__close")) {
        item.onclick = () => {
            modalClose(modalMain);
        }
    };
    for (let item of modalSuccess.getElementsByClassName("modal_success")) {
        item.onclick = () => {
            modalClose(modalSuccess)
        }
    };
    for (let item of modalMain.getElementsByClassName("show-success")) {
        item.onclick = () => {
            modalClose(modalMain);
            modalAdd(modalSuccess)
        }
    };

modalAdd(modalMain);
};

modalElements();