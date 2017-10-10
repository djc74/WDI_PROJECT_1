// pick random square
// add class to make colour
// add click event
// remove class and click event after set time
// update score
// repeat random selection
// stop game when score is 10



$(() => {

  let currentLevel = 1
  let score = 0;
  let timer;
  let interval;
  let seconds;
  let counter = 30;
  let $timeCountdown = null;
  let speed = 1000;
  let remove = 1000;

  // Get DOM variables
  const $welcome = $('.welcome');
  const $main = $('.main');
  const $li = $('li');
  const $score = $('.score');
  //const $highscore = $('.highscore');
  const $button = $('.start');
  const $enter = $('.enter');
  let $randomSquare;
  $timeCountdown = $('.timer');

  //hide main screen
  function welcome (){
    $main.hide();
    $enter.on('click', main);
  }
  welcome();

  // reveal main screen and hide welcome
  function main () {
    $welcome.hide();
    $main.show();
  }


  // Start game button
  $button.on('click', startGame);


  // start game function
  function startGame () {
    pickRandom();
    clickedOn();
    repeat();
    seconds = setInterval(countdown, speed);
    // console.log('startGame');
  }

  // Pick random square and add new class
  function pickRandom () {
    $randomSquare = $($li[Math.floor($li.length * Math.random())]).addClass('selected');
    // console.log($randomSquare);
    timeOut();
    // console.log('pickRandom');
  }

  // Remove new class on timeout

  function removeClass () {
    $randomSquare.removeClass('selected');
    // console.log('removeClass');
  }

  function timeOut () {
    timer = setTimeout(removeClass, remove);
    console.log('timeOut');
  }

  // Add click event
  function clickedOn () {
    $li.on('click', clickResponse);
    // console.log('clickedOn');
  }

  // Update score and remove class of clicked square
  function clickResponse () {
    //console.log('clickResponse');
    if ($(this).hasClass('selected')) {
      //console.log('yes');
      updateScore();
      $(this).removeClass('selected');
    }
  }

  // Update score
  function updateScore () {
    score++;
    $score.html(score);
    //console.log('updateScore');
    stopGame();
  }

  // Repeat at interval
  function repeat () {
    interval = setInterval(pickRandom, 2000);
    //console.log('repeat');
  }

  // Stop game at score of 10
  function stopGame () {
    if (score === levels[currentLevel]) {
      alert('Boom!');
      stopIntervals();
      newLev();
    } else {
      if (counter <= 0) {
        alert('You\'re dead!');
        stopIntervals();
        reset();
      }
    }
    // console.log('stopGame');
  }

  // Stop random square generator
  function stopIntervals () {
    clearInterval(interval);
    clearInterval(seconds);
    //console.log('stopIntervals');
  }

  // countdown timer
  function countdown() {
    counter--;
    $timeCountdown.html(counter);
    // console.log('countdown');
    stopGame();
  }

  // reset game
  function reset() {
    $button.html('Play again?');
    counter = 30;
    console.log('reset');
  }

  // start next level
  function newLev () {
    $button.html('Next level?');
    currentLevel++;
    counter = 30;
    console.log(currentLevel);
  }

  // object to store levels
  const levels = {
    1: 3,
    2: 6,
    3: 9,
    4: 12
  };

  //
  function secondLevel () {
    if (levels[currentLevel] === 3) {
      console.log(levels[currentLevel]);
      speed = speed-100;
      console.log(speed);
      remove = remove-100;
      // console.log(remove);
      score = 0;
      clearTimeout();
      setTimeout(removeClass, remove);
    }
  }
  secondLevel();
//
  //


});
