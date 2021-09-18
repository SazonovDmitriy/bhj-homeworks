const checkbox = document.querySelectorAll(".checkbox");
const check = document.querySelectorAll(".interest__check");
const interest = document.querySelectorAll(".interest")
const interestsActive = document.querySelectorAll(".interests_active");

document.addEventListener("click", function(e) {
    const onTarget = e.target;
    const c = onTarget.closest(".interest")
    console.log(c);
})