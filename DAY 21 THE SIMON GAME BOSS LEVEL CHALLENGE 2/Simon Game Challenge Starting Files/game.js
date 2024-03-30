const buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  //console.log(userClickedPattern);

  playSound(userChosenColour);
  animatepress(userChosenColour);
});
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(names) {
  var audio = new Audio("sounds/" + names + ".mp3");
  audio.play();
}

function animatepress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(
    function () {
      $("#" + currentColour).removeClass("pressed");
    },

    100
  );
}
