var yourName = document.getElementById("yourName");
var partnerName = document.getElementById("partnerName");
var calculate = document.getElementById("calculate");
var final_result = document.getElementById("final_result");

calculate.onclick = function () {
    var lovePercentage = Math.floor(Math.random() * 101); // Generates a random love percentage between 0 and 100
    final_result.textContent = "Your love percentage with " + partnerName.value + " is " + lovePercentage + "%.";
};
