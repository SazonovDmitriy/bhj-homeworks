const deadMole = document.getElementById("dead");
const lostMole = document.getElementById("lost");
let dead = 0;
let miss = 0;

function getHole(i) {
    return document.getElementById(`hole${i}`);
}

function reset() {
    dead = 0;
    miss = 0;
    deadMole.textContent = "0";
    lostMole.textContent = "0";
};

for (let i = 1; i <= 9; i++) {
    let hole = getHole(i);
    hole.onclick = function () {
        if (hole.classList.contains("hole_has-mole")) {
            dead++;
            deadMole.textContent = dead.toString();
        } else {
            miss++;
            lostMole.textContent = miss.toString();
        }
        if (dead === 10) {
            reset();
            alert("Вы победили!")
        } else if (miss === 5) {
            reset();
            alert("Вы проиграли!")
        }
    }
}