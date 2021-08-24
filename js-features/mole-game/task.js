const deadMole = document.getElementById("dead");
const lostMole = document.getElementById("lost");
let hole = null;

function mole () {
    if (deadMole.onclick) {
        deadMole.textContent++;
    } else if (lostMole.onclick) {
        lostMole.textContent++;
    }
}

function getHole(index) {
    if (hole[index]('hole hole_has-mole')) {
        document.getElementById(`hole ${index}`)
    }
}
mole();