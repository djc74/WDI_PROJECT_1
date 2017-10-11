$(() => {

  //settings at Start
  let currentLevel = 1;
  let score = 0;
  let counter = 30;
  let $timeCountdown = null;
  let speed = 1000;
  let remove = 1000;
  let interval;
  let seconds;

  // object to store levels
  const levels = {
    1: 3,
    2: 6,
    3: 9,
    4: 12
  };

  // Get DOM variables
  const $welcome = $('.welcome');
  const $main = $('.main');
  const $li = $('li');
  const $score = $('.score');
  const $button = $('.start');
  const $enter = $('.enter');
  const $boom = $('.boom');
  const $lose = $('.lose');
  let $randomSquare;
  $timeCountdown = $('.timer');

  //hide main screen
  function welcome (){
    $main.hide();
    $boom.hide();
    $lose.hide();
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
  }

  // Pick random square and add new class
  function pickRandom () {
    $randomSquare = $($li[Math.floor($li.length * Math.random())]).addClass('selected');
    timeOut();
  }

  // Remove new class on timeout
  function removeClass () {
    $randomSquare.removeClass('selected');
  }

  function timeOut () {
    setTimeout(removeClass, remove);
  }

  // Add click event
  function clickedOn () {
    $li.on('click', clickResponse);
  }

  // Update score and remove class of clicked square
  function clickResponse () {
    if ($(this).hasClass('selected')) {
      updateScore();
      $(this).removeClass('selected');
    }
  }

  // Update score
  function updateScore () {
    score++;
    $score.html(score);
    stopGame();
  }

  // Repeat at interval
  function repeat () {
    interval = setInterval(pickRandom, 2000);
  }

  // Stop game at score of 10
  function stopGame () {
    if (score === levels[currentLevel]) {
      stopIntervals();
      boom();
    } else {
      if (counter <= 0) {
        stopIntervals();
        lose();
      }
    }
  }

  //win game screen
  function boom () {
    $main.hide();
    $boom.show();
    $boom.on('click', newLev);
  }

  // lose game screen
  function lose () {
    $main.hide();
    $lose.show();
    $lose.on('click', reset);
  }

  // Stop random square generator
  function stopIntervals () {
    clearInterval(interval);
    clearInterval(seconds);
  }

  // countdown timer
  function countdown() {
    counter--;
    $timeCountdown.html(counter);
    stopGame();
  }

  // reset game
  function reset() {
    counter = 30;
    score = 0;
    $main.show();
    $lose.hide();
  }

  // start next level
  function newLev () {
    $boom.hide();
    $main.show();
    currentLevel++;
    counter = 30;
    secondLevel();
  }
  // console.log(currentLevel);


  // new settings for second level
  function secondLevel () {
    if (levels[currentLevel] === 6) {
      makeHarder();
    }
    console.log(levels[currentLevel]);
  }

  // make game harder
  function makeHarder () {
    speed = speed-200;
    remove = remove-200;
    score = 0;
    clearTimeout();
    timeOut();
  }  //


});
