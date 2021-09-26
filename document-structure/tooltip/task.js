const hasTooltip = Array.from(document.querySelectorAll(".has-tooltip"));
const a = Array.from(document.querySelectorAll("a"));
let divElement = document.createElement('div');
divElement.setAttribute('class', 'tooltip');

function tooltipPosition () {
    console.log(this);
    const coords = this.getBoundingClientRect();
    divElement.style.left = coords.left + this;
    divElement.style.top = coords.bottom + this;
}

document.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target;
    target.appendChild(divElement);
    target.children[0].innerHTML = target.getAttribute('title');
    target.children[0].classList.add('tooltip_active');

    console.log(target.children[0].classList.contains('tooltip') === a)
    
});
