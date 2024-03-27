const rollButton = document.getElementById("rollButton");
const diceResult = document.getElementById("diceResult");

rollButton.onclick = function() {
    let min = 1;
    let max = 6;
    diceResult.textContent = Math.floor(Math.random() * (max - min + 1)) + min;
};
