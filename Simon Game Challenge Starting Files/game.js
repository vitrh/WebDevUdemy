var buttonColours = ['red', 'blue', 'green', 'yellow'];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function () {
  if (!started) {
    $('#level-title').text('Level ' + level);
    nextSequence();
    started = true;
  }
});

$('.btn').click(function () {
  var userChosenColour = $(this).attr('id'); // attr. attribute selector
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound('wrong');
    $('body').addClass('game-over');
    $('#level-title').text('Game Over, Press any key to restart');

    setTimeout(function () {
      $('body').removeClass('game-over');
    }, 200);
    startOver();
  }
}

function nextSequence() {
  userClickedPattern = [];
  level++;
  $('#level-title').text('Level ' + level);
  var randomNum = Math.floor(Math.random() * 4); //  random number from 0-3
  var randomChosenColour = buttonColours[randomNum]; // select a random colour
  gamePattern.push(randomChosenColour);

  $('#' + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $('#' + currentColor).addClass('pressed');
  setTimeout(function () {
    $('#' + currentColor).removeClass('pressed');
  }, 100);
}

function playSound(name) {
  var audio = new Audio('sounds/' + name + '.mp3');
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
