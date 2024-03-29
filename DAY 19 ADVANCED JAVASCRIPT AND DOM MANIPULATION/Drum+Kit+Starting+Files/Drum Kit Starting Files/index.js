/*

document.querySelectorAll("button")[0].addEventListener("click", handleclick);
document.querySelectorAll("button")[1].addEventListener("click", handleclick);
document.querySelectorAll("button")[2].addEventListener("click", handleclick);
document.querySelectorAll("button")[3].addEventListener("click", handleclick);
document.querySelectorAll("button")[4].addEventListener("click", handleclick);
document.querySelectorAll("button")[5].addEventListener("click", handleclick);
document.querySelectorAll("button")[6].addEventListener("click", handleclick);

*/

// one line using for loop

//for(let i=0 i<document.querySelectorAll(".drum").lenght;i++)

let numofdrum = document.querySelectorAll(".drum").length;

for (let i = 0; i < numofdrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML; 
    switch (buttonInnerHtml) {
      case "w":
        var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
        break;
      case "a":
        var audio = new Audio("./sounds/tom-2.mp3");
        audio.play();
        break;
      case "s":
        var audio = new Audio("./sounds/tom-3.mp3");
        audio.play();
        break;
      case "d":
        var audio = new Audio("./sounds/tom-4.mp3");
        audio.play();
        break;
      case "j":
        var audio = new Audio("./sounds/crash.mp3");
        audio.play();
        break;
      case "k":
        var audio = new Audio("./sounds/kick-bass.mp3");
        audio.play();
        break;
      case "l":
        var audio = new Audio("./sounds/snare.mp3");
        audio.play();
        break;
      default:
        console.log(buttonInnerHtml);
        break;
    }
  });
}
