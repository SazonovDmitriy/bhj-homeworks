const reveals = Array.from(document.querySelectorAll(".reveal"));

document.addEventListener("scroll", () => {
    for (let reveal of reveals) {
    const view = window.innerHeight;
    const elementTop = reveal.getBoundingClientRect().top;
    elementTop < view ? reveal.classList.add("reveal_active") : reveal.classList.remove("reveal_active");
    }
})