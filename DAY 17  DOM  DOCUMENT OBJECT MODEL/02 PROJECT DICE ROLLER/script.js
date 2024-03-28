
function rolldice() {
    const diceNum = parseInt(document.getElementById("diceNum").value);
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    let values = [];
    let images = [];

    for (let i = 0; i < diceNum; i++) { 
        let roll = Math.floor(Math.random() * 6) + 1;
        values.push(roll);
        images.push(`<img src="DICE PNG/${roll}.png" alt="${roll}">`);
    }

    diceResult.textContent = "Results: " + values.join(", "); 
    diceImages.innerHTML = images.join("");
}