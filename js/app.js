$(() => {

  //settings at Start
  let currentLevel = 1;
  let score = 0;
  let counter = 31;
  let choose = 2000;
  let speed = 1000;
  let remove = 1000;
  let $timeCountdown = null;
  let gameInterval;
  let seconds;

  // object to store levels
  const levels = {
    1: 3,
    2: 6,
    3: 9,
    4: 12,
    5: 15
  };

  // Get DOM variables
  const $welcome = $('.welcome');
  const $main = $('.main');
  const $li = $('li');
  const $score = $('.score');
  const $enter = $('.enter');
  const $boom = $('.boom');
  const $lose = $('.lose');
  const $win = $('.win');
  const $target = $('.target');
  const $again = $('.again');
  let $randomSquare;
  $timeCountdown = $('.timer');

  //hide main screen and show welcome
  function welcome () {
    $main.hide();
    $boom.hide();
    $lose.hide();
    $win.hide();
    new Audio('sounds/roar.mp3').play();
    $enter.on('click', main);
  }
  welcome();

  // reveal main screen and hide welcome
  function main () {
    $welcome.hide();
    $main.show();
    startGame();
    backgroundAudio();
  }

  // start game function
  function startGame () {
    score = 0;
    counter = 31;
    $score.html(score);
    pickRandom();
    clickedOn();
    gameInterval = setInterval(pickRandom, choose);
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
    new Audio('sounds/swallow.mp3').play();
    score++;
    stopGame();
    $score.html(score);
  }

  // Stop game at certain score
  function stopGame () {
    if (score === levels[currentLevel]) {
      currentLevel++;
      stopIntervals();
      levelWin();
    } else {
      if (counter <= 0) {
        stopIntervals();
        levelLose();
      }
    }
  }

  // stop intervals
  function stopIntervals () {
    clearInterval(seconds);
    clearInterval(gameInterval);
  }

  // win game screen
  function levelWin () {
    $main.hide();
    new Audio('sounds/boom.mp3').play();
    if (currentLevel === 4) {
      $win.show();
      new Audio('sounds/cheer.mp3').play();
      $again.on('click', restart);
    } else {
      $boom.show().on('click', nextLevel);
      $target.html(`Your new target is ${levels[currentLevel]} sausages`);
    }
  }

  // lose game screen
  function levelLose () {
    new Audio('sounds/roar.mp3').play();
    $main.hide();
    $lose.show().on('click', reset);
  }

  // countdown timer
  function countdown() {
    counter--;
    $timeCountdown.html(counter);
    stopGame();
  }

  // reset game
  function reset() {
    $main.show();
    $lose.hide();
    stopIntervals();
    startGame();
  }

  // start next level
  function nextLevel () {
    stopIntervals();
    $boom.hide();
    $main.show();
    makeHarder();
  }

  // make game harder
  function makeHarder () {
    speed = speed-100;
    remove = remove-100;
    choose = choose-100;
    startGame();
  }

  function backgroundAudio () {
    new Audio('sounds/01 Monster Mash.m4a').play();
  }
  function restart () {
    $again.on('click', location.reload());
  }

});
