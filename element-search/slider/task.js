function slide() {
const sliderItem = document.querySelectorAll(".slider__item");
const sliderNext = document.querySelector(".slider__arrow_next");
const sliderPrev = document.querySelector(".slider__arrow_prev");

let index = 0;

const activeSlider = (number) => {
    for (slide of sliderItem) {
        slide.classList.remove('slider__item_active')
    }
    sliderItem[number].classList.add('slider__item_active');
};

const next = () => {
    index === sliderItem.length - 1 ? index = 0 : (index += 1);
    activeSlider(index)
}
const prev = () => {index === 0 ? index = sliderItem.length - 1 : index -= 1;
    activeSlider(index)
 };
 sliderNext.onclick = () => {
    next();
    return false;
 };
 sliderPrev.onclick = () => {
    prev();
    return false;
 }
};
slide()