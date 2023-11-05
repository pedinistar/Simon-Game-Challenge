var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameOn = false;
var level = 0;

// ----------------------------------------
// ----------------------------------------
// ----------------------------------------
// ----------------------------------------
$(document).keydown(function () {
  if (!gameOn) {
    $("#level-title").text("Level " + level);
    nextSequence();
    gameOn = true;
  }
});
// ----------------------------------------
// ----------------------------------------
// ----------------------------------------
// ----------------------------------------

function nextSequence() {
  // level
  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChoosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChoosenColour);

  $("#" + randomChoosenColour)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChoosenColour);
  // console.log(gamePattern);
}

// ----------------------------------------
// ----------------------------------------
// ----------------------------------------
// ----------------------------------------

$(".btn").on("click", function () {
  var userChosenColor = $(this).attr("id");
  // to play sound on clicking the button
  playSound(userChosenColor);
  // to add the clicked color into the list
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
  // for animation
  animatePress(userChosenColor);
});

// ----------------------------------------
// ----------------------------------------
// ----------------------------------------
// ----------------------------------------

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// ----------------------------------------
// ----------------------------------------
// ----------------------------------------
// ----------------------------------------

function animatePress(currentColour) {
  $("." + currentColour).addClass("pressed");
  setTimeout(function () {
    $("." + currentColour).removeClass("pressed");
  }, 10);
}

// ----------------------------------------
// ----------------------------------------
// ----------------------------------------
// ----------------------------------------

function checkAnswer(currentLevel) {}
