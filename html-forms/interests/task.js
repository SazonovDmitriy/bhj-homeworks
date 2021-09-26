const ulCheckbox = document.querySelector("ul").children;

for (let item of ulCheckbox) {
    item.querySelector('label').addEventListener('click', checkMain);
    const labels = item.querySelector('ul').children;
    for (let i of labels) {
        i.querySelector('label').addEventListener('click', checkChildren)
    }
};

function checkMain(event) {
    const target = event.target;
    if (target.getAttribute("checked")) {
        target.removeAttribute("checked");
    } else {
        target.setAttribute("checked", "checked");
    }
    const inputs = target.closest('label').nextElementSibling.children;
    if (target.getAttribute('checked')) {
        for (let i of inputs) {
            i.querySelector('input').checked = true;
        }
    } else {
        for (let i of inputs) {
            i.querySelector('input').checked = false;
        }
    }
};

function checkChildren(event) {
    const target = event.target;
    const inputs = target.closest('label');
    if (target.getAttribute("checked")) {
        for (let i of inputs) {
            i.querySelector('input').checked = false;
        }
    }
}